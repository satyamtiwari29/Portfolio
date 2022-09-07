import Title from "../Title/index.js";
import Typography from "../Typography/index.js";
import "./style.css";
import ServiceWrapper from "../ServiceWrapper/index.js";

function Service() {
  return (
    <section className="servicesection">
      <Title className="title">My Services</Title>
      <h1>
        We Have Done Lot's of <span>My Best Services</span> Lets Check Some of
        Them
      </h1>
      <div className="servicewrapperdivdiv">
<div className="servicewrapperdiv1">
      <ServiceWrapper
      className="servicewrapper1 servicewrapper"
        heading="PSD Template Design"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/01.png"
        alt="logo"
      />

       <ServiceWrapper
      className="servicewrapper2 servicewrapper"
        heading="Mobile Apps Design"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/02.png"
        alt="logo"
      />
      </div>
      <div className="servicewrapperdiv2">
       <ServiceWrapper
      className="servicewrapper3 servicewrapper"
        heading="SEO Optimization"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/03.png"
        alt="logo"
      />
       <ServiceWrapper
      className="servicewrapper4 servicewrapper"
        heading="Web Development"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/service/04.png"
        alt="logo"
      />
      </div>
      </div>
    </section>
  );
}
export default Service;
