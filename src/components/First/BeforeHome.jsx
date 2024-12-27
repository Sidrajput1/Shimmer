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
      <main
        id="main"
        className=" opacity-100 h-screen flex justify-center items-center  "
      >
        <div className=" absolute md:right-16 right-8 md:top-28 top-24 md:block hidden ">
          <header className="md:text-5xl text-2xl text-justify  font-sans rounded-xl -z-20 ">
            <span className="text-orange-500 font-bold tracking-[0.3rem] ">
              SHIMMER
            </span>{" "}
            <span className="text-sky-600 font-bold tracking-[0.3rem]">
              SOFTECH
            </span>
          </header>
          <h1 className="md:text-lg text-sm italic text-white text-center  md:px-12 px-2">
            a unit of Shimmer Utility Private Limited
          </h1>
          <p className="text-sm  text-center">
            AN ISO 9001:2015 Certified Company
          </p>
        </div>
        <div className="relative flex w-full  justify-center items-center min-h-screen ">
          <div className="relative z-0">
            <motion.div
              key={imageSources[currentImage]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={imageSources[currentImage]}
                alt="Main Mockup"
                width={600}
                height={400}
                className="rounded-lg shadow-white transform scale-100 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              key={textSlides[currentText]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute bottom-0 left-0 w-full text-center py-4 bg-opacity-75 bg-gray-900 text-white rounded-b-lg"
            >
              <h2 className="text-xl font-semibold">
                {textSlides[currentText]}
              </h2>
            </motion.div>
          </div>

          {/* Top-Left Image */}
          <div className="absolute md:block hidden top-36 left-10 transform -rotate-6 z-0">
            <img
              src={mockupdash}
              alt="Mockup Dash"
              width={300}
              height={200}
              className="rounded-lg  shadow-lg scale-100 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Top-Right Image */}
          <div className="absolute md:block hidden top-36 right-16 transform rotate-6 z-0">
            <img
              src={mockupumtab}
              alt="Mockup UmTab"
              width={300}
              height={200}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom-Left Image */}
          <div className="absolute md:block hidden bottom-20 left-24  transform rotate-3 z-10">
            <img
              src={mockupreal}
              alt="Mockup Real"
              width={300}
              height={200}
              className="rounded-lg scale-105  hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Bottom-Right Image */}
          <div className="absolute md:block hidden bottom-24 right-10 transform -rotate-3 z-0">
            <img
              src={mockupstab}
              alt="Mockup Stab"
              width={300}
              height={200}
              className="rounded-lg scale-100 shadow-sm shadow-amber-300 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </main>
      <PriceCard />
      <ServiceSection />
    </div>
  );
}

export default BeforeHome;
