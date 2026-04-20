import { useEffect, useState } from "react";

import Navigation from "../Navigation/Navigation";
import Gallery from "../Gallery/Gallery";
import Image from "../../assets/placeholder.png";

import "./home.css";
function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // 2. find the element with id="gallery"
      const gallery = document.getElementById("gallery");
      // 3. scroll to it smoothly
      gallery.scrollIntoView({ behavior: "smooth" });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navigation />
      <div className="hero">
        <div className="hero-txt-section">
          <div className="hero-heading-section">
            <h2 className="hero-heading">Strinx</h2>
          </div>

          <div className="hero-logo-section">
            <img src={Image} alt="3D Logo" className="three-d" />
          </div>

          <div className="hero-heading-section">
            <h2 className="hero-heading">Studio</h2>
          </div>
        </div>

        <div className="hero-paragraph-content">
          <p className="hero-para">
            {" "}
            Where imagination takes shape in three dimensions.
          </p>
        </div>
      </div>

      <Gallery />
    </>
  );
}

export default Home;
