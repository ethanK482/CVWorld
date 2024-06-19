/* eslint-disable react/prop-types */
import { FaMoon, FaSun } from "react-icons/fa";
import LOGO from "../../images/LOGO.svg"
import {  Image } from "antd";
import { useNavigate } from "react-router-dom";
const Header = ({ onSetDarkMode, darkMode }) => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/");
  }
  return (
    <div onClick={handleNavigate} className="flex h-[99%] justify-between items-center  shadow-custom-light dark:shadow-custom-dark">
          <img className="ml-3 w-[5rem] md:w-[6.25rem]"  src={LOGO}/>

      <div
        className="flex items-center justify-center  p-2 w-[40px] h-[35px]  rounded-sm"
        onClick={onSetDarkMode} 
      >
        {darkMode ? <FaMoon size={70} color="#F9CA92" className="hover:opacity-[0.5]" /> : <FaSun  size={70} color="#FF7714" className="hover:opacity-[0.5]" />}{" "}
      </div>
    </div>
  );
};
export default Header;
