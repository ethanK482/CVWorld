import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
function App() {
  let savedMode = localStorage.getItem("displayMode");

  const [darkMode, setDarkMode] = useState(savedMode === "dark");
  const onSetDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("displayMode", darkMode ? "light" : "dark");
  };
  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <div className="bg-gradient-to-br  dark:from-[#040b0b] dark:to-[#162729] from-[#F6FEFF] to-[#75cfdc] ">
        <section className="bg-gradient-to-br  dark:from-[#040b0b] dark:to-[#162729] from-[#F6FEFF] to-[#75cfdc] h-[7vh] bg-[#EFF9FA] dark:bg-[#383838]  ">
          <Header darkMode={darkMode} onSetDarkMode={onSetDarkMode} />
        </section>

        <section className="h-[93vh] ">
          <Banner/>
        </section>
        <section className="h-[100vh]">Hello1</section>
        <section className="h-[100vh]">Hello1</section>
        <section className="h-[100vh]">Hello1</section>
        <section className="h-[100vh]">Hello1</section>
      </div>
    </div>
  );
}
export default App;
