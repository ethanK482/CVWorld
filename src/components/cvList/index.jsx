import { Image } from "antd";
import CV1 from "./images/CV1.jpg";
import CV2 from "./images/CV2.jpg";
import CV3 from "./images/CV3.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const cvList = [CV1, CV2, CV3];

const CVList = () => {
  const [isBlurImage, setIsBlurImage] = useState(false);
  const [indexBlur, setIndexBlur] = useState();
  const navigate = useNavigate();
  const getImageBlurClassName = () => {
    return isBlurImage
      ? "transition duration-300 ease-in-out filter blur-sm"
      : "";
  };

  const handleHoverImage = (index) => {
    setIndexBlur(index);
    setIsBlurImage(true);
  };
  const handleLeaveHover = () => {
    setIndexBlur(undefined);
    setIsBlurImage(false);
  };
  const handleClickEdit = (index) => {
    navigate(`/editor/${index + 1}`);
  };

  return (
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-20  min-[390px]:mt-5">
  {cvList.map((cv, index) => {
    return (
      <div key={index} className="text-center relative">
        <div className="relative md:h-[400px] lg:h-[470px] min-[390px]:h-[380px]  w-[100%] aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0">
          {index === indexBlur && (
            <button
              onClick={() => handleClickEdit(index)}
              className="absolute top-[45%] left-[44%] z-10 flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
              onMouseEnter={() => handleHoverImage(index)}
              onMouseLeave={handleLeaveHover}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          )}
          <Image
            onMouseEnter={() => handleHoverImage(index)}
            onMouseLeave={handleLeaveHover}
            src={cv}
            width={"100%"}
            height={"100%"}
            preview={false}
            className={`w-full aspect-square ${
              index === indexBlur ? getImageBlurClassName() : ""
            }`}
          />
        </div>
      </div>
    );
  })}
</div>


  );
};
export default CVList;
