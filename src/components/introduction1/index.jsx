import Frame35 from "../../images/Frame35.svg";
import iphone2 from "../../images/iphone2.svg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Introduction1 = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Phần tử xuất hiện khi ít nhất 10% của nó nằm trong viewport
  });
  return (
    <div className="">
      <div className="letterWrapper bg-gradient-to-br  dark:from-[#162729] dark:to-[#040b0b]  from-[#75cfdc] to-[#F6FEFF]">
        <div className="Newletter min-h-80  ">
          <h2 className="p-5 font-bold xl:text-5xl md:text-2xl md:ml-[3rem] md:mt-3 xl:ml-6 xl:mt-6 text-white absolute top-[6rem]">Website Responsive</h2>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <img className=" xl:h-[31.25rem] absolute xl:top-[-10.5rem] xl:right-[34.55rem] sm:h-[17rem] sm:top-[1.5rem] sm:right-[16rem]" src={Frame35} alt="" />
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 0 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 100, y:0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <img className=" xl:h-[31.25rem] absolute xl:top-[-3.5rem] xl:right-[9.5rem] -rotate-90 sm:h-[17rem] sm:top-[5.5rem] sm:right-[4rem] " src={iphone2} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>

  );
};
export default Introduction1;
