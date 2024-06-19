import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { useState } from "react";
const MainLayout = () => {
  let savedMode = localStorage.getItem("displayMode");

  const [darkMode, setDarkMode] = useState(savedMode === "dark");
  const onSetDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("displayMode", darkMode ? "light" : "dark");
  };
  return (
    <div className={`${darkMode ? "dark" : ""} `}>

      <div className="bg-gradient-to-br  dark:from-[#162729] dark:to-[#040b0b] #F6FEFF from-[#75cfdc] to-[#F6FEFF] mt-[58px] ">
        <section className=" fixed left-0 right-0 top-0 z-50 bg-gradient-to-br  dark:from-[#040b0b] dark:to-[#162729] from-[#F6FEFF] to-[#75cfdc] h-[7vh] bg-[#EFF9FA] dark:bg-[#383838]  ">

          <Header darkMode={darkMode} onSetDarkMode={onSetDarkMode} />
        </section>
        <Outlet context={[darkMode]} />
      </div>
    </div>
  );
};
export default MainLayout;
