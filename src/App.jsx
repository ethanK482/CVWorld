import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import { Guides } from "./components/guide";
import Frame35 from "./images/Frame35.svg";
import iphone2 from "./images/iphone2.svg";

function App() {
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

        <section className="h-[93vh] ">
          <Banner />
        </section>

        <section className="h-[100vh]">
          <div className="letterWrapper">
            
          <div className="Newletter">
            <h2>Fully Website Reponsive</h2>
            <p>CV World has diverse versions, easy to use on many different devices. Easily switch between multiple devices</p>

            
          </div>
          <div>
            <img className="iphone" src={Frame35} alt="" />
          </div>
          <div>
            <img className="iphone iphone2" src={iphone2}  alt="" />
          </div>
          </div>
         
        </section>
        <section className="h-[100vh]">Hello1</section>
        <section className="h-[100vh]">Hello1</section>
        <section className="h-[100vh]">Hello1</section>
      </div>
    </div>
  );
}
export default App;
