import React, { useEffect, useState } from "react";
import mockupdash from "../../assets/images/mockupdash.png";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const sliderData = [
  {
    image: mockupdash,
    title: "We Create Websites and Software",
    description:
      "We are the Shimmer Group. We design professional websites for those in need. We’re offering our design services at an affordable rate to support small businesses in building their online presence.",
  },
  {
    image: "https://schoolumpire.com/assets/mockupsatmobile-DSCaoLPe.png",
    title: "Boost Your Online Presence",
    description:
      "Our websites are crafted to ensure a seamless experience for your audience while reflecting your brand identity.",
  },
  {
    image: "https://schoolumpire.com/assets/mockupatimac-BSbUcoh_.png",
    title: "Customized Software Solutions",
    description:
      "From concept to completion, we deliver software tailored to meet your unique business requirements.",
  },
];

const technologies = [
  "React",
  "Node.js",
  "Next.js",
  "JavaScript",
  "CSS",
  "HTML",
  "php",
  "sql",
  "responsive",
];

const colors = [
  "#FF5733", // Orange-red
  "#33FF57", // Lime green
  "#3357FF", // Royal blue
  "#FF33A8", // Pink
  "#FFD133", // Yellow
  "#33FFF5", // Cyan
  "#FF5733", // Coral
  "#A833FF", // Purple
  "#FF8C33", // Orange
];

function HomeContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  useEffect(()=>{
    const imageInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
      }, 5000);
     
      return () => {
        clearInterval(imageInterval);
        
      };
  },[])

  const radius = 200; // Radius of the circular motion
  const duration = 20;
  return (
    <div className="relative bg-gradient-to-r from-black  to-black flex flex-col w-full justify-center items-center min-h-[100vh] overflow-hidden">
      {/* <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div> */}
      <motion.div
        className="absolute   inset-0 z-0 pointer-events-none"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), rgba(0,0,0,0.1) 50%, transparent 100%)`,
          backgroundSize: "200% 200%",
        }}
      />
      <div className="absolute inset-0 bg-black  opacity-40"></div>

      {/* Circular Line */}
      {/* <div
      className="absolute rounded-full border-4 opacity-10 border-solid border-gray-500"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    ></div> */}

      {/* {[0, 1].map((ring) => (
        <motion.div
          key={ring}
          className="absolute  rounded-full border-4 border-x-orange-700 opacity-50"
          style={{
            width: `${radius * 4}px`,
            height: `${radius * 4}px`,
            top: "50%",
            left: "65%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: ring === 0 ? 15 : 20,
          }}
        ></motion.div>
      ))} */}

      {/* {[...Array(10)].map((_, index) => (
      <motion.div
        key={index}
        className="absolute bg-[#FEE715] rounded-full opacity-40"
        style={{
          width: `${Math.random() * 50 + 20}px`,
          height: `${Math.random() * 50 + 20}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: ['10%', '-10%', '0%'],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: Math.random() * 6 + 4,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
    ))} */}
      {technologies.map((tech, index) => (
      <motion.div
        key={index}
        className="absolute  p-4 rounded-full text-gray-50 font-bold text-xl sm:text-xl pointer-events-none"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          color: colors[index % colors.length],
        }}
        animate={{
          y: ['0%', '-10%', '0%'],
          opacity: [0.4, 1, 0.4],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: Math.random() * 6 + 4,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: "easeInOut",
        }}
      >
        {tech}
      </motion.div>
    ))}

      {/* {technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="absolute     text-gray-500 p-4 rounded-full text-justify uppercase font-extrabold text-lg  pointer-events-none hover:bg-orange-700"
          style={{
            width: "80px",
            height: "80px",
            top: "90%",
            left: "64%",
            transformOrigin: `${radius * 2}px 0px`,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: duration,
            delay: (index / technologies.length) * duration, // Staggered delay
          }}
        >
          {tech}
        </motion.div>
      ))} */}

      <div className="relative flex flex-col justify-around  items-center w-full px-4 z-10">
        <AnimatePresence mode="wait">
          {/* Current Slide */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <motion.img
              src={sliderData[currentIndex].image}
              alt={sliderData[currentIndex].title}
              className="w-[700px] h-[450px] object-cover rounded-xl  hover:scale-105"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.h1
              className="text-3xl sm:text-5xl font-sans text-white  font-bold mb-4 py-6"
              style={{
                textShadow: ` 1px 2px 0 #000, 1px 1px 0 #333, 1px 1px 0 #555, 2px 2px 0 #777, 5px 5px 0 #999`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              {sliderData[currentIndex].title}
            </motion.h1>
            <motion.p
              className="max-w-3xl text-orange-700 text-lg font-sans sm:text-xl  px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              {sliderData[currentIndex].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
        <div className="flex space-x-6 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-transparent text-orange-700 font-sans font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-transparent hover:text-orange-700 transition-all duration-300 border-2 border-orange-700"
          >
            Contact Us
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-teal-900 text-[rgb(254,231,21)] font-sans font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-transparent hover:text-teal-900 transition-all duration-300 border-2 border-teal-900"
          >
            Learn More
          </motion.button>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 flex space-x-[60rem]">
          <button
            onClick={prevSlide}
            className="text-white rounded-full p-3 shadow-md hover:bg-[#FEE715] hover:opacity-40 transition-all"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-white rounded-full p-3 shadow-md hover:bg-[#FEE715] hover:opacity-40 transition-all"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
