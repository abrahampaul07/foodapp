import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/serving.jpg';
import image1 from '../assets/menu.jpg';
import Carousal from '../Components/Carousal';

const sections = [
  {
    id: 1,
    title: 'Serving',
    content: `We're passionate about bringing you the ultimate corn dog experience! Serving up crispy, golden-brown corn dogs made from the finest ingredients, we take pride in our time-honored recipes that have delighted taste buds for generations. Whether you're craving a classic corn dog, a gourmet twist, or a vegetarian option, we have something for everyone.`,
    image: image,
    buttonText: 'Truck Locator',
    navigateTo: '/location', // Add navigation path
  },
  {
    id: 2,
    title: 'Our Menu',
    content: 'Explore our menu, discover our unique flavors, and join the corn dog community! Follow us on social media for the latest updates, special promotions, and mouthwatering photos that will make your taste buds tingle.',
    image: image1,
    buttonText: 'View Menu',
    navigateTo: '/menu', // Add navigation path
  },
];

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = (navigateTo) => {
    navigate(navigateTo); // Use navigate to go to the desired route
  };

  return (
    <>
      <Carousal />
      <div>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="relative w-full h-screen bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${section.image})`,
              // backgroundAttachment: 'fixed',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className={`relative z-10 flex items-center h-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-md p-6 md:p-8 lg:p-10 backdrop-blur-lg bg-white bg-opacity-90 rounded-lg shadow-xl ${index % 2 === 0 ? 'md:mr-10 mr-0' : 'md:ml-10 ml-0'}`}>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 text-center permanent-marker-regular">{section.title}</h1>
                <p className="mt-2 text-sm md:text-md leading-relaxed text-gray-800 text-center inter-uniquifier">{section.content}</p>
                <div className="mt-6 text-center">
                  <button 
                    className="bg-yellow-500 transition duration-500 hover:bg-gray-800 hover:text-white text-gray-800 md:text-lg text-sm font-bold py-3 px-6 md:px-9 rounded-full permanent-marker-regular"
                    onClick={() => handleButtonClick(section.navigateTo)} // Pass the navigation path
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
