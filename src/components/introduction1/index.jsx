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
          <h2 className="p-5">Website Responsive</h2>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <img className="iphone" src={Frame35} alt="" />
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 0 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 100, y:0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <img className="iphone iphone2" src={iphone2} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Introduction1;
