import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { LiaHotdogSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white shadow-md">
      {/* Top Row */}
      <div className="flex justify-between items-center p-4 bg-black text-white">
        <div className="flex flex-col md:flex-row items-center xl:mx-0 mx-auto">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-yellow-300" />
            <span>123 Main St, City, Country</span>
          </div>
          <div className="flex items-center mt-1 md:mt-0 md:ml-4">
            <FaPhone className="mr-2 text-yellow-300" />
            <span>+1 (234) 567-8901</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-4 text-xl px-4">
          <a href="#" className="text-yellow-300 hover:text-white transition duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-yellow-300 hover:text-white transition duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-yellow-300 hover:text-white transition duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center text-3xl py-4 permanent-marker-regular">
        <a href="#" className="flex items-center">
          <span className="mr-2"><LiaHotdogSolid /></span>
          <span>The Corn Dog</span>
        </a>
        <hr className="border-t border-gray-300 my-2 w-[90%] mx-auto" />
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden text-center">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <div className="text-center py-5 text-lg permanent-marker-regular">
        <nav className={`flex flex-col md:flex-row justify-center space-x-0 md:space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
          <NavLink 
            to="/" 
            exact 
            className={({ isActive }) => `text-gray-600 py-2 md:py-0 px-4 rounded transition duration-300 ${isActive ? 'bg-yellow-300 text-gray-600' : 'hover:bg-yellow-300'}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => `text-gray-600 py-2 md:py-0 px-4 rounded transition duration-300 ${isActive ? 'bg-yellow-300 text-gray-600' : 'hover:bg-yellow-300'}`}
          >
            Menu
          </NavLink>
          <NavLink 
            to="/truck" 
            className={({ isActive }) => `text-gray-600 py-2 md:py-0 px-4 rounded transition duration-300 ${isActive ? 'bg-yellow-300 text-gray-600' : 'hover:bg-yellow-300'}`}
          >
            Truck Locator
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `text-gray-600 py-2 md:py-0 px-4 rounded transition duration-300 ${isActive ? 'bg-yellow-300 text-gray-600' : 'hover:bg-yellow-300'}`}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
