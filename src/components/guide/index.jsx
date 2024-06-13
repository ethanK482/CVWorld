/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Line3 from "../../images/Line3.svg";
import { Image } from "antd";

const tabs = ["Choose Template", "Edit Template", "Export CV"]; // Khai báo mảng tabs

export const Guides = ({ activeTab, setActiveTab }) => {
  const handleClick = (index) => {
    setActiveTab(index);
  };
  const mode = localStorage.getItem("displayMode");

  //function
  const getColorByMode = (index) => {
    return mode === "dark"
      ? activeTab === index
        ? "#f4d644"
        : "#fff"
      : activeTab === index
      ? "#142426"
      : "#FF7714";
  };
  const step3Condition = (index) => index === 0 || index === 1;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        position: "relative",
      }}
    >
      {tabs.map((tab, index) => (
        <motion.div
          key={tab}
          onClick={() => handleClick(index)}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            cursor: "pointer",
            borderRadius: "5px",
            position: "relative",
            zIndex: 1,
            fontWeight: activeTab === index ? "bold" : "normal", // Đậm chữ nếu là tab đang hoạt động
          }}
          transition={{ type: "spring", stiffness: 300, delay: 0.1 }} 
        >
          <motion.span
            animate={{
              color: getColorByMode(index),
            }}
            transition={{ duration: 0.15, delay: 0.1 }} // Thêm độ trễ vào transition của màu chữ
            className="text-[#fff] dark:text-[#000]"
          >
            {tab}
            {step3Condition(index) && (
              <Image preview={false} src={Line3} className="mx-[30px]" />
            )}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};
