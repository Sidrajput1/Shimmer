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
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black flex flex-col w-full justify-center items-center min-h-[100vh] overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fb923ce6]/10 via-transparent to-[#44EBFF]/10"></div>
      
      {/* Animated Background Mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
          backgroundSize: ["100% 100%", "120% 120%", "100% 100%"]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(68, 235, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(251, 146, 60, 0.2) 0%, transparent 50%)
          `,
        }}
      />

      {/* Enhanced Floating Tech Elements */}
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="absolute glass-card px-4 py-2 rounded-full text-white font-bold text-sm md:text-lg pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `linear-gradient(135deg, ${colors[index % colors.length]}40, ${colors[(index + 1) % colors.length]}40)`,
            border: `1px solid ${colors[index % colors.length]}60`,
          }}
          animate={{
            y: ['0%', '-20px', '0%'],
            x: ['0%', `${Math.sin(index) * 10}px`, '0%'],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          {tech}
        </motion.div>
      ))}

      <div className="relative flex flex-col justify-around  items-center w-full px-4 z-10">
        <AnimatePresence mode="wait">
          {/* Current Slide */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="glass-card p-6 rounded-3xl mb-8">
              <motion.img
                src={sliderData[currentIndex].image}
                alt={sliderData[currentIndex].title}
                className="md:w-[700px] w-[600px] h-[450px] md:object-cover object-contain rounded-2xl shadow-2xl"
                initial={{ scale: 0.8, rotateY: 20 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              />
            </div>
            
            <motion.h1
              className="text-4xl sm:text-6xl font-black premium-heading mb-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              {sliderData[currentIndex].title}
            </motion.h1>
            
            <motion.p
              className="max-w-4xl text-gray-300 text-lg sm:text-xl font-medium px-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              {sliderData[currentIndex].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="premium-btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
          >
            Contact Us
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="premium-btn"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 right-4 flex justify-between pointer-events-none">
          <motion.button
            onClick={prevSlide}
            className="glass-card p-4 rounded-full text-white hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] transition-all duration-300 pointer-events-auto neon-glow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="glass-card p-4 rounded-full text-white hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] transition-all duration-300 pointer-events-auto neon-glow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaAngleRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
