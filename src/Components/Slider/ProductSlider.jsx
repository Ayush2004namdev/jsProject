import React from 'react'
import Slider from 'react-slick';
import ProductCard from '../productCard/productCard';
import './ProductSlider.css';

const ProductSlider = (props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: true,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              // infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              // infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              // infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              // infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: false,
            },
          },
        ],
      };


  return (
    <>
         <div className="slider__conatiner">
        <i className="fas fa-chevron-left slider-backward-arrow"></i>
        <i className="fas fa-chevron-right slider-forward-arrow"></i>

        <Slider {...settings}>
          {props.data.map((item, index) => (
            
            <ProductCard
              key={index}
              name={item.name}
              price={item.price}
              rating={item.rating}
              url={item.image[0]}
              id={item.id}
            />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default ProductSlider