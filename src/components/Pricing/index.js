import "./style.css";

import Typography from "../Typography/index.js";
import PricingWrapper from "../PricingWrapper/index.js";
import Title from "../Title/index.js";


function Pricing() {
  return (
    <section className="Pricingsection">
      <Title className="title">Pricing Plan</Title>
      <Typography type="H1">
        No Hidden Charge,Choose Your <span> Best Pricing Plan </span>
      </Typography>
      <div className="pricingwrappercontainer">
      <PricingWrapper heading="Silver Plan" dollar="$20" />
       <PricingWrapper heading="Gold Plan" dollar="$40" className='pricingdiv2'/>
       
        <PricingWrapper heading="Platinum Plan" dollar="$60" className='pricingdiv3'/>
        
        </div>
    </section>
  );
}
export default Pricing;
