import Title from "../Title/index.js";
import "./style.css";

import Contactcard from "../Contactcard/index.js";
import PrimaryButton from "../primaryButton/index.js";
import { AiFillTwitterCircle} from 'react-icons/ai';
import { AiOutlineWifi} from 'react-icons/ai';
import { IoLogoPinterest} from 'react-icons/io';
import { BsFlower1} from 'react-icons/bs';
import { IoLogoInstagram} from 'react-icons/io';

function Contact() {
  return (
    <section className="contactsection">
     <div className="contactcontactme">
      <Title className="title">Hire Me</Title>
      <h1>
        I Am Available For Your Next Awesome Project <span>Then Hire Me!</span>
      </h1>
      <div className="contactcarddivwrapper">
      <div className="contactcontactcard">
      <Contactcard 
        src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/01.png"
        alt="logo"
        title=" us a Call"
        subtitle="001-888-123-4567"
      />
      </div>
      <div className="contactcontactcard">
      <Contactcard 
        src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/02.png"
        alt="logo"
        title="Send us a Message"
        subtitle="maxinoadmin@mail.com"
      />
      </div>
      <div className="contactcontactcard">
      <Contactcard 
        src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/03.png"
        alt="logo"
        title="Visit our Location"
        subtitle="02/07 Suitland Street 120"
      />
      </div>
      </div>
      <form className="form">
    
        <input type="text" name="name" placeholder="Your Message" />
        <br />
        <br />
        <input type="text" name="email" placeholder="Your email" />
        <br />
        <br />
        <input type="text" name="text" placeholder="Your subject" />
        <br />
        <br />
    
        <input type="text" name="text" placeholder="Message" className="input4" />
      </form>
      <div className="contactprimarybutton">
      <PrimaryButton  className="primaryButton">Submit Message
      <span><img src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/btn-2.png" alt="logo"/></span>
      </PrimaryButton>
      </div>
     
      </div>
      <div className="footer">
        <div>
          <img
            src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/logo/footer-logo.png"
            alt="logo"
          />
          <p>
	    			© 2019. Maxino Designed By <span>LabArtisan</span> </p>
            <div className="contacticon">
           <span> <AiFillTwitterCircle/></span>
           <span> <AiOutlineWifi/></span>
           <span> <IoLogoPinterest/></span>
            <span><BsFlower1/></span>
           <span> <IoLogoInstagram/></span>
            </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
