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
    <div className=" about-wrapper mt-[100px] h-[400px] overflow-hidden ">
      <div className="about-content m-[50px] h-[350px] flex gap-[400px] dark:bg-white border-[5px] border-black rounded-[35px]">
        <div className="des p-[80px]">
          <motion.h2
            className="mt-[30px] text-[35px] font-[600] "
            whileHover="hover"
            variants={textVariants}
          >
            Subscribe to out <strong className="text-[#FF7714]">CV World</strong>
          </motion.h2>
          <motion.span
            className="block my-[20px]"
            whileHover="hover"
            variants={textVariants}
          >
            Subscribe to out product and stay updated
          </motion.span>
          <div className="btn w-[100px] h-[50px] bg-black flex align-center justify-center hover:bg-[#FF7714] transition duration-150 ">
            <button className="text-white font-semibold  ">Subscribe</button>
          </div>
        </div>
        <motion.div whileHover="hover" variants={textVariants}>
          <img src={Frame35} alt="" className="h-[500px]" />
        </motion.div>
      </div>
    </div>
  );
};
