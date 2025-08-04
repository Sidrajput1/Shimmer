import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mockupsoft from "../../assets/images/mockupsoft.png";
import mockupvred from "../../assets/images/mockupvred.png";
import mockupdash from "../../assets/images/mockupdash.png";
import mockupumtab from "../../assets/images/mockupumtab.png";
import mockupreal from "../../assets/images/mockupreal.png";
import mockupstab from "../../assets/images/mockupstab.png";
import PriceCard from "./PriceCard";
import ServiceSection from "./ServiceSection";

const imageSources = [mockupsoft, mockupvred, mockupdash];
const textSlides = [
  "Cutting-edge Solutions",
  "Innovative Designs",
  "Your Tech Partner",
];

function BeforeHome() {
  const [animate, setAnimate] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageSources.length);
    }, 3000);
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textSlides.length);
    }, 3000);
    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, []);

  // Function to trigger animation
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      {/* <main
        id="main"
        className="opacity-100 min-h-screen flex justify-center items-center relative overflow-hidden"
      >
      
        <div className="morphing-bg w-96 h-96 top-10 left-10"></div>
        <div className="morphing-bg w-80 h-80 bottom-20 right-20"></div>
        <div className="morphing-bg w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

     
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}

       
        <motion.div 
          className="floating-element top-20 left-20 w-16 h-16 bg-gradient-to-r from-[#fb923ce6] to-[#44EBFF] rounded-full"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-element top-40 right-32 w-12 h-12 bg-gradient-to-r from-[#44EBFF] to-[#fb923ce6] rounded-full"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
                className="flex items-center justify-between w-full py-3 px-6 rounded-xl md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-white font-bold hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] transition-all duration-300 transform hover:scale-105"
        />
        <motion.div 
          className="floating-element bottom-32 left-40 w-20 h-20 bg-gradient-to-r from-[#fb923ce6] to-transparent rounded-full"
                  className="w-3 h-3 ms-3 transition-transform duration-500"
            y: [0, -25, 0],
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
          </p>
        </div>
        <div className="relative flex w-full  justify-center items-center min-h-screen ">
                className="block py-3 px-6 text-white font-bold rounded-xl md:bg-transparent md:p-0 hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            <motion.div
              key={imageSources[currentImage]}
                className={`${
                  isDropdownOpen ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-2"
                } absolute left-0 top-12 mt-2 z-20 font-normal glass-card divide-y divide-white/20 rounded-2xl shadow-2xl w-56 transition-all duration-300 border border-white/20`}
            >
              <img
                  className="py-3 text-sm text-white"
                alt="Main Mockup"
                width={600}
                height={400}
                className="rounded-lg shadow-white transform scale-100 transition-transform duration-500"
              />
                      className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] hover:text-white transition-all duration-300 rounded-xl mx-3 my-1 font-medium transform hover:scale-105 hover:shadow-md"
            <motion.div
              key={textSlides[currentText]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute bottom-0 left-0 w-full text-center py-4 bg-opacity-75 bg-gray-900 text-white rounded-b-lg"
            >
                      className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] hover:text-white transition-all duration-300 rounded-xl mx-3 my-1 font-medium transform hover:scale-105 hover:shadow-md"
                {textSlides[currentText]}
              </h2>
            </motion.div>
          </div>

        
          <div className="absolute md:block hidden top-36 left-10 transform -rotate-6 z-0 hover-lift">
                      className="block px-6 py-3 hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] hover:text-white transition-all duration-300 rounded-xl mx-3 my-1 font-medium transform hover:scale-105 hover:shadow-md"
              src={mockupdash}
              alt="Mockup Dash"
              width={300}
              height={200}
              className="rounded-lg shadow-lg scale-100 hover:scale-105 transition-transform duration-500 glow-border"
                <div className="py-2">
          </div>

                    className="block px-6 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] hover:text-white transition-all duration-300 rounded-xl mx-3 my-1 font-semibold transform hover:scale-105 hover:shadow-md"
          <div className="absolute md:block hidden top-36 right-16 transform rotate-6 z-0 hover-lift">
            <img
              src={mockupumtab}
              alt="Mockup UmTab"
              width={300}
              height={200}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 glow-border"
            />
          </div>
                className="block py-3 px-6 rounded-xl md:hover:bg-transparent md:border-0 md:p-0 text-white font-bold hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] transition-all duration-300 transform hover:scale-105"

          <div className="absolute md:block hidden bottom-20 left-24 transform rotate-3 z-10 hover-lift">
            <img
              src={mockupreal}
              alt="Mockup Real"
              width={300}
              height={200}
                className="block py-3 px-6 rounded-xl md:hover:bg-transparent md:border-0 md:p-0 text-white font-bold hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] transition-all duration-300 transform hover:scale-105"
            />
          </div>

      
          <div className="absolute md:block hidden bottom-24 right-10 transform -rotate-3 z-0 hover-lift">
            <img
              src={mockupstab}
                className="block py-3 px-6 rounded-xl md:hover:bg-transparent md:border-0 md:p-0 text-white font-bold hover:bg-gradient-to-r hover:from-[#fb923ce6] hover:to-[#44EBFF] transition-all duration-300 transform hover:scale-105"
              width={300}
              height={200}
              className="rounded-lg scale-100 shadow-sm shadow-amber-300 hover:scale-105 transition-transform duration-500 glow-border"
            />
          </div>
        </div>
      </main> */}
      <PriceCard />
      <ServiceSection />
      
      {/* Floating Particles for Navigation */}
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BeforeHome;
