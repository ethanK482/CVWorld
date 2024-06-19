import Frame35 from "../../images/Frame35.svg";
import iphone2 from "../../images/iphone2.svg";
const Introduction1 = () => {
  return (
    <section className="">
      <div className="letterWrapper">
        <div className="Newletter">
          <h2>Fully Website Reponsive</h2>
          <p>
            CV World has diverse versions, easy to use on many different
            devices. Easily switch between multiple devices
          </p>
        </div>
        <div>
          <img className="iphone" src={Frame35} alt="" />
        </div>
        <div>
          <img className="iphone iphone2" src={iphone2} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Introduction1;
