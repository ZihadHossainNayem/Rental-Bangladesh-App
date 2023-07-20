import React, { useState } from "react";

import placeholderImg from "../assets/placeholder.jpg";
import placeholderImg1 from "../assets/placeholder1.jpg";
import placeholderImg2 from "../assets/placeholder2.jpg";
import placeholderImg3 from "../assets/placeholder3.jpg";
import placeholderImg4 from "../assets/placeholder4.jpg";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export const ImageSlider = () => {
  /* dummy array for placeholder image */
  const images = [
    placeholderImg,
    placeholderImg1,
    placeholderImg2,
    placeholderImg3,
    placeholderImg4,
  ];

  /* state for image slider */
  const [currentIndex, setCurrentIndex] = useState(0);

  /* previous slide */
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  /* next slide */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      {/* image slider */}
      <div className="relative">
        {/* Slide Images */}
        <div className="overflow-hidden h-[200px] w-full">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity ${
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={img}
                alt={`cardImg${index + 1}`}
                className="h-[200px] w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dot Highlights */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
          {images.map((img, index) => (
            <button
              key={index}
              className={`w-[10px] h-[10px] rounded-full ${
                index === currentIndex ? "bg-fuchsiaPink" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Slider Controls */}
        <div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300  hover:bg-white bg-opacity-60 hover:bg-opacity-70 p-2 rounded-full"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300  hover:bg-white bg-opacity-60 hover:bg-opacity-70  p-2 rounded-full"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
