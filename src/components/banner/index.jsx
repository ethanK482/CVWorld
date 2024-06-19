import { Image } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import CV from "../../images/CV.svg";
import cv1 from "../../images/cv1.svg";
import cv2 from "../../images/cv2.svg";
import cv3 from "../../images/cv3.svg";
import image3 from "../../images/image3.svg";
import image4 from "../../images/image4.svg";
import image5 from "../../images/image5.svg";

import MainButton from "../mainButton/index.jsx";

import Around from "../../images/Around.jsx";
import { useEffect, useState } from "react";
import { Guides } from "../guide/index.jsx";
const contents = [
  "Write your future into the new world",
  "Create a Professional CV in Minutes",
  "Stand Out from the Crowd with CV World",
];
const Banner = () => {
  const CVS = [CV, cv1, cv2, cv3];

  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isShowFront, setIsShowFront] = useState(true);
  const handleImage = () => {
    {
      setIsShowFront(!isShowFront);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < contents.length - 1) {
        setIndex((index) => index + 1);
      } else {
        setIndex(0);
      }
    }, [3000]);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
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

  const CvVariants = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
        staggerChildren: 0.1,
      },
    },
  };
  const CvAroundVariants = {
    initial: {
      x: -1000,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
        staggerChildren: 0.1,
      },
    },
  };

  const CvBlockVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="banner flex flex-col items-center md:items-center md:flex-col xl:flex-row xl:justify-between">
        <motion.div
          className="textContainer leading-[1.2] pt-[3.5rem] xl:pl-[10rem] xl:pt-[10.25rem] md:pt-[2rem] md:w-[30rem] xl:w-[60rem] "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-[#090909] dark:text-[#ffff] xl:text-[4rem] md:text-[4rem] text-[2.25rem]  font-bold "
            variants={textVariants}
            whileHover="hover"
          >
            CV Web Design
          </motion.h2>
          <motion.h2

            className="dark:text-[#ffff] dark:text-[#ffff] xl:text-[4rem] md:text-[4rem] text-[2.25rem] font-bold "
            variants={textVariants}
            whileHover="hover"
          >
            For{" "}
            <span className="text-[#FF7714] dark:text-[#FF7714] xl:text-[4rem] md:text-[4rem] font-bold ">
              Programer
            </span>

          </motion.h2>
          <motion.p
            key={index}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            className="text-[#090909] text-[0.64rem] md:text-[1rem]  dark:text-[#ffff] py-[1.25rem] mb-[1.6rem] sm:max-w-[15rem] xl:max-w-[30rem] md:max-w-[20rem]  font-semibold"
          >
            {contents[index]}
          </motion.p>

          <MainButton title={"Create your CV"} navigateTo={"/templates"} />

        </motion.div>
        <motion.div
          variants={CvBlockVariants}
          animate="animate"
          whileHover="hover"
          className="xl:mr-[12rem] mt-[50px] md:mr-0  relative "
        >
          {activeTab === 0 && (
            <motion.div>
              {" "}
              {/* Choose Template*/}
              <motion.div
                variants={CvVariants}
                initial="initial"
                animate="animate"
                className="relative z-10 "
              >
                <img className=" md:w-[22.5rem]"  src={CVS[index]} />
              </motion.div>
              <motion.div
                variants={CvAroundVariants}
                initial="initial"
                animate="animate"
                className="hidden md:block absolute left-[-91px] top-[58px] z-0 "
              >
                <Around width="28rem"/>
              </motion.div>
            </motion.div>
          )}
          {activeTab === 1 && (
            <motion.div>
              {" "}
              {/* Edit*/}
              <motion.div
                initial={{ opacity: 0.5, x: 0 }}
                animate={{ opacity: 0.2, x: -20 }}
                transition={{ duration: 1 }}
                style={{ cursor: "pointer" }}
                key={isShowFront ? "image3" : "image4"}
              >
                {isShowFront ? (
                  <img
                  className="w-[18rem] h-[20rem] md:w-[28rem] md:h-[30rem]"
                    src={image3}
                  />
                ) : (
                  <img
                  className="w-[18rem] h-[2g0rem] md:w-[28rem] md:h-[30rem]"
                    src={image4}
                  />
                )}
              </motion.div>
              <motion.div
                initial="initial"
                animate="animate"
                className="absolute xl:left-[5rem] xl:top-[2rem] sm:left-[4rem] sm:top-[2rem] left-[1rem] top-[1rem] z-0"
                transition={{ delay: 4 }}
              >
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  key={isShowFront ? "image4" : "image3"}
                  onClick={handleImage}
                  style={{ cursor: "pointer" }}
                >
                  {!isShowFront ? (
                    <img
                      className="w-[18rem] h-[20rem] md:w-[28rem] md:h-[30rem]"
                      src={image3}
                    />
                  ) : (
                    <img
                      className="w-[18rem] h-[20rem] md:w-[28rem] md:h-[30rem]"
                      src={image4}
                    />
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
          {activeTab === 2 && (
            <motion.div>
              {" "}
              {/* Export*/}
              <motion.div
                variants={CvVariants}
                initial="initial"
                animate="animate"
                className="relative z-10 xl:right-[100px] sm:left-[50px] right-[-55px] "
              >
                <Image width={300} preview={true} src={image5} />

                <DownloadOutlined
                  className="xl:bottom-[17rem] xl:right-[-7rem] md:bottom-[13rem] md:right-[13rem] bottom-[12rem] right-[13rem]"
                  style={{
                    fontSize: "100px",
                    color: "#FF7714",
                    position: "relative",
                  }}
                />

              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Guides activeTab={activeTab} setActiveTab={setActiveTab} />
      </motion.div>
    </>
  );
};
export default Banner;
