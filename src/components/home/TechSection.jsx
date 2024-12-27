import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './animate.css';
import { FaSquareXTwitter } from "react-icons/fa6";

function TechSection() {
  return (
    <div className="max-w-8xl">
      <div className="grid  px-20 py-10   grid-cols-1 md:grid-cols-2 gap-10">
        <section className="bg-zinc-900 p-4">
          <div>
            <h2 className="text-xl font-bold text-red-500 mb-4">
             Are You eager to start your project journey with{" "}
              <span className="text-white">our team?</span>
            </h2>
            <p className="text-gray-400 mb-6">
            Let us turn your dream into reality together. We look forward to embracing the limitless possibilities of creative exploration together with you.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              Start Now →
            </button>
          </div>
        </section>
        <section className="mt-2 flex flex-col items-center justify-around bg-zinc-900 p-4">
          <h2 className="text-rose-600 font-bold text-xl mb-4">Connect Now</h2>
          <div className="flex justify-around space-x-2">
            <button className="bg-gray-950 btn text-blue-600 brightness-125 px-4 py-2 font-extrabold  cursor-pointer   rounded-2xl ">
              <span className=" text-3xl"><FaFacebook className="icon" /></span>
             
            </button>
            <button className="bg-gray-950 brightness-125 px-4 btn py-2 font-extrabold  cursor-pointer  rounded-2xl text-blue-400">
               <span className="text-3xl"> <FaLinkedin className="icon" /> </span>
            </button>
            <button className="bg-gray-950 brightness-125 px-4 py-2 font-extrabold btn rounded-2xl hover:scale-105 cursor-pointer  text-white">
               <span className="text-3xl"> <FaSquareXTwitter className="icon" /> </span>
            </button>
            <button className="bg-gray-950 brightness-125 px-4 py-2 btn font-extrabold rounded-2xl hover:scale-105 cursor-pointer  text-rose-500">
              <span className="text-3xl"> <FaInstagram className="icon" /> </span>
            </button>
          </div>
          <p className="text-white">
            Lets connect on social media and explore your project idea in
            detail.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TechSection;
