import { Link } from "react-router-dom";

import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";
import Image5 from "../../assets/image5.jpg";
import Image6 from "../../assets/image6.jpg";
import Image7 from "../../assets/image7.jpg";

import "./landing.css";
function Landing() {
  return (
    <>
      <div className="landing">
        <div className="first-img-box">
          <div className="img-box">
            <img src={Image1} alt="" srcset="" className="img" />
          </div>
        </div>

        <div className="first-2-box">
          <div className="img-box">
            <img src={Image2} alt="" srcset="" className="img" />
          </div>
        </div>

        <div className="first-3-box">
          <div className="img-box">
            <img src={Image3} alt="" srcset="" className="img" />
          </div>
        </div>

        <div className="first-4-box">
          <div className="img-box">
            <img src={Image4} alt="" srcset="" className="img" />
          </div>
        </div>

        <div className="first-5-box">
          <div className="img-box">
            <img src={Image5} alt="" srcset="" className="img" />
          </div>
        </div>

        <div className="first-6-box">
          <div className="img-box">
            <img src={Image6} alt="" srcset="" className="img" />
          </div>
        </div>

        <div className="first-7-box">
          <div className="img-box">
            <img src={Image7} alt="" srcset="" className="img" />
          </div>
        </div>

        <div className="branding">
          <div className="brand-name">
            <h2 className="brand-heading">Strinx Studio</h2>
          </div>

          <div className="brand-btn">
            <Link to="/home" className="brand-link">
              Lets Hop In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
