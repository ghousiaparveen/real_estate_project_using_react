// src/components/Slideshow.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slideshow.css';

const Slideshow = ({ slides, customClass }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        fade: true,
        cssEase: "linear",
    };

    return (
        <div className={`slideshow ${customClass}`}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.image} alt={`slide-${index}`} className="slide-image" />
                        <div className="slide-text-container">
                            <div className="slide-heading">{slide.heading}</div>
                            <div className="slide-subheading">{slide.subheading}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slideshow;
