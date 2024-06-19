/* eslint-disable react/prop-types */
const CV2 = ({ cvState }) => {
  const {
    firstName,
    lastName,
    address,
    email,
    phone,
    position,
    socialLink,
    experiences,
    educations,
    skills,
    about,
  } = cvState;
  return (
    <>
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex justify-between items-start">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#6B6254]">{position}</h1>
            <h2 className="text-xl">
              {firstName} {lastName}
            </h2>
          </div>
          <div className="text-sm my-4">
            {phone && <p>Phone: {phone}</p>}
            {email && <p>Email: {email}</p>}
            {socialLink && <p>Website: {socialLink}</p>}
            {address && <p>Address: {address}</p>}
          </div>
        </div>

        <div>
          {!!experiences.length > 0 && (
            <h3 className="text-lg font-bold text-[#5A5755] bg-[#F0E8E1] leading-6  px-1">
              Work Experience
            </h3>
          )}
          {experiences?.map((item, index) => (
            <div key={index} className="my-2">
              <h4 className="font-semibold">{item.jobTitle}</h4>
              <p>
                {item.employer} ({item.start} - {item.end})  {item.projectLink && <a style={{color:"blue" }}  href={item.projectLink}>Project link</a>}
              </p>
             
              <ul className="list-disc list-inside">
                {item.descriptions?.map((item, index) => (
                  <li key={index}>{item.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-4">
          {!!educations.length > 0 && (
            <h3 className="text-lg font-bold text-[#5A5755] bg-[#F0E8E1] leading-6  px-1">
              Education
            </h3>
          )}
          {educations?.map((item, index) => (
            <div key={index} className="mb-1">
              <h4 className="text-l font-bold">{item.eduTitle}</h4>
              <p className="text-gray-600 text-sm">
                ({item.start} - {item.end}) - GPA: {item.mark}
              </p>
              <ul className="list-disc list-inside ml-4 text-sm">
                {item.descriptions?.map((item, index) => (
                  <li key={index}>{item.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="my-4">
          {!!skills.length > 0 && (
            <h3 className="text-lg font-bold text-[#5A5755] bg-[#F0E8E1] leading-6  px-1">
              Skills
            </h3>
          )}
          <ul className="list-disc list-inside ml-4 text-sm">
            {skills?.map((item, index) => (
              <li key={index}>
                {item.skillTitle}: {item.skillDetail}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {!!about.length > 0 && (
            <h3 className="text-lg font-bold text-[#5A5755] bg-[#F0E8E1] leading-6  px-1">
              About
            </h3>
          )}
          <ul className="list-disc list-inside ml-4 text-sm">
            {about?.map((item, index) => (
              <div key={index}>
                <li>
                  {" "}
                  <span className="text-l font-semibold">
                    {item.aboutTitle}
                  </span>
                  <p className="text-sm">{item.aboutDes}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default CV2;
