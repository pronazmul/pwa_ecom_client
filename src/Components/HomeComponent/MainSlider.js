import React from 'react'
import Slider from "react-slick"

import slide1 from '../../Assets/Images/slide1.png'
import slide2 from '../../Assets/Images/slide2.png'
import slide3 from '../../Assets/Images/slide3.png'

const MainSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <img className='w-100 rounded' height='380' src={slide1} alt=''/>
            </div>
            <div>
                <img className='w-100 rounded' height='380' src={slide2} alt=''/>
            </div>
            <div>
                <img className='w-100 rounded' height='380' src={slide3} alt=''/>
            </div>
        </Slider>
    );
};

export default MainSlider;