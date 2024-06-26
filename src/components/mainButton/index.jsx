/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
const MainButton = ({ navigateTo, title, action, disabled=false }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigateTo && navigate(navigateTo);
    action &&  action();
  };
  return (
    <motion.button
      disabled={disabled}
      onClick={handleOnClick}
      variants={buttonHover}
      className="md:w-[248px] md:h-[55px] w-[200px] h-[45px]   font-bold shadow-2xl bg-[#FF7714] text-white  "
      initial="initial"
      whileHover="hover"
      animate="animate"
    >
      {title}
    </motion.button>
  );
};
export default MainButton;
