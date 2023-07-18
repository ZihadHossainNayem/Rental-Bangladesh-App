import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

import homeIconP from "../assets/homeIconP.png";
import profileImg from "../assets/profileImg.jpg";

export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    //container
    <div className="fixed top-0 md:px-16 px-2 h-[90px] w-full flex items-center justify-between bg-white dark:bg-darkCol border-b dark:border-gray-700 z-[1000]">
      {/* logo */}
      <div className="flex items-center gap-2 md:mx-4 mx-2">
        {/* logo-icon */}
        <img
          src={homeIconP}
          alt="homeIconPink"
          className="md:max-w-[32px] max-w-[28px]"
        />
        {/* logo-text */}
        <div className="hidden md:block text-2xl text-fuchsiaPink whitespace-nowrap">
          <span className="font-medium">Rental</span>{" "}
          <span className="font-bold">Bangladesh</span>
        </div>
      </div>

      {/* search section */}
      <div className="md:mx-4 mx-1 md:w-[680px] flex justify-center relative">
        {/* input text field */}
        <input
          type="text"
          placeholder="search location..."
          className="w-full px-6 py-[10px] border border-gray-300 dark:border-gray-700  rounded-3xl bg-transparent shadow-1"
        />
        {/* button action in input field */}
        <button className="absolute right-2 top-1/2 -translate-y-1/2">
          <div className="bg-fuchsiaPink px-[10px] py-[10px] rounded-[50%]">
            <FaSearch className="text-white" />
          </div>
        </button>
      </div>

      <div className="flex">
        {/* dark mode button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="md:mx-4 mx-1 px-2 "
        >
          {darkMode ? (
            <BiMoon className="text-[26px] md:text-[32px]" />
          ) : (
            <BiSun className="text-[26px] md:text-[32px]" />
          )}
        </button>

        {/* profile image */}
        <img
          src={profileImg}
          alt="profileImg"
          className="md:mx-4 mx-1 md:w-12 w-10 border border-fuchsiaPink rounded-[50%]"
        />
      </div>
    </div>
  );
};
