import { Image } from "antd";
import BannerStyle from "./Banner.style";
import { motion } from "framer-motion";
import CV from "../../images/CV.svg";
import Around from "../../images/Around.jsx";
import { useEffect, useState } from "react";
const contents = [
  "Write your future into the world",
  "hello tao ten la huy",
  "Write your future into the world2",
];
const Banner = () => {
  const [index, setIndex] = useState(0);
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
  return (
    <BannerStyle>
      <div className="banner flex justify-between">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-[#090909] dark:text-[#ffff]"
            variants={textVariants}
            whileHover="hover"
          >
            CV Web Design
          </motion.h2>
          <motion.h2
            className="dark:text-[#ffff]"
            variants={textVariants}
            whileHover="hover"
          >
            For <span className="text-[#FF7714]">Programer</span>
          </motion.h2>
          <motion.p
            key={index}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            className="text-[#090909] dark:text-[#ffff] py-[20px] mb-[25px]  font-thin"
          >
            {contents[index]}
          </motion.p>
          <motion.button
            variants={buttonHover}
            className="w-[248px] h-[55px] font-bold shadow-2xl bg-[#FF7714] ml-[40px] text-white "
            initial="initial"
            whileHover="hover"
            animate="animate"
          >
            Create your CV
          </motion.button>
        </motion.div>
        <motion.div variants={CvBlockVariants}  animate="animate" whileHover="hover" className="mr-[200px] mt-[50px] relative ">
          <motion.div
            variants={CvVariants}
            initial="initial"
            animate="animate"
            className="relative z-10"
          >
            <Image preview={false} src={CV} />
          </motion.div>
          <motion.div
            variants={CvAroundVariants}
            initial="initial"
            animate="animate"
            className="absolute left-[-91px] top-[58px] z-0"
          >
            <Around />
          </motion.div>
        </motion.div>
      </div>
    </BannerStyle>
  );
};
export default Banner;
