import React, { useEffect } from "react";
import global2 from "../../assets/images/global2.png";
import Wave from "react-wavify";
import { useScroll,motion, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";


function ShortAbout() {
  // const {scrollYProgress} = useScroll();

  // const scale = useTransform(scrollYProgress, [0, 1.8], [1, 1.5]);

  // // Transform for fading out
  // const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  // // Transform for parallax effect
  // const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    AOS.init({});
  },[]);
  return (
    <article>
      <section className="pt-10 mt-0 overflow-hidden bg-black dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto min-h-[60vh] sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center font-sans grid-cols-1 md:grid-cols-2">
            <div>
              <div className="" >
                <h2
                  
                 className="text-3xl font-bold leading-tight text-red-700 dark:text-white sm:text-4xl lg:text-5xl">
                  Who We Are
                  <br className="block sm:hidden" />
                </h2>
                <div
                  className="mt-0"
                  style={{
                    width: "fit-content",
                    position: "relative",
                    margin: "0 auto",
                     bottom:"50px",
                     right:"150px"
                  }}
                >
                  <Wave
                    fill="#FFA500"
                    paused={false}
                    style={{ width: "100%", height: "60px" }}
                    options={{
                      height: 50,
                      amplitude: 10,
                      speed: 0.3,
                      points: 3,
                     
                    }}
                  />
                </div>
              </div>
              <p 
              className="max-w-xl mt-3 text-md leading-relaxed text-gray-100 dark:text-gray-300 md:mt-[-20px]"
              data-aos = "fade-right"
              data-aos-duration = "1000"
              >
                Welcome to our innovative software company, where cutting-edge
                technology meets creative solutions. We are dedicated to
                transforming your ideas into reality, providing tailor-made
                software solutions that drive success and growth in your
                business.
                <br />
                We are a community of tech-savvy dreamers and doers, united in
                our passion for helping small business owners succeed. Our team
                of experienced developers is dedicated to providing top-notch
                services and creating websites that meet the unique needs of our
                clients.
              </p>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-red-700 dark:bg-gray-900"></span>
                  <span className="relative">Have a question?</span>
                </span>
                <br className="block sm:hidden" />
                <a
                  href="/about"
                  title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  Read More
                </a>
              </p>
            </div>
            <div className="relative">
              {/* <Image className="absolute inset-x-0 bottom-0 -mb-54 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" width={500} height={500} /> */}
              <img
                className="relative w-full xl:max-w-2xl xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={global2}
                alt="About image"
                data-aos="zoom-in-left"
                data-aos-duration = "2000"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default ShortAbout;
