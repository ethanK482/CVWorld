/* eslint-disable react/prop-types */
const CV1 = ({ cvState }) => {
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
  console.log(experiences)
  return (
    <>
      <header className="text-center mb-3 ">
        <h1 className="text-2xl font-bold">
          {firstName} {lastName}
        </h1>
        <h2 className="text-xl text-gray-600">{position}</h2>
        <p className="text-xs">
          {address} · {phone} · {email} ·{socialLink}
        </p>
      </header>

      <section className="mb-3">
        {!!(experiences.length > 0) && (
          <h3 className="text-xl font-semibold mb-1">Work Experience</h3>
        )}
        {experiences?.map((item, index) => (
          <div key={index} className="mb-1">
            <h4 className="text-l font-bold">
              {item.jobTitle} - {item.employer}
            </h4>
            <p className="text-gray-600 text-sm">
            ({item.start}-{item.end}) · {item.city}  {item.projectLink && <><span>·</span> <a  style={{color:"blue" }} href={item.projectLink}>Project link</a></>}
            </p>
            <ul className="list-disc  ml-4 text-sm">
              {item.descriptions?.map((item, index) => (
                <li key={index}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-3">
        {!!educations.length && (
          <h3 className="text-xl font-semibold mb-1">Education</h3>
        )}
        {educations?.map((item, index) => (
          <div key={index} className="mb-1">
            <h4 className="text-l font-bold">{item.eduTitle}</h4>
            <p className="text-gray-600 text-sm">
              ({item.start} - {item.end}) - GPA: {item.mark}
            </p>
            <ul className="list-disc  ml-4 text-sm">
              {item.descriptions?.map((item, index) => (
                <li key={index}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        {!!skills.length && (
          <h3 className="text-xl font-semibold mb-1">Skills</h3>
        )}
        <ul className="list-disc  ml-4 text-sm">
          {skills?.map((item, index) => (
            <li key={index}>
              {item.skillTitle}: {item.skillDetail}
            </li>
          ))}
        </ul>
      </section>
      <section>
        {!!about.length && (
          <h3 className="text-xl font-semibold mb-1">About</h3>
        )}
        <div>
          <ul className=" list-inside ml-4 text-sm">
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
      </section>
    </>
  );
};
export default CV1;




