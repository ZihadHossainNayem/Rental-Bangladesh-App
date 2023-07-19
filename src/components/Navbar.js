import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BiMoon, BiSun } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

import homeIconP from "../assets/homeIconP.png";
import profileImg from "../assets/profileImg.jpg";

export const Navbar = ({ darkMode, setDarkMode }) => {
  /* state for category in the search bar */
  const [categorySelection, setCategorySelection] = useState("ALL");
  /* search categories */
  const categories = ["ALL", "House", "Sublet", "Mess", "Hostel"];

  /* show category option */
  const [showOptions, setShowOptions] = useState(false);

  /* update the category change */
  const handleCategoryChange = (category) => {
    setCategorySelection(category);
    setShowOptions(false);
  };

  /* handling search button based on selection category and input text */
  const handleSearch = () => {
    console.log("search", categorySelection);
  };

  /* state for placeholder in the searchbar */
  const [placeholder, setPlaceholder] = useState("search location...");

  /* function to change the placeholder value based on screen size */
  const updatePlaceholder = () => {
    setPlaceholder(
      window.innerWidth < 400 ? "search..." : "search location..."
    );
  };

  /* useEffect for placeholder function */
  useEffect(() => {
    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);
    return () => {
      window.removeEventListener("resize", updatePlaceholder);
    };
  }, []);

  return (
    //container
    <div className="fixed top-0 lg:px-16 px-2 md:h-[90px] h-[80px] w-full flex items-center justify-between bg-white dark:bg-darkCol border-b dark:border-gray-700 z-[1000]">
      {/* right section */}
      {/* logo-icon */}
      <div>
        <Link to="/" className="flex items-center gap-2 md:mx-4 mx-1">
          <img
            src={homeIconP}
            alt="homeIconPink"
            className="md:max-w-[28px] max-w-[24px]"
          />
          {/* logo-text */}
          <div className="hidden md:block text-2xl text-fuchsiaPink whitespace-nowrap">
            <span className="font-medium">Rental</span>{" "}
            <span className="font-bold">Bangladesh</span>
          </div>
        </Link>
      </div>
      {/* middle section */}
      {/* search section */}
      <div className="4xl:mx-[300px] 3xl:mx-32 xl:mx-28 mx-2 flex flex-1 justify-center relative">
        {/* input text field */}
        <input
          type="text"
          placeholder={placeholder}
          className="w-full md:pl-6 pl-4 xl:pr-44 lg:pr-40 md:pr-36 pr-28 md:py-[10px] py-[8px] border border-gray-300 dark:border-gray-700  
          rounded-3xl bg-transparent shadow-1 focus:outline-none"
        />

        {/* category selection */}
        <div>
          <button
            onClick={() => setShowOptions(!showOptions)} // Toggle visibility of dropdown options
            className="absolute md:right-16 right-12 top-1/2 -translate-y-1/2 
            border border-transparent hover:border-fuchsiaPink rounded-xl md:px-2 py-[2px] focus:outline-none bg-transparent"
          >
            <div className="flex items-center md:gap-2 ">
              <div className="pl-2">{categorySelection}</div>
              <BiChevronDown className="text-xl" />
            </div>
          </button>
          {/* show the options pop up */}
          {showOptions && (
            <ul className="absolute top-[120%] right-0 w-[100px] md:w-[150px] py-2 bg-white dark:bg-darkCol border border-gray-300 dark:border-gray-700 shadow-1 rounded-md">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className="px-4 py-2 cursor-pointer hover:bg-fuchsiaPink hover:text-white"
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* search button action in input field */}
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <div className="bg-fuchsiaPink md:px-[10px] md:py-[10px] px-[8px] py-[8px] rounded-[50%]">
            <FaSearch className="text-white" />
          </div>
        </button>
      </div>

      {/* right section */}
      <div className="flex">
        {/* dark mode button */}
        <button onClick={() => setDarkMode(!darkMode)} className="md:px-2">
          {darkMode ? (
            <BiMoon className="text-[24px] md:text-[32px]" />
          ) : (
            <BiSun className="text-[24px] md:text-[32px]" />
          )}
        </button>

        {/* profile image */}
        <img
          src={profileImg}
          alt="profileImg"
          className="md:mx-4 mx-2 md:w-12 w-8 border border-fuchsiaPink rounded-[50%]"
        />
      </div>
    </div>
  );
};
