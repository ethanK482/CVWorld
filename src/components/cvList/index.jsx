import { Image } from "antd";
import CV1 from "./images/CV1.jpg";
import CV2 from "./images/CV2.jpg";
import CV3 from "./images/CV3.png";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const cvList = [CV1, CV2, CV3];

const CVList = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBlurImage, setIsBlurImage] = useState(false);
  const [indexBlur, setIndexBlur] = useState();
  const carousel = useRef(null);
  const navigate = useNavigate();
  const getImageBlurClassName = () => {
    return isBlurImage
      ? "transition duration-300 ease-in-out filter blur-sm"
      : "";
  };
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }
    return false;
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
    navigate(`/editor/${index+1}`)
  };
  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-10 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className=" carousel-container  relative flex justify-center gap-5 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {cvList.map((cv, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative  snap-start"
              >
                <div className="relative h-[400px] w-[300px] aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0">
                  {index === indexBlur && (
                    <button
                      onClick={() => handleClickEdit(index)}
                      className=" absolute top-[45%] left-[44%] z-10 flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
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
      </div>
    </div>
  );
};
export default CVList;
