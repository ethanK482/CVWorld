import CVList from "../../components/cvList";
import Slider from "../../components/slider";

const ChooseCV = () => {
  return (
    <section className="m-[20px] min-h-[100vh] items-center justify-center">
      <Slider />
      <p className="font-bold text-4xl text-center mt-5 text-black dark:text-white">Discover your template</p>
      <CVList/>
    </section>
  );
};
export default ChooseCV;
