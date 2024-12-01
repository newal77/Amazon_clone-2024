import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import classes from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Carouseleff() {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItem, i) => {
          return <img src={imageItem} key={i} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default Carouseleff;
