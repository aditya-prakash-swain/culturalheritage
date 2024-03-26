import React from "react";
import ContactUs from "./ContactUs";

function AboutMe() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-around bg-gray-200 bg-cover bg-center relative overflow-hidden" style={{backgroundImage: `url('https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>

      <div className="container mx-auto bg-gray-100 bg-opacity-75 rounded-lg shadow-lg p-5 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 m-5 relative z-10">
        {/* Content */}
        <h1 className="text-xl font-bold text-red-800">About Us</h1>
        <br />
        <p className="text-gray-800">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>
      <ContactUs />
    </div>
  );
}

export default AboutMe;
