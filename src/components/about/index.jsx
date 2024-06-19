import { motion } from "framer-motion";
import Frame35 from "../../images/Frame35.svg";

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
export const About = () => {
  return (
    <div className=" about-wrapper xl:h-[25rem] sm:h-[15rem] overflow-hidden ">
      <div className="about-content xl:m-[3rem] sm:m-[1.5rem] sm:h-[13.5rem] xl:h-[22rem] flex xl:gap-[25rem] md:gap-[4rem] dark:bg-white border-[5px] border-black rounded-[3rem]">
        <div className="des p-[4rem] sm:p-[2.5rem]">
          <motion.h2
            className="xl:mt-[2rem] sm:mt-[1rem] sm:text-[1.5rem] xl:text-[2.4rem] font-[600] "
            whileHover="hover"
            variants={textVariants}
          >
            Subscribe to out <strong className="text-[#FF7714]">CV World</strong>
          </motion.h2>
          <motion.span
            className="block xl:my-[1.5rem]"
            whileHover="hover"
            variants={textVariants}
          >
            Subscribe to out product and stay updated
          </motion.span>
          <div className="btn xl:w-[8rem] sm:w-[6rem] sm:my-[1rem] xl:h-[3rem] bg-black flex align-center justify-center hover:bg-[#FF7714] transition duration-150 ">
            <button className="text-white font-sm:text-[100rem] sm:  ">Subscribe</button>
          </div>
        </div>
        <motion.div whileHover="hover" variants={textVariants}>
          <img src={Frame35} alt="" className="xl:h-[30rem] sm:h-[25rem]" />
        </motion.div>
      </div>
    </div>
  );
};
