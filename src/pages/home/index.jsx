import { About } from "../../components/about";
import Banner from "../../components/banner";
import Introduction1 from "../../components/introduction1";
import { Introduction2 } from "../../components/introduction2";
import { Footer } from "../../components/stayupLetter/inde";

const HomePage = () => {
  return (
    <section className=" ">
      <Banner />
      <Introduction1/>
      <Introduction2/>
      <About/>
      <Footer/>
    </section>
  );
};
export default HomePage;
