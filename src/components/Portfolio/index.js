import "./style.css";
import Title from "../Title/index.js";
import Typography from "../Typography/index.js";
import PrimaryButton from "../primaryButton/index.js";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import { useState } from "react";

function Portfolio() {
  const [gallary, setgallary] = useState("all");

  const portfolioarr = [
    {
      src:
        "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/01.jpg",
      type: "image"
    },
    {
      src:
        "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/02.jpg",
      type: "video"
    },
    {
      src:
        "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/03.jpg",
      type: "video"
    },
    {
      src:
        "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/04.jpg",
      type: "image"
    },
    {
      src:
        "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/06.jpg",
      alt: "img",
      type: "image"
    },
    {
      src:
        "https://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/03.jpg",
      type: "video"
    }
  ];

  const allHandler = () => {
    setgallary("all");
  };

  const imageHandler = () => {
    setgallary("image");
  };

  const videoHandler = () => {
    setgallary("video");
  };

  let filterarr;

  gallary === "all"
    ? (filterarr = portfolioarr)
    : (filterarr = portfolioarr.filter((item) => item.type === gallary));

  return (
    <section className="portfoliosection">
      <Title className="title">My Portfolio</Title>
      <Typography type="H1">
        We Have Done Lot's of <span>My Best Works</span> Lets Check Some of Them
      </Typography>

      <div className="centersection">
        <div className="portfoliobutton">
          <div>
            <PrimaryButton onClick={allHandler} className= { gallary !=='all'?'portbutton':''}>
              <AiOutlineStar />
              All <span>Gallery</span>
            </PrimaryButton>
          </div>
          <div>
            <PrimaryButton onClick={imageHandler} className={ gallary !=='image'?'portbutton':''}>
              <BsFillImageFill />
              Images <span>Gallery</span>
            </PrimaryButton>
          </div>
          <div>
            <PrimaryButton onClick={videoHandler} className={ gallary !=='video'?'portbutton':''}>
              <AiFillPlayCircle />
              video <span>Gallery</span>
            </PrimaryButton>
          </div>
        </div>
        <div className="portfoliodivimg1">
          {filterarr.map((item) =>
            item.type === "video" ? (
              <div >
              <video width="300" controls>
                <source src={item.src} type="video/mp4" />
              </video>
              </div>
            ) : (
              <div><img src={item.src} alt="img" /></div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
