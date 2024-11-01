import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import { FaBullhorn } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import image from "../assets/footer.jpg"; 

const Footer = () => {
  return (
    <div className="relative bg-black text-white py-6 p-3">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="container mx-auto relative flex flex-col md:flex-row justify-between items-start">
        {/* About Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center mb-4 md:mb-0 text-center">
          <h3 className="text-2xl font-semibold flex items-center justify-center permanent-marker-regular text-yellow-300">
            <ImSpoonKnife className="mr-2" />
            About
          </h3>
          <p className="mt-2 text-sm">
            We are dedicated to serving the best corn dogs in town! Our food truck is always ready to bring the flavor to your events.
          </p>
        </div>

        {/* Opening Hours Section */}
        <div className="w-full md:w-1/3 text-center mb-4 md:mx-4">
          <h3 className="text-2xl font-semibold flex items-center justify-center permanent-marker-regular text-yellow-300">
            <MdOutlineAccessTime className="mr-2" />
            Opening Hours
          </h3>
          <div className="mt-2">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
              <div key={index} className="flex flex-col mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>{day}</span>
                  <span className="text-yellow-300">
                    {day === "Saturday" ? "10 AM - 10 PM" : "11 AM - 9 PM"}
                  </span>
                </div>
                <hr className="border-t border-gray-600" />
              </div>
            ))}
          </div>
        </div>

        {/* Connect with Us Section */}
        <div className="w-full md:w-1/3 text-center md:ml-4">
          <h3 className="text-2xl font-semibold flex items-center justify-center permanent-marker-regular text-yellow-300">
            <FaBullhorn className="mr-2" />
            Connect with Us
          </h3>
          <div className="flex flex-col items-center mt-2">
            <div className="flex items-center mb-2">
              <MdEmail className="mr-2" />
              <span>contact@thecorndog.com</span>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-yellow-300 transition duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-yellow-300 transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-300 transition duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 text-center text-xs relative z-10">
        <hr className='my-6 border-gray-600' />
        <p>
          &copy; {new Date().getFullYear()} The Corn Dog. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
