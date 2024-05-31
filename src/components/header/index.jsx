/* eslint-disable react/prop-types */
import { FaMoon, FaSun } from "react-icons/fa";
const Header = ({ onSetDarkMode, darkMode }) => {
  return (
    <div className="flex h-[99%] justify-between items-center  shadow-custom-light dark:shadow-custom-dark">
      {" "}
      <div>
        <h1 className="dark:text-[#FF7714] ml-[20px] text-2xl font-bold ">
          CV World
        </h1>
      </div>
      <div
        className="flex items-center justify-center  p-2 w-[40px] h-[35px]  rounded-sm"
        onClick={onSetDarkMode}
      >
        {darkMode ? <FaMoon size={70} color="#0BA5E9" className="hover:opacity-[0.5]" /> : <FaSun  size={70} color="#0BA5E9" className="hover:opacity-[0.5]" />}{" "}
      </div>
    </div>
  );
};
export default Header;
