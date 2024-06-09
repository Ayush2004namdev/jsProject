import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSlider = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <>
      <Slider {...settings}>
          <img src="/1.jpg" alt="" />
          <img src="/2.jpg" alt="" />
          <img src="/3.jpg" alt="" />
      </Slider>
    </>
  )
}

export default HeroSlider