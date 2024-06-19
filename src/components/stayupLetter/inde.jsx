import { Button, Input, Space } from "antd";

export const Footer = () => {
  return (
    <div className=" mt-[40px] h[400px]">
      <div className="wrapper p-[40px] bg-gradient-to-br  dark:from-[#040b0b] dark:to-[#162729] from-[#F6FEFF] to-[#75cfdc] text-[#000] dark:text-[#FF7714]">
        <div className="des">
          <h4 className="text-center text-[20px] font-[100]">STAY UP-TO-DAY</h4>
          <h2 className="Title text-center text-[40px] font-[600] my-[20px]">Get Out Product Delivered To You</h2>
          <p className="text-center text-[15px]">
            Enter Your Email To Get Out <strong className=" text-[#FF7714] dark:text-white ">CV World</strong> Tutorial And Plugin Updates
          </p>
        </div>
        <div className="sendEmail flex justify-center my-[35px]">
          <Space.Compact style={{ width: "80%" }}>
            <Input placeholder="Type Your Email Here" />
            <Button type="primary" className="bg-[#000] dark:bg-[#FF7714]">Submit</Button>
          </Space.Compact>
        </div>
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center">
        <p className="text-sm text-center dark:text-white text-black ">
          &copy; {new Date().getFullYear()} MukBang Team. All rights reserved.
        </p>
      </div>
      </div>
    </div>
  );
};
