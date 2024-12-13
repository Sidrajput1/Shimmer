import React, { useState } from 'react'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

function Slider({ images,titles,links }) {
    const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return (
    <div className="relative p-8 mt-8  bg-neutral-950 rounded-lg ">
      <div className="overflow-hidden">
        <div
          className="flex gap-2   transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[26rem] h-80 flex-shrink-0 border-2 border-x-orange-300 "
              style={{ flex: "0 0 33.33%" }}
            >
              <div className="h-[70%]  relative">
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white text-center p-2 rounded-b-lg">
                  <h3 className="text-lg font-semibold">{titles[index]}</h3>
                </div>
              </div>
              <div className="mt-4 text-center">
                <a
                  href={links[index]}
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-blue-800 bg-blue-100 hover:bg-blue-200 py-2 px-4 rounded-full transition duration-300 inline-block"
                >
                  View Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
      >
        <CiCircleChevRight />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
      >
       <CiCircleChevLeft />
      </button>
    </div>
  )
}

export default Slider