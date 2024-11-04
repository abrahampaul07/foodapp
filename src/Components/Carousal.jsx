// Carousel.js
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../assets/carousel.jpg';
import image1 from '../assets/carousel2.jpg';       

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true, // Enable fade effect
        cssEase: 'linear', // Use linear transition for fading
    };

    const slides = [
        {
            image: image,
            title: 'Best Corn Dog in Town',
            description: 'Made from locally sourced & fresh ingredients',
        },
        {
            image: image1,
            title: 'Fresh, Fast, & Delicious',
            description: 'Made from locally sourced & fresh ingredients',
        },
    ];

    return (
        <div className="w-full overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        <img src={slide.image} alt={slide.title} className="w-full h-[500px] object-cover" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                            <h2 className="md:text-6xl text-2xl font-bold permanent-marker-regular">{slide.title}</h2>
                            <p className="mt-2 md:text-xl text-sm text-center inter-uniquifier">{slide.description}</p>
                            <div className="mt-4 flex space-x-4 permanent-marker-regular">
                                <Link to='/contact' className="border transition duration-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-black text-white md:text-lg text-sm font-bold py-3 px-9 rounded-full">
                                    Contact Us
                                </Link>
                                <Link to='/menu' className="border transition duration-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-black text-white md:text-lg text-sm font-bold py-3 px-9 rounded-full">
                                    Our Menu
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
