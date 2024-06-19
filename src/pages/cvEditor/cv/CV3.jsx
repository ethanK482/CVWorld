/* eslint-disable react/prop-types */
const CV3 = ({ cvState }) => {
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
    <div className="max-w-2xl mx-auto p-5">
      <header className="mb-2 text-left">
        <h1 className="text-4xl font-bold ">
          {firstName} {lastName}
        </h1>
        <h1 className="text-2xl  mb-1 ">{position}</h1>
        <p className=" text-white text-sm p-1 bg-[#080808]">
          {address} | {phone}| {email}
        </p>
      </header>

      <section className="mb-2">
        {!!experiences.length > 0 && (
          <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-2">
            Work Experience
          </h2>
        )}
        {experiences?.map((item, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-xl font-semibold">{item.jobTitle} - {item.employer}</h3>
            <div className="pl-2">
              <p className="italic ">{item.city}</p>
              <p className="text-gray-600">
                {item.start} to {item.end}
              </p>
              <ul className="list-disc list-inside ml-4">
                {item.descriptions?.map((item, index) => (
                  <li key={index}>{item.description}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <section className="mb-2">
        {!!skills.length > 0 && (
          <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-2">
            Skills
          </h2>
        )}
        <ul className="grid grid-cols-2 gap-1">
          {skills?.map((item, index) => (
            <li key={index}>
              <li> {item.skillTitle}</li>
            </li>
          ))}
        </ul>
      </section>


      <section className="mb-3">
        {!!educations.length && (
         <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-2">
         Education
       </h2>
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
      </section>

  
      <section>
        {!!about.length && (
           <h2 className="text-2xl font-semibold border-b-2  border-black pb-2 mb-2">
           About
         </h2>
        )}
        <div>
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
      </section>
    </div>
  );
};
export default CV3;
