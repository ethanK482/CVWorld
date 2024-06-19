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
      <div className="bg-gradient-to-br  dark:from-[#162729] dark:to-[#040b0b]  from-[#75cfdc] to-[#F6FEFF] ">
        <section className="bg-gradient-to-br  dark:from-[#040b0b] dark:to-[#162729] from-[#F6FEFF] to-[#75cfdc] h-[7vh] bg-[#EFF9FA] dark:bg-[#383838]  ">
          <Header darkMode={darkMode} onSetDarkMode={onSetDarkMode} />
        </section>
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
