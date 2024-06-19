import { Carousel } from "antd";
import hinh1 from "../../images/hinh1.jpg";
import hinh2 from "../../images/hinh2.jpg";
import hinh3 from "../../images/hinh3.jpg";
import comma3 from "../../images/comma3.png";

export const Introduction2 = () => {
  return (
    <div className="introduce2-wrapper  mt-[2rem]">
      <Carousel autoplay speed={3000} dots={false}>
        <div className="carousel-wrapper p-8 bg-custom-gradient-deep h-80 ">
          <div className="carouselContent flex items-center xl:gap-[7rem] sm:gap-[2rem] gap-[2rem]">
            <div className="expectInfo relative">
              <img
                src={hinh1}
                alt=""
                className="w-[18rem] h-[16rem] md:w-[16rem] md:h-[16rem] object-cover rounded-full"
              />
            </div>
            <div className="feedback text-white relative">
              <div className="des">
                <span className="text-white xl:text-[1.5rem] sm:text-[0.75rem] block">
                  HUYNH VAN MANH
                </span>
                <span className="xl:text-[1rem] sm:text-[0.5rem] block text-orange-400 ">
                  EpPeTe University
                </span>
              </div>

              <p className="xl:w-[60rem] relative xl:top-[3rem] xl:text-[1.5rem] sm:text-[1rem] ">
                <strong className="text-amber-600">CV World</strong> writing
                page is extremely user-friendly and intuitive. It guides you
                step-by-step through the entire process, making it
                <strong className="text-amber-600"> easy for anyone</strong> to
                create a professional-looking CV in no time.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-wrapper  p-8 bg-custom-gradient-ocean h-80">
          <div className="carouselContent flex items-center xl:gap-[7rem] sm:gap-[2rem] gap-[2rem]">
            <div className="expectInfo relative">
              <img
                src={hinh2}
                alt=""
                className="w-[18rem] h-[16rem] md:w-[16rem] md:h-[16rem] object-cover rounded-full"
              />
            </div>
            <div className="feedback text-white relative">
              <div className="des">
                <span className="text-green-200 xl:text-[1.5rem] sm:text-[0.5rem] block">
                  HUYNH KIM HUY
                </span>
                <span className=" xl:text-[1rem] sm:text[0.5rem] block ">
                  Co-Founder "Dinh"
                </span>
              </div>
              <p className="xl:w-[60rem] relative xl:top-[3rem] xl:text-[1.5rem] sm:text-[1rem] text-green-200">
                The <strong className="text-amber-600">CV World</strong>{" "}
                platform provides a seamless, step-by-step experience, ensuring
                anyone can craft a polished CV effortlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-wrapper p-8 bg-custom-gradient-blue-pink h-80 ">
          <div className="carouselContent flex items-center gap-[7rem] sm:gap-[2rem] gap-[2rem]">
            <div className="expectInfo relative">
              <img
                src={hinh3}
                alt=""
                className="w-[18rem] h-[16rem] md:w-[16rem] md:h-[16rem] object-cover rounded-full"
              />
            </div>
            <div className="feedback text-white relative">
              <div className="des">
                <span className="text-pink-200 xl:text-[1.5rem] sm:text-[0.5rem] block">
                  VO HOANG KIET
                </span>
                <span className="xl:text-[1rem] sm:text[0.5rem] block text-orange-200">
                  Co-Founder "Dinh"
                </span>
              </div>
              <p className="xl:w-[60rem] relative xl:top-[3rem] xl:text-[1.5rem] sm:text-[1rem] text-pink-100 ">
                With its intuitive interface,
                <strong className="text-amber-600">CV World</strong> simplifies
                the CV creation process, making professional-quality resumes
                accessible to everyone quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
