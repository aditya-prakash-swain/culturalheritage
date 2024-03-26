import React from "react";

function ContactUs() {
  return (
    <>
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 bg-white-100 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg"></div>

      <div className="container mx-auto bg-gray-100 bg-opacity-75 rounded-lg shadow-lg p-5 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 m-5 relative z-10">
        {/* Content */}
        <h1 className="font-bold text-xl text-red-800">Contact Us</h1>
        <div className="my-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-gray-300 bg-opacity-50 text-gray-900 mt-2 p-3 rounded-lg focus:outline focus:shadow-outline"
          />
        </div>
        <div className="my-4">
          <textarea
            placeholder="About the Heritage"
            className="w-full h-32 bg-gray-300 bg-opacity-50 text-gray-900 mt-2 p-3 rounded-lg focus:outline focus:shadow-outline"
          ></textarea>
        </div>
        <button className="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded my-4">
          Submit
        </button>
      </div>
    </>
  );
}

export default ContactUs;
