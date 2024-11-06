import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { LiaHotdogSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const fetchContacts = async () => {
      const cachedContacts = localStorage.getItem("contacts_raw");
      if (cachedContacts) {
        const data = JSON.parse(cachedContacts);
        const rows = data.valueRanges[0].values;
        let contactData = {};

          // Loop through rows and extract key-value pairs
          rows.forEach((row) => {
            // Map the label to the corresponding value
            if (row[0] === "email") {
              contactData.email = row[1];
            }
            if (row[0] === "phone") {
              contactData.phone = row[1];
            }
            if (row[0] === "facebook") {
              contactData.facebook = row[1];
            }
            if (row[0] === "instagram") {
              contactData.instagram = row[1];
            }
            if (row[0] === "twitter") {
              contactData.twitter = row[1] || ""; // Handle empty twitter value
            }
            if (row[0] === "business_address") {
              contactData.business_address = row[1];
            }
            if (row[0] === "current_truck_location") {
              contactData.current_truck_location = row[1];
            }
          });

          // Save contacts in the state and localStorage
          localStorage.setItem("contacts", JSON.stringify(contactData));
          setContacts(contactData);
          setLoading(false);
      } else{
        console.log('no data');
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Extract contact details
  // const businessAddress = contacts?.business_address;
  // const phone = contacts?.phone;
  // const facebook = contacts?.facebook;
  // const instagram = contacts?.instagram;
  // const twitter = contacts?.twitter;
  // const currentTruckLocation = contacts?.current_truck_location;

  return (
    <div className="bg-white shadow-md inter-uniquifier">
      {/* Top Row */}
      <div className="flex justify-between items-center p-4 bg-black text-white">
        <div className="flex flex-col md:flex-row items-center xl:mx-0 mx-auto">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-yellow-500" />
            <span>{contacts.business_address}</span>
          </div>
          <div className="flex items-center mt-1 md:mt-0 md:ml-4">
            <FaPhone className="mr-2 text-yellow-500" />
            <span>{contacts.phone}</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-4 text-xl px-4">
          <a
            href={contacts.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-white transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-yellow-500 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-yellow-500 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center text-3xl py-4 permanent-marker-regular">
        <a href="#" className="flex items-center">
          <span className="mr-2">
            <LiaHotdogSolid />
          </span>
          <span>The Corn Dog</span>
        </a>
        <hr className="border-t border-gray-300 my-2 w-[90%] mx-auto" />
      </div>

      {/* Mobile Toggle Button with Explore Text */}
      <div className="md:hidden text-center flex items-center justify-center md:pb-0 pb-4">
        <button
          onClick={toggleMobileMenu}
          className="focus:outline-none transform transition-transform duration-300 hover:scale-105"
        >
          <svg
            className={`w-6 h-6 text-red-700 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <span
          onClick={toggleMobileMenu}
          className="text-[17px] text-red-700 comfortaa-uniquifier font-bold cursor-pointer"
        >
          xplore
        </span>
      </div>

      {/* Navbar Links */}
      <div
        className={`md:block text-center md:pb-10 text-lg permanent-marker-regular transition-all duration-500 transform ${isMobileMenuOpen ? "md:max-h-0 max-h-screen h-auto md:pt-0 pt-2" : "max-h-0 overflow-hidden"}`}
      >
        <nav
          className={`flex flex-col md:flex-row justify-center space-x-0 md:space-x-6 ${isMobileMenuOpen ? "md:bg-white bg-black" : ""}`}
        >
          <NavLink
            to="/"
            exact="true"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              `md:text-gray-600 text-white py-2 md:py-0 px-4 rounded transition duration-300 ${
                isActive
                  ? "bg-yellow-500 md:text-gray-800 text-gray-600 text-black"
                  : "hover:bg-yellow-500 hover:md:text-gray-800"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              `md:text-gray-600 text-white py-2 md:py-0 px-4 rounded transition duration-300 ${
                isActive
                  ? "bg-yellow-500 md:text-gray-800 text-black"
                  : "hover:bg-yellow-500 hover:md:text-gray-800"
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/location"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              `md:text-gray-600 text-white py-2 md:py-0 px-4 rounded transition duration-300 ${
                isActive
                  ? "bg-yellow-500 md:text-gray-800 text-black"
                  : "hover:bg-yellow-500 hover:md:text-gray-800"
              }`
            }
          >
            Truck Locator
          </NavLink>
          <NavLink
            to="/contact"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              `md:text-gray-600 text-white py-2 md:py-0 px-4 rounded transition duration-300 ${
                isActive
                  ? "bg-yellow-500 md:text-gray-800 text-black"
                  : "hover:bg-yellow-500 hover:md:text-gray-800"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
