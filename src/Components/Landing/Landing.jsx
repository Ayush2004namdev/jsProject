import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Landing.css';
import HeroSlider from '../Slider/HeroSlider';
import data from '../../product';
import ProductSlider from '../Slider/ProductSlider';
import Footer from '../Footer/Footer';

const Landing = () => {

  return(
    <>
      <HeroSlider/>
      <div className="landing-page-categories">
        <div className="landing-page-category" id="mobile">
          <h1 className="landing-page-heading">Mobile</h1>
          <ProductSlider data={data.filter((item) => item.catogeries === "phone")} />
        </div>
        <div className="landing-page-category" id="elec">
          <h1 className="landing-page-heading">Electronics</h1>
          <ProductSlider
            data={data.filter((item) => item.catogeries === "Electronics")}
          />
        </div>
        <div className="landing-page-category" id="sport">
          <h1 className="landing-page-heading">Sports</h1>
          <ProductSlider
            data={data.filter((item) => item.catogeries === "Sports")}
          />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Landing