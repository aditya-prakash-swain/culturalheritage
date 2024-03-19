import React, { useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/800x600?slide1",
    title: "Slide 1",
    description: "This is slide 1",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/800x600?slide2",
    title: "Slide 2",
    description: "This is slide 2",
  },
  {
    id: 3,
    image: "https://skift.com/wp-content/uploads/2022/06/GettyImages-1208049833-scaled-e1654782364566-1024x682.jpg",
    title: "Slide 3",
    description: "This is slide 3",
  },
  {
    id: 4,
    image: "https://skift.com/wp-content/uploads/2022/06/GettyImages-1208049833-scaled-e1654782364566-1024x682.jpg",
    title: "Slide 4",
    description: "This is slide 4",
  },
];

function Carosel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative">
      <div className="relative h-60 md:h-80 lg:h-96 overflow-hidden shadow-md rounded"> {/* Responsive height */}
        <div
          className={`flex transition-transform duration-500 ease-in-out `}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-20 left-0 right-0 p-4 flex justify-between">
          <button
            className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400"
            onClick={() =>
              setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
            }
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400"
            onClick={() =>
              setCurrentSlide((currentSlide + 1) % slides.length)
            }
          >
            Next
          </button>
        </div>
      </div>
      <br/>
    </div>
  );
}




export default Carosel;
