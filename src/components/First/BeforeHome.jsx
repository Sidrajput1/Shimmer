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
      <main className="relative h-screen flex justify-center items-center overflow-hidden">
        {/* Premium Background with Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fb923ce6]/20 via-transparent to-[#44EBFF]/20"></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-20 h-20 rounded-full glass-card pulse-glow"
          style={{ background: 'linear-gradient(135deg, #fb923ce6, #44EBFF)' }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-16 h-16 rounded-full glass-card neon-glow"
          style={{ background: 'linear-gradient(135deg, #44EBFF, #fb923ce6)' }}
          animate={{ 
            y: [0, 30, 0],
            x: [0, -10, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-40 w-24 h-24 rounded-full glass-card"
          style={{ background: 'linear-gradient(135deg, #fb923ce6, #44EBFF)' }}
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-18 h-18 rounded-full glass-card pulse-glow"
          style={{ background: 'linear-gradient(135deg, #44EBFF, #fb923ce6)' }}
          animate={{ 
            y: [0, -15, 0],
            x: [0, 15, 0],
            rotate: [0, -90, -180, -270, -360]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Enhanced Company Branding */}
        <motion.div 
          className="absolute md:right-16 right-8 md:top-28 top-24 md:block hidden glass-card p-6 rounded-2xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <header className="md:text-5xl text-2xl text-center">
            <motion.span 
              className="shimmer-text font-black tracking-[0.3rem] block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              SHIMMER
            </motion.span>
            <motion.span 
              className="premium-heading font-black tracking-[0.3rem] block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              SOFTECH
            </motion.span>
          </header>
          <motion.h1 
            className="md:text-lg text-sm italic text-white text-center md:px-12 px-2 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            a unit of Shimmer Utility Private Limited
          </motion.h1>
          <motion.p 
            className="text-sm text-center text-gray-300 mt-2 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            AN ISO 9001:2015 Certified Company
          </motion.p>
        </motion.div>
        
        {/* Enhanced Main Content Area */}
        <div className="relative flex w-full justify-center items-center min-h-screen z-10">
          <div className="relative">
            <motion.div
              key={imageSources[currentImage]}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="glass-card p-4 rounded-3xl"
            >
              <img
                src={imageSources[currentImage]}
                alt="Main Mockup"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 neon-glow"
              />
            </motion.div>
            
            <motion.div
              key={textSlides[currentText]}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full text-center py-6 glass-card text-white rounded-b-2xl"
            >
              <h2 className="text-2xl font-bold shimmer-text">
                {textSlides[currentText]}
              </h2>
            </motion.div>
          </div>

          {/* Enhanced Floating Images */}
          <motion.div 
            className="absolute md:block hidden top-36 left-10 z-0"
            initial={{ opacity: 0, x: -100, rotate: -20 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 0, z: 10 }}
          >
            <div className="glass-card p-3 rounded-2xl">
            <img
              src={mockupdash}
              alt="Mockup Dash"
              width={300}
              height={200}
              className="rounded-xl shadow-2xl transition-all duration-500 pulse-glow"
            />
            </div>
          </motion.div>

          <motion.div 
            className="absolute md:block hidden top-36 right-16 z-0"
            initial={{ opacity: 0, x: 100, rotate: 20 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 0, z: 10 }}
          >
            <div className="glass-card p-3 rounded-2xl">
            <img
              src={mockupumtab}
              alt="Mockup UmTab"
              width={300}
              height={200}
              className="rounded-xl shadow-2xl transition-all duration-500 neon-glow"
            />
            </div>
          </motion.div>

          <motion.div 
            className="absolute md:block hidden bottom-20 left-24 z-10"
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 1, delay: 0.7 }}
            whileHover={{ scale: 1.15, rotate: 0, z: 20 }}
          >
            <div className="glass-card p-3 rounded-2xl">
            <img
              src={mockupreal}
              alt="Mockup Real"
              width={300}
              height={200}
              className="rounded-xl shadow-2xl transition-all duration-500 pulse-glow"
            />
            </div>
          </motion.div>

          <motion.div 
            className="absolute md:block hidden bottom-24 right-10 z-0"
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.1, rotate: 0, z: 10 }}
          >
            <div className="glass-card p-3 rounded-2xl">
            <img
              src={mockupstab}
              alt="Mockup Stab"
              width={300}
              height={200}
              className="rounded-xl shadow-2xl transition-all duration-500 neon-glow"
            />
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced Floating Particles */}
        <div className="floating-particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? '#fb923ce6' : '#44EBFF',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </main>
      <PriceCard />
      <ServiceSection />
    </div>
  );
}

export default BeforeHome;
