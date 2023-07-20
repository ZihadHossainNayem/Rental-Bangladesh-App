import React, { useState } from "react";
import placeholderImg from "../assets/placeholder.jpg";

import { BiBed, BiBath, BiArea, BiPhoneCall, BiCategory } from "react-icons/bi";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { IoLocationOutline, IoClose } from "react-icons/io5";

export const CardHome = () => {
  /* state for showing phone number */
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  /* handing whatsapp message button */
  const handleSendWhatsAppMessage = () => {
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      +8801551942841
    )}`;
    window.open(url, "_blank");
  };

  /* handling form submit */
  const handleFormSubmit = () => {};
  return (
    <div className=" max-w-sm shadow-1 rounded-lg overflow-hidden border dark:border-gray-700">
      {/* image */}
      <img
        src={placeholderImg}
        alt="cardImg"
        className="w-full h-56 object-cover"
      />
      {/* rental details */}
      <div className="px-4 py-4">
        {/* title, price, location category*/}
        <div className="space-y-1">
          <h1>House Rent - Title Placeholder</h1>
          <p>
            <span className="text-sm">BDT</span>{" "}
            <span className="font-semibold text-lg">16,000 / monthly</span>
          </p>
          <p className="flex items-center gap-1">
            <IoLocationOutline />
            House 33, Block B, Gulshan 2, Dhaka
          </p>
          <p className="flex items-center gap-1">
            <BiCategory /> Family House Rent
          </p>
        </div>
        {/* room and space details */}
        <div className="flex gap-3 py-2">
          <span className="flex items-center gap-1">
            <BiArea /> 1280 sq. ft.
          </span>
          <span className="flex items-center gap-1">
            <BiBed /> 3 Beds
          </span>
          <span className="flex items-center gap-1">
            <BiBath /> 3 Baths
          </span>
        </div>
        {/* button - contact call email  */}
        <div className="flex gap-4 pt-2">
          <button
            onClick={() => setShowPhoneNumber(!showPhoneNumber)}
            className="flex items-center gap-2 border px-4 py-[3px] rounded-md border-fuchsiaPink hover:bg-fuchsiaPink hover:text-white"
          >
            <BiPhoneCall className="text-lg" />
            Contact
          </button>
          {showPhoneNumber && (
            <>
              <div
                className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 dark:opacity-80 z-[100]"
                onClick={() => setShowPhoneNumber(false)} // Close the pop-up when the dark overlay is clicked
              ></div>
              {/* contact pop up window */}
              <div className="md:w-[700px] w-[96%] px-4 py-8 border dark:border-gray-700 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-darkCol rounded-md shadow-md z-[101]">
                <button
                  onClick={() => setShowPhoneNumber(!showPhoneNumber)}
                  className="absolute -top-3 -right-3 bg-white dark:bg-darkCol text-2xl border dark:border-gray-700 rounded-[50%] p-2 shadow-md"
                >
                  <IoClose className="text-fuchsiaPink" />
                </button>
                {/* phone */}
                <a
                  href="tel:+8801551942841"
                  className="flex items-center gap-2 w-[320px]"
                >
                  <BiPhoneCall className="text-xl w-6 text-fuchsiaPink" /> Phone
                  Number:
                  <span className="font-semibold">+880 1551942841</span>
                </a>
                {/* whatsapp */}
                <button
                  onClick={handleSendWhatsAppMessage}
                  className="flex items-center gap-2 mt-4"
                >
                  <BsWhatsapp className="text-lg w-6 text-fuchsiaPink" />
                  WhatsApp:
                  <span className="font-semibold">+880 1551942841</span>
                </button>
                {/* email form */}
                <form onSubmit={handleFormSubmit} className="mt-10 w-full">
                  {/* name */}
                  <div className="flex flex-col w-4/5 gap-2 mx-4">
                    <label htmlFor="name">Your Name:</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="border border-gray-300 dark:border-gray-700 bg-transparent shadow-sm px-2 py-2 focus:outline-none"
                    />
                  </div>
                  {/* message */}
                  <div className="mt-4 flex flex-col w-4/5 gap-2 mx-4">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      className="border border-gray-300 dark:border-gray-700 bg-transparent shadow-sm px-2 py-2 focus:outline-none"
                    ></textarea>
                  </div>
                  {/* form send button */}
                  <button
                    type="submit"
                    className="flex items-center mx-4 mt-4 border border-fuchsiaPink px-4 py-2 gap-2 rounded hover:bg-fuchsiaPink hover:text-white group"
                  >
                    Send Mail
                    <RiSendPlaneLine className="text-lg text-fuchsiaPink group-hover:text-white" />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
