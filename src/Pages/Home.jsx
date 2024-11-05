import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/serving.jpg';
import image1 from '../assets/menu.jpg';
import Carousal from '../Components/Carousal';

const sections = [
  {
    id: 1,
    title: 'Serving',
    content: `We're passionate about bringing you the ultimate corn dog experience! Serving up crispy, golden-brown corn dogs made from the finest ingredients...`,
    image: image,
    buttonText: 'Truck Locator',
    navigateTo: '/location',
  },
  {
    id: 2,
    title: 'Our Menu',
    content: 'Explore our menu, discover our unique flavors, and join the corn dog community!',
    image: image1,
    buttonText: 'View Menu',
    navigateTo: '/menu',
  },
];

const Home = () => {
  const navigate = useNavigate();
  
  // Detect if the device is mobile (iOS/Android)
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      if (/iphone|ipod|ipad|android/i.test(userAgent)) {
        setIsMobile(true);  // Set to true if mobile device is detected
      } else {
        setIsMobile(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Scroll handler to adjust background position on scroll (for mobile)
  const handleScroll = () => {
    if (isMobile) {
      setScrollPosition(window.scrollY);  // Track scroll position for mobile
    }
  };

  useEffect(() => {
    // Add scroll event listener for mobile
    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  const handleButtonClick = (navigateTo) => {
    navigate(navigateTo);
  };

  return (
    <>
      <Carousal />
      <div>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="relative w-full h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: isMobile ? 'scroll' : 'fixed', // Fixed for desktop, scroll for mobile
            }}
          >
            {/* For mobile, dynamically adjust the background position */}
            {isMobile && (
              <div
                className="mobile-fixed-background"
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${section.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: `center ${scrollPosition * 0.5}px`, // Adjust background position for scroll
                  zIndex: -1,
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className={`relative z-10 flex items-center h-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-md p-6 md:p-8 lg:p-10 backdrop-blur-lg bg-white bg-opacity-90 rounded-lg shadow-xl ${index % 2 === 0 ? 'md:mr-10 mr-0' : 'md:ml-10 ml-0'}`}>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 text-center permanent-marker-regular">
                  {section.title}
                </h1>
                <p className="mt-2 text-sm md:text-md leading-relaxed text-gray-800 text-center inter-uniquifier">
                  {section.content}
                </p>
                <div className="mt-6 text-center">
                  <button
                    className="bg-yellow-500 transition duration-500 hover:bg-gray-800 hover:text-white text-gray-800 md:text-lg text-sm font-bold py-3 px-6 md:px-9 rounded-full permanent-marker-regular"
                    onClick={() => handleButtonClick(section.navigateTo)}
                  >
                    {section.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
