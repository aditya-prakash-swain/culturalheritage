import React from "react";

function ContactUs() {
  return (
    <div className="container mx-auto bg-yellow-100 rounded shadow-lg p-5 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 m-5">
        <h1 className=" font-bold text-xl" style={{color:"brown"}}>Contact Us</h1>
      <div className="my-4">
        <input
          type="email"
          placeholder="email id"
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline "
        />
      </div>
      <div className="my-4">
        <textarea
          placeholder="About the Heritage"
          className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <button className="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded my-4">Submit</button>
    </div>
  );
}

export default ContactUs;
