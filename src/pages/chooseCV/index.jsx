import CVList from "../../components/cvList";
import Slider from "../../components/slider";
import { Footer } from "../../components/stayupLetter/inde";

const ChooseCV = () => {
  return (
    <section className="mt-[7vh]  min-h-[100vh] items-center justify-center ">
      <Slider />
      <p className="font-bold sm:text-2xl md:text-3xl lg:text-4xl text-center mt-5 text-black dark:text-white">Discover your template</p>
      <CVList/>
      <Footer />
    </section>
  );
};
export default ChooseCV;
