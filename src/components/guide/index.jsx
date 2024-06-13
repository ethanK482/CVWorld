// Guides.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Line3 from "../../images/Line3.svg"
import { Image } from "antd";

const tabs = ["Choose Your Template", "Edit", "Export"]; // Khai báo mảng tabs

export const Guides = ({activeTab, setActiveTab}) => {
  const handleClick = (index) => {
    setActiveTab(index);
  };
const mode = localStorage.getItem("displayMode");
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
            animate={{ color: mode === "dark" ? activeTab === index ? "#f4d644" : "#fff" : activeTab === index ? "#142426" : "#FF7714"}}
            transition={{ duration: 0.15, delay: 0.1 }} // Thêm độ trễ vào transition của màu chữ
            className="text-[#fff] dark:text-[#000]"

          >
            {tab}
            {(index === 0 || index === 1) && ( // Điều kiện hiển thị ảnh Line3
              <Image 
              preview={false} 
              src={Line3} 
              style={{
                marginLeft:  '30px', // Thêm khoảng cách bên trái cho tab đầu tiên
                marginRight: '30px', // Thêm khoảng cách bên phải cho tab cuối cùng
              
              }}/>
              
            )}
          
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};
