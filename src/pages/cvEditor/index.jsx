import { Button, Form, Image, Input } from "antd";
import { Steps } from "antd";
import { useEffect, useState } from "react";
import EditorStyle from "./EditorStyle";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import MainButton from "../../components/mainButton";
import CV1 from "./cv/CV1";
import CV2 from "./cv/CV2";
import {
  PlusOutlined,
  MinusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { usePDF } from "react-to-pdf";
const { TextArea } = Input;
import BackArrow from "../../images/BackArrow.svg";
import { getAnswer } from "../../utils/groq";
import CV3 from "./cv/CV3";
import {ArrowLeftOutlined} from "@ant-design/icons";
import { motion } from "framer-motion";


const Editor = () => {
  const { id } = useParams();
  const { toPDF, targetRef } = usePDF({ filename: "cv.pdf" });
  const [step, setStep] = useState(0);
  const [darkMode] = useOutletContext();
  const mode = darkMode ? "dark" : "light";
  const initialCVValue = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    position: "",
    socialLink: "",
    experiences: [],
    educations: [],
    skills: [],
    about: [],
  };
  useEffect(() => {
    const cvStateStorage = localStorage.getItem(id);
    if (cvStateStorage) {
      setCvState(JSON.parse(cvStateStorage));
    }
  }, [id]);
  const [cvState, setCvState] = useState(initialCVValue);
  const STEP_TAB = [
    {
      title: "Contact",
    },
    {
      title: "Experience",
    },
    {
      title: "Education",
    },
    {
      title: "Skills",
    },
    {
      title: "About",
    },
    {
      title: "Finish",
    },
  ];
  const handleBack = () => {
    setStep((pre) => pre - 1);
  };
  const onFinishForm = () => {
    setStep((step) => step + 1);
  };
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(cvState);
  }, [cvState, form]);

  const renderStepOneForm = () => {
    return (
      <Form
        form={form}
        initialValues={cvState}
        onFinish={onFinishForm}
        name="control-hooks flex justify-end"
      >
        <div className="flex gap-3 ">
          <Form.Item
            className="grow"
            name="firstName"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) => handleChangeValue(e.target.value, "firstName")}
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            className="grow"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) => handleChangeValue(e.target.value, "lastName")}
              placeholder="Last Name"
            />
          </Form.Item>
        </div>

        <Form.Item name="address" rules={[{ required: true }]}>
          <Input
            onChange={(e) => handleChangeValue(e.target.value, "address")}
            placeholder="Address"
          />
        </Form.Item>
        <div className="flex gap-3 ">
          <Form.Item
            className="grow"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input
              placeholder="Email"
              onChange={(e) => handleChangeValue(e.target.value, "email")}
            />
          </Form.Item>
          <Form.Item className="grow" name="phone">
            <Input
              placeholder="Phone"
              onChange={(e) => handleChangeValue(e.target.value, "phone")}
            />
          </Form.Item>
        </div>

        <Form.Item name="position" rules={[{ required: true }]}>
          <Input
            placeholder="Position"
            onChange={(e) => handleChangeValue(e.target.value, "position")}
          />
        </Form.Item>
        <Form.Item name="socialLink">
          <Input
            placeholder="Social Link"
            onChange={(e) => handleChangeValue(e.target.value, "socialLink")}
          />
        </Form.Item>
        <Form.Item className="text-right mr-3">
          <MainButton title="Next to Experience" />
        </Form.Item>
      </Form>
    );
  };
  const renderStepTwoForm = () => {
    return (
      <Form
        form={form}
        onFinish={onFinishForm}
        initialValues={cvState}
        name="control-hooks flex justify-end"
      >
        <Form.List name="experiences">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <div key={key}>
                  <div className="flex gap-3 ">
                    <Form.Item
                      className="grow"
                      {...restField}
                      name={[name, "jobTitle"]}
                      rules={[
                        { required: true, message: "Please enter job title" },
                      ]}
                    >
                      <Input
                        placeholder="Job title"
                        onChange={(e) =>
                          handleChangeValue(
                            { jobTitle: e.target.value, index },
                            "experience"
                          )
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      className="grow"
                      {...restField}
                      name={[name, "employer"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter required field",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Employer"
                        onChange={(e) =>
                          handleChangeValue(
                            { employer: e.target.value, index },
                            "experience"
                          )
                        }
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    className="grow"
                    {...restField}
                    name={[name, "city"]}
                  >
                    <Input
                      placeholder="City (Optional)"
                      onChange={(e) =>
                        handleChangeValue(
                          { city: e.target.value, index },
                          "experience"
                        )
                      }
                    />
                  </Form.Item>

                  <div className="flex gap-3 ">
                    <Form.Item
                      className="grow"
                      {...restField}
                      name={[name, "start"]}
                      rules={[
                        { required: true, message: "Please enter start time" },
                      ]}
                    >
                      <Input
                        placeholder="Start time"
                        onChange={(e) =>
                          handleChangeValue(
                            { start: e.target.value, index },
                            "experience"
                          )
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      className="grow"
                      {...restField}
                      name={[name, "end"]}
                      rules={[
                        { required: true, message: "Please enter end time" },
                      ]}
                    >
                      <Input
                        placeholder="End time"
                        onChange={(e) =>
                          handleChangeValue(
                            { end: e.target.value, index },
                            "experience"
                          )
                        }
                      />
                    </Form.Item>
                  </div>
                  <Form.Item
                    className="grow"
                    {...restField}
                    name={[name, "projectLink"]}
                  >
                    <Input
                      placeholder="project link (Optional)"
                      onChange={(e) =>
                        handleChangeValue(
                          { projectLink: e.target.value, index },
                          "experience"
                        )
                      }
                    />
                  </Form.Item>

                  <Form.List
                    name={[name, "descriptions"]}
                    initialValue={[{ description: "" }]}
                  >
                    {(descFields, { add: addDesc, remove: removeDesc }) => (
                      <>
                        {descFields.map(
                          (
                            { key: descKey, name: descName, ...descRestField },
                            descIndex
                          ) => (
                            <Form.Item
                              key={descKey}
                              className="grow"
                              {...descRestField}
                              name={[descName, "description"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter description",
                                },
                              ]}
                            >
                              <TextArea
                                rows={3}
                                placeholder="Description"
                                onChange={(e) =>
                                  handleChangeValue(
                                    {
                                      description: e.target.value,
                                      index,
                                      descriptionIndex: descIndex,
                                    },
                                    "descriptionE"
                                  )
                                }
                              />
                            </Form.Item>
                          )
                        )}
                        <Form.Item className="w-[100%] text-center">
                          <div className="flex justify-center gap-5">
                            <Button
                              type="dashed"
                              onClick={() => addDesc()}
                              icon={<PlusOutlined />}
                            >
                              Add description
                            </Button>
                            {descFields.length > 0 && (
                              <Button
                                type="dashed"
                                danger
                                onClick={() => {
                                  removeDesc(descFields.length - 1);
                                  handleChangeValue(
                                    {
                                      index,
                                      descriptionIndex: descFields.length - 1,
                                    },
                                    "removeDescriptionE"
                                  );
                                }}
                                icon={<PlusOutlined />}
                              >
                                Remove description
                              </Button>
                            )}
                          </div>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>

                  {fields.length > 0 && (
                    <Form.Item className="">
                      <Button
                        type="dashed"
                        danger
                        onClick={() => {
                          handleChangeValue({ index }, "removeExperience");
                          remove(name);
                        }}
                        block
                        icon={<MinusOutlined />}
                      >
                        Remove Experience
                      </Button>
                    </Form.Item>
                  )}
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Experience
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item className="w-full  mr-3">
          <div className="flex justify-between items-center">
            <Image
              onClick={handleBack}
              width={50}
              className="hover:opacity-[0.8]"
              preview={false}
              src={BackArrow}
            />
            <MainButton title="Next to Education" />
          </div>
        </Form.Item>
      </Form>
    );
  };

  const renderStepThreeForm = () => {
    return (
      <Form
        form={form}
        initialValues={cvState}
        onFinish={onFinishForm}
        name="control-hooks flex justify-end"
      >
        <Form.List name="educations">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <div key={key}>
                  <div className="flex gap-3 ">
                    <Form.Item
                      className="grow"
                      {...restField}
                      name={[name, "eduTitle"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter education title",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Education title"
                        onChange={(e) =>
                          handleChangeValue(
                            { eduTitle: e.target.value, index },
                            "education"
                          )
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      className="grow"
                      {...restField}
                      name={[name, "mark"]}
                    >
                      <Input
                        placeholder="GPA | Mark (Optional)"
                        onChange={(e) =>
                          handleChangeValue(
                            { mark: e.target.value, index },
                            "education"
                          )
                        }
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    className="grow"
                    {...restField}
                    name={[name, "city"]}
                  >
                    <Input
                      placeholder="City (optional)"
                      onChange={(e) =>
                        handleChangeValue(
                          { city: e.target.value, index },
                          "education"
                        )
                      }
                    />
                  </Form.Item>

                  <div className="flex gap-3 ">
                    <Form.Item
                      className="grow"
                      {...restField}
                      name={[name, "start"]}
                      rules={[
                        { required: true, message: "Please enter start time" },
                      ]}
                    >
                      <Input
                        placeholder="Start time"
                        onChange={(e) =>
                          handleChangeValue(
                            { start: e.target.value, index },
                            "education"
                          )
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      className="grow"
                      {...restField}
                      name={[name, "end"]}
                      rules={[
                        { required: true, message: "Please enter end time" },
                      ]}
                    >
                      <Input
                        placeholder="End time"
                        onChange={(e) =>
                          handleChangeValue(
                            { end: e.target.value, index },
                            "education"
                          )
                        }
                      />
                    </Form.Item>
                  </div>

                  <Form.List
                    name={[name, "descriptions"]}
                    initialValue={[{ description: "" }]}
                  >
                    {(descFields, { add: addDesc, remove: removeDesc }) => (
                      <>
                        {descFields.map(
                          (
                            { key: descKey, name: descName, ...descRestField },
                            descIndex
                          ) => (
                            <Form.Item
                              key={descKey}
                              className="grow"
                              {...descRestField}
                              name={[descName, "description"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter description",
                                },
                              ]}
                            >
                              <TextArea
                                rows={3}
                                placeholder="Description"
                                onChange={(e) =>
                                  handleChangeValue(
                                    {
                                      description: e.target.value,
                                      index,
                                      descriptionIndex: descIndex,
                                    },
                                    "descriptionED"
                                  )
                                }
                              />
                            </Form.Item>
                          )
                        )}
                        <Form.Item className="w-[100%] text-center">
                          <div className="flex justify-center gap-5">
                            <Button
                              type="dashed"
                              onClick={() => addDesc()}
                              icon={<PlusOutlined />}
                            >
                              Add description
                            </Button>
                            {descFields.length > 0 && (
                              <Button
                                type="dashed"
                                danger
                                onClick={() => {
                                  removeDesc(descFields.length - 1);
                                  handleChangeValue(
                                    {
                                      index,
                                      descriptionIndex: descFields.length - 1,
                                    },
                                    "removeDescriptionED"
                                  );
                                }}
                                icon={<PlusOutlined />}
                              >
                                Remove description
                              </Button>
                            )}
                          </div>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>

                  {fields.length > 0 && (
                    <Form.Item className="">
                      <Button
                        type="dashed"
                        danger
                        onClick={() => {
                          handleChangeValue({ index }, "removeEducation");
                          remove(name);
                        }}
                        block
                        icon={<MinusOutlined />}
                      >
                        Remove education
                      </Button>
                    </Form.Item>
                  )}
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add education
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item className="w-full  mr-3">
          <div className="flex justify-between items-center">
            <Image
              onClick={handleBack}
              width={50}
              className="hover:opacity-[0.8]"
              preview={false}
              src={BackArrow}
            />
            <MainButton title="Next to Skills" />
          </div>
        </Form.Item>
      </Form>
    );
  };

  const renderStepFourForm = () => {
    return (
      <Form
        form={form}
        initialValues={cvState}
        onFinish={onFinishForm}
        name="control-hooks flex justify-end"
      >
        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <div key={key}>
                  <div className="flex gap-3 ">
                    <Form.Item
                      className="grow"
                      {...restField}
                      name={[name, "skillTitle"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter skill title",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Skill title (example: Languages, Technical Skills)"
                        onChange={(e) =>
                          handleChangeValue(
                            { skillTitle: e.target.value, index },
                            "skill"
                          )
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      className="grow"
                      {...restField}
                      name={[name, "skillDetail"]}
                    >
                      <Input
                        placeholder="Skill Detail (example: English (native)"
                        onChange={(e) =>
                          handleChangeValue(
                            { skillDetail: e.target.value, index },
                            "skill"
                          )
                        }
                      />
                    </Form.Item>
                  </div>

                  {fields.length > 0 && (
                    <Form.Item className="">
                      <Button
                        type="dashed"
                        danger
                        onClick={() => {
                          handleChangeValue({ index }, "removeSkill");
                          remove(name);
                        }}
                        block
                        icon={<MinusOutlined />}
                      >
                        Remove skill
                      </Button>
                    </Form.Item>
                  )}
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add skill
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item className="w-full  mr-3">
          <div className="flex justify-between items-center">
            <Image
              onClick={handleBack}
              width={50}
              className="hover:opacity-[0.8]"
              preview={false}
              src={BackArrow}
            />
            <MainButton title="Next to About" />
          </div>
        </Form.Item>
      </Form>
    );
  };
  const isShowGenerateButton = (index) => {
    const aboutExist = cvState?.about?.find((item) => item.index == index);
    return !!aboutExist?.aboutDes && !!aboutExist?.aboutTitle;
  };
  const getKeySkill = () => {
    let keySkill = "";
    cvState.skills.forEach((item) => (keySkill += item.skillDetail));
    return keySkill;
  };
  const handleGenerate = async (index, keyword, title) => {
    const content = await getAnswer(
      `Generate an ${title} in cv with my keyword max length 500, min: 300 :${keyword} my key skill is ${getKeySkill()} `
    );
    const newAbout = cvState?.about?.map((item) => {
      if (item.index == index) {
        item.aboutDes = content.split(/:(.*)/s)[1];
      }
      return item;
    });
    setCvState((pre) => ({ ...pre, about: newAbout }));
    localStorage.setItem(id, JSON.stringify(cvState));
  };
  const getKeywordAndTitle = (index) => {
    const aboutExist = cvState?.about?.find((item) => item.index == index);
    return [aboutExist.aboutDes, aboutExist.aboutTitle];
  };
  const renderStepFiveForm = () => {
    return (
      <Form
        form={form}
        initialValues={cvState}
        onFinish={onFinishForm}
        name="control-hooks flex justify-end"
      >
        <Form.List name="about">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <div key={key}>
                  <Form.Item
                    className="grow"
                    {...restField}
                    name={[name, "aboutTitle"]}
                    rules={[
                      {
                        required: true,
                        message: "Please enter title",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Title (example: Objective)"
                      onChange={(e) =>
                        handleChangeValue(
                          { aboutTitle: e.target.value, index },
                          "about"
                        )
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    className="grow relative"
                    {...restField}
                    name={[name, "aboutDes"]}
                  >
                    {isShowGenerateButton(index) ? (
                      <Button
                        onClick={() =>
                          handleGenerate(index, ...getKeywordAndTitle(index))
                        }
                        className="absolute z-10 bottom-0 right-0"
                      >
                        AI Generate
                      </Button>
                    ) : (
                      ""
                    )}

                    <Input.TextArea
                      value={getAboutDes(index)?.trimStart()}
                      rows={8}
                      placeholder="Description | Keyword to generate"
                      onChange={(e) =>
                        handleChangeValue(
                          { aboutDes: e.target.value, index },
                          "about"
                        )
                      }
                    />
                  </Form.Item>

                  {fields.length > 0 && (
                    <Form.Item className="">
                      <Button
                        type="dashed"
                        danger
                        onClick={() => {
                          handleChangeValue({ index }, "removeAbout");
                          remove(name);
                        }}
                        block
                        icon={<MinusOutlined />}
                      >
                        Remove about
                      </Button>
                    </Form.Item>
                  )}
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add about
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item className="w-full  mr-3">
          <div className="flex justify-between items-center">
            <Image
              onClick={handleBack}
              width={50}
              className="hover:opacity-[0.8]"
              preview={false}
              src={BackArrow}
            />
            <MainButton title="Next to Finish" />
          </div>
        </Form.Item>
      </Form>
    );
  };
  const getAboutDes = (index) => {
    return cvState?.about?.find((item) => item.index == index)?.aboutDes;
  };
  const getFormByStepValue = (stepValue) => {
    switch (stepValue) {
      case 0:
        return renderStepOneForm();
      case 1:
        return renderStepTwoForm();
      case 2:
        return renderStepThreeForm();
      case 3:
        return renderStepFourForm();
      case 4:
        return renderStepFiveForm();
    }
  };
  const getCvById = (cvID, cvState) => {
    switch (cvID) {
      case "1":
        return <CV1 cvState={cvState} />;
      case "2":
        return <CV2 cvState={cvState} />;
      case "3":
        return <CV3 cvState={cvState} />;
    }
  };

  const handleChangeValue = (value, field) => {
    switch (field) {
      case "firstName": {
        setCvState((prev) => ({ ...prev, firstName: value }));
        break;
      }
      case "lastName": {
        setCvState((prev) => ({ ...prev, lastName: value }));
        break;
      }
      case "address": {
        setCvState((prev) => ({ ...prev, address: value }));
        break;
      }
      case "email": {
        setCvState((prev) => ({ ...prev, email: value }));
        break;
      }
      case "phone": {
        setCvState((prev) => ({ ...prev, phone: value }));
        break;
      }
      case "position": {
        setCvState((prev) => ({ ...prev, position: value }));
        break;
      }
      case "socialLink": {
        setCvState((prev) => ({ ...prev, socialLink: value }));
        break;
      }
      case "experience": {
        let experiences = cvState.experiences;

        if (experiences.length === 0) {
          experiences.push({ ...value, index: 0, descriptions: [] });
        } else {
          let isFound = false;
          experiences = experiences.map((item) => {
            if (item.index === value.index) {
              isFound = true;
              return { ...item, ...value };
            }
            return item;
          });
          if (!isFound) {
            const index = experiences[experiences.length - 1].index + 1;
            experiences.push({ ...value, index, descriptions: [] });
          }
        }
        setCvState((prev) => ({ ...prev, experiences }));
        break;
      }

      case "descriptionE": {
        let experiences = cvState.experiences;
        const { index, descriptionIndex, description } = value;

        experiences = experiences.map((item) => {
          if (item.index === index) {
            const descriptions = [...item.descriptions];
            descriptions[descriptionIndex] = { description };
            return { ...item, descriptions };
          }
          return item;
        });

        setCvState((prev) => ({ ...prev, experiences }));
        break;
      }
      case "removeExperience": {
        let experiences = cvState.experiences.filter(
          (_, i) => i !== value.index
        );
        setCvState((prev) => ({ ...prev, experiences }));
        break;
      }
      case "removeDescriptionE": {
        let experiences = cvState.experiences.map((item, i) => {
          if (i === value.index) {
            let descriptions = item.descriptions.filter(
              (_, j) => j !== value.descriptionIndex
            );
            return { ...item, descriptions };
          }
          return item;
        });
        setCvState((prev) => ({ ...prev, experiences }));
        break;
      }

      case "education": {
        let educations = cvState.educations;

        if (educations.length === 0) {
          educations.push({ ...value, index: 0, descriptions: [] });
        } else {
          let isFound = false;
          educations = educations.map((item) => {
            if (item.index === value.index) {
              isFound = true;
              return { ...item, ...value };
            }
            return item;
          });
          if (!isFound) {
            const index = educations[educations.length - 1].index + 1;
            educations.push({ ...value, index, descriptions: [] });
          }
        }
        setCvState((prev) => ({ ...prev, educations }));
        break;
      }

      case "descriptionED": {
        let educations = cvState.educations;
        const { index, descriptionIndex, description } = value;

        educations = educations.map((item) => {
          if (item.index === index) {
            const descriptions = [...item.descriptions];
            descriptions[descriptionIndex] = { description };
            return { ...item, descriptions };
          }
          return item;
        });

        setCvState((prev) => ({ ...prev, educations }));
        break;
      }
      case "removeEducation": {
        let educations = cvState.educations.filter((_, i) => i !== value.index);
        setCvState((prev) => ({ ...prev, educations }));
        break;
      }
      case "removeDescriptionED": {
        let educations = cvState.educations.map((item, i) => {
          if (i === value.index) {
            let descriptions = item.descriptions.filter(
              (_, j) => j !== value.descriptionIndex
            );
            return { ...item, descriptions };
          }
          return item;
        });
        setCvState((prev) => ({ ...prev, educations }));
        break;
      }
      case "skill": {
        let skills = cvState.skills;
        if (skills.length === 0) {
          skills.push({ ...value, index: 0 });
        } else {
          let isFound = false;
          skills = skills.map((item) => {
            if (item.index === value.index) {
              isFound = true;
              return { ...item, ...value };
            }
            return item;
          });
          if (!isFound) {
            const index = skills[skills.length - 1].index + 1;
            skills.push({ ...value, index });
          }
        }
        setCvState((prev) => ({ ...prev, skills }));
        break;
      }
      case "removeSkill": {
        let skills = cvState.skills.filter((_, i) => i !== value.index);
        setCvState((prev) => ({ ...prev, skills }));
        break;
      }
      case "about": {
        let about = cvState.about;
        if (about.length === 0) {
          about.push({ ...value, index: 0 });
        } else {
          let isFound = false;
          about = about.map((item) => {
            if (item.index === value.index) {
              isFound = true;
              return { ...item, ...value };
            }
            return item;
          });
          if (!isFound) {
            const index = about[about.length - 1].index + 1;
            about.push({ ...value, index });
          }
        }
        setCvState((prev) => ({ ...prev, about }));
        break;
      }
      case "removeAbout": {
        let about = cvState.about.filter((_, i) => i !== value.index);
        setCvState((prev) => ({ ...prev, about }));
        break;
      }

      default: {
        console.warn(`Unhandled field: ${field}`);
      }
    }

    localStorage.setItem(id, JSON.stringify(cvState));
  };
  const renderCV = (type) => {
    if (type == "editing")
      return (
        <div className="fixed-block max-w-[700px] p-5 bg-white max-h-screen">
          {getCvById(id, cvState)}
        </div>
      );

    return (
      <div className="w-full p-5 flex justify-center min-h-screen md:pt-[10rem] lg:pt-0">
        <div className="relative lg:w-[55%] w-[70%] ">
        <Button
            className="btn-download relative top-[30px] font-bold" 
            onClick={() => toPDF()}
          >
            Download
          </Button>
          <Image
            onClick={handleBack}
            width={50}
            className="hover:opacity-[0.8] absolute top-0 md:left-[-15em] left-[-11em] "
            preview={false}
            src={BackArrow}
          />
          <div
            ref={targetRef}
            className="px-[20px] py-[10px] border-1 bg-white mt-12 "
          >
            {getCvById(id, cvState)}
          </div>

        </div>
      </div>
    );
  };
  const buttonHover = {
    initial: {
      y: -10,
      opacity: 1,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const navigate = useNavigate();
  const renderEditor = () => {
    return (
      <div className="flex justify-between m-2 p-5 gap-3 min-h-screen  md:mt-[100px] lg:mt-[0]  min-[320px]:flex-col min-[320px]:max-w-full min-[900px]:max-w-[50%]">
        <div className="w-[100%] grow ">

        <motion.button
      onClick={()=> navigate("/templates")}
      variants={buttonHover}
      className="text-[white] border-2 border-[#FF7714]  p-[0.75rem] font-bold shadow-2xl flex gap-[0.5rem] w-[248px] h-[55px] justify-center items-center "
      initial="initial"
      whileHover="hover"
      animate="animate"
    >
      <ArrowLeftOutlined style={{fontSize: "1.5rem"}}/>Back To Templates 
    </motion.button>

          <div className="hidden lg:block">
            <Steps
              className={`${mode} `}
              style={{ color: "white" }}
              size="small"
              current={step}
              items={STEP_TAB}
            />
          </div>

          <div className="w-full text-center">
            <h1 className="font-sans text-[#000] dark:text-[#fff] text-4xl  font-semibold my-8 ">
              <span className="text-[#FF7714] ">Enter your information</span>
            </h1>
          </div>
          {getFormByStepValue(step)}
        </div>
        {renderCV("editing")}
      </div>
    );
  };
  return (
    <>
      <EditorStyle>
        {" "}
        {step == 5 ? renderCV("finish") : renderEditor()}
      </EditorStyle>
    </>
  );
};
export default Editor;
