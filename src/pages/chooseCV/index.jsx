import CVList from "../../components/cvList";
import Slider from "../../components/slider";
import { Footer } from "../../components/stayupLetter/inde";

const ChooseCV = () => {
  return (
    <section className="lg:mt-[20px] md:mt-[118px] min-[380px]:mt-[68px]  min-h-[100vh] items-center justify-center sm:mt-[61px]">
      <Slider />
      <p className="font-bold sm:text-2xl md:text-3xl lg:text-4xl text-center mt-5 text-black dark:text-white">Discover your template</p>
      <CVList/>
      <Footer />
    </section>
  );
};
export default ChooseCV;
