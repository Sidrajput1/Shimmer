import React, { useEffect } from "react";
import ShortContent from "./ShortContent";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
import s5 from "../../assets/images/s5.png";
import s6 from "../../assets/images/s6.png";
import s7 from "../../assets/images/s7.png";
import s8 from "../../assets/images/s8.png";
import umpire from '../../assets/images/umpire.png';
import longump from '../../assets/images/longump.png'
import longvivek from '../../assets/images/longvivek.jpeg';
import longsan from '../../assets/images/longsan.jpeg';
import longgvs from '../../assets/techs/longgvs.jpeg';
import longfuel from '../../assets/techs/longfuel.png';
import long_st from '../../assets/techs/long_st.jpeg';
import grocery1 from '../../assets/techs/grocery1.jpeg';
import AOS from 'aos';
import "aos/dist/aos.css";


import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import Wave from "react-wavify";

const images = [longump, longvivek, longsan, longgvs, longfuel, long_st, grocery1];

const titles = [
  "School Umpire",
  "Vivekanand Gurukul",
  "SMS",
  "GVS",
  "Sri Sai Fuel",
  "St Marx Academy",
  "Sri Sai trader",
  
];


const links = [
  "https://schoolumpire.com",
  "https://vivekanandgurukul.in/",
  "https://srisaitrader.in/",
  "https://vivekanandgirukul.com",
  "https://prodigyclasses.com",
  "https://sandeepmemorialschool.com",
  "https://gyanvidyainternationalschool.com",
  "https://stmarxacademy.com",
];

function Portfolio() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({});
  },[]);
  return (
    <section>
      <div className="py-12 bg-black">
        <div className="max-w-7xl mx-auto font-sans px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center ">
            <h2 className="font-heading mb-4 bg-black lg:text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
              Why choose us?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-50 sm:text-4xl">
              We know tech, we know softwares. We are tech experts.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
              Showcasing our innovation and expertise, our portfolio reflects a
              track record of delivering cutting-edge software solutions that
              drive business success
            </p>
          </div>
        </div>
      </div>
      <div className="py-6 bg-black font-sans">
        <ShortContent />
        <article className="text-center mx-auto text-white mt-6 py-2 cursor-pointer">
          <p>
            Wants to{" "}
            <span
              onClick={() => navigate("/services")}
              className="text-orange-700"
            >
              {" "}
              See more?
            </span>
          </p>
        </article>
        {/* <Wave
          fill="#fff"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 40,
            amplitude: 20,
            speed: 0.25,
            points: 3,
          }}
        /> */}
      </div>
      <div className="py-16  relative bg-black">
      {/* <Wave
        fill="#34a1eb"
        paused={false}
        style={{ display: 'block', position: 'relative', zIndex: 1 }}
        options={{
          height: 30,
          amplitude: 60,
          speed: 0.15,
          points: 3,
        }}
      /> */}
        {/* <div
        className="absolute inset-0 bottom-96 flex justify-center items-center"
        style={{ zIndex: 20 }}
      > */}
        <h2 className="text-center text-5xl font-bold text-orange-700">
          Our <span className="text-white">Work</span>
        </h2>
      {/* </div> */}
    
       <Slider images={images} titles={titles} links={links} />
        <div>
          <p className="text-white text-center">
            Want to{" "}
            <span
              onClick={() => navigate("/projects")}
              className="text-md text-blue-800 ml-2 cursor-pointer"
            >
              See More?
            </span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
