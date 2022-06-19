import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "../../../Pages/HomePage";
import "./slideShow.scss";

const images = [
  "https://newassets.apollo247.com/images/banners/Super_30.jpg",
  "https://newassets.apollo247.com/images/banners/GNC_13June.jpg",
  "https://newassets.apollo247.com/images/banners/FIRSTVC_12May.jpg",
  "https://newassets.apollo247.com/images/banners/baby_Products_01.jpg",
  "https://newassets.apollo247.com/images/banners/post-covid.jpg",
  "https://newassets.apollo247.com/images/banners/PremiumHealth_circle.jpg",
];
const delay = 2500;

const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="mainSlide">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <Link className="slideLink" to={<Home />}>
                <img className="slideImg" src={image} alt="" />
              </Link>
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
