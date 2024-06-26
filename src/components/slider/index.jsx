import { Carousel, Image } from "antd";
import slider1 from "../../images/slide1.png"
import slider2 from "../../images/slide2.png"
import slider3 from "../../images/slide3.png"
const Slider = () => {
  return (
    <Carousel autoplay={true} autoplaySpeed={3000}>
      <Image height={"100%"} width={"100%"} preview={false} src={slider1}/>
      <Image height={"100%"} width={"100%"} preview={false} src={slider2}/>
      <Image height={"100%"} width={"100%"} preview={false} src={slider3}/>
    </Carousel>
  );
};
export default Slider;
