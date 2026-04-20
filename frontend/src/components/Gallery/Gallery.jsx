import { useState, useEffect } from "react";

import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";
import Image5 from "../../assets/image5.jpg";
import Image6 from "../../assets/image6.jpg";
import Image7 from "../../assets/image7.jpg";

const contents = [
  {
    id: 1,
    title: "Gaming Room",
    description:
      "Photorealistic interior render with full lighting simulation and custom props.",
    tags: ["Interior Render", "Lighting", "4K"],
    image: Image1,
  },
  {
    id: 2,
    title: "Ramen Bowl",
    description:
      "3D cartoon-style food render — stylized geometry with subsurface scattering.",
    tags: ["Stylised CGI", "Food Viz", "3D Modeling"],
    image: Image2,
  },
  {
    id: 3,
    title: "Astronaut Scene",
    description:
      "Hyper-detailed character render with space environment and dynamic lighting.",
    tags: ["Character", "Sci-Fi", "Environment"],
    image: Image3,
  },

  {
    id: 4,
    title: "Wine Bottle Splash",
    description:
      "Product shot with fluid simulation — 4K photorealistic bottle splash render.",
    tags: ["Character", "Sci-Fi", "Environment"],
    image: Image4,
  },

  {
    id: 5,
    title: "Classroom Environment",
    description:
      "Architectural visualization — indoor environment shot in cinematic evening light.",
    tags: ["Character", "Sci-Fi", "Environment"],
    image: Image5,
  },

  {
    id: 6,
    title: "Earbuds Product Viz",
    description:
      "Premium product visualization for lifestyle marketing — studio-lit 3D render.",
    tags: ["Character", "Sci-Fi", "Environment"],
    image: Image6,
  },
];

import "./gallery.css";

function Gallery() {
  const [page, setPage] = useState(1);
  const [flipping, setIsFilipping] = useState(false);

  function nPage() {
    const len = contents.length;
    console.log(len);

    setIsFilipping(true);

    setTimeout(() => {
      if (page >= len) {
        setPage(1);
      } else {
        setPage((curPage) => curPage - 1);
      }
      setIsFilipping(false);
    }, 400); // halfway through the 800ms animation
  }

  function pPage() {
    const len = contents.length;
    console.log(len);

    setIsFilipping(true);

    setTimeout(() => {
      if (page >= len) {
        setPage(1);
      } else {
        setPage((curPage) => curPage + 1);
      }
      setIsFilipping(false);
    }, 400);
  }

  const content = contents.map((content) => {
    return (
      <>
        <div
          className={content.id === page ? "gallery-content" : "none"}
          key={content.title}
        >
          <div className="gallery-txt-content">
            <div className="gallery-heading-box">
              <h3 className="gallery-heading">{content.title}</h3>
            </div>
            <div className="tag-box">
              {content.tags.map((tag) => {
                return <p>{tag}</p>;
              })}
            </div>
            <div className="gallery-description-box">
              <p className="description">{content.description}</p>
            </div>
          </div>
          <div className="gallery-divider"></div>
          <div className={`gallery-img-box ${flipping ? "flipping" : ""}`}>
            <img
              src={content.image}
              alt={content.title}
              className="gallery-img"
            />
          </div>

          <div className="next-page" onClick={nPage}>
            &rarr;
          </div>
          <div className="prev-page" onClick={pPage}>
            &larr;
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div id="gallery">{content}</div>
    </>
  );
}

export default Gallery;
