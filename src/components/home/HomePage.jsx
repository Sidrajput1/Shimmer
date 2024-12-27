import React from "react";
import HomeContent from "./HomeContent";
import ShortAbout from "./ShortAbout";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import Cta from "../about/Cta";
import ScrollAnimation from "./ScrollAnimation";
import { Helmet } from "react-helmet";
import TechSection from "./TechSection";
import Tech from "./Tech";

function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <main className="bg-black">
      <Helmet>
        <title>Home - Shimmer Softech</title>
        <meta
          name="description"
          content="Welcome to Shimmer Softech, At Shimmer Softech, we turn your digital dreams into reality. Our expert team specializes in creating stunning websites, robust web applications, and innovative mobile apps tailored to your unique needs"
        />
        <meta
          name="keywords"
          content="Website,App,Development,Domain,Ui,Ux,Design,Software"
        />
        <meta property="og:title" content="About Us - Shimmer Softech " />
        <meta
          property="og:description"
          content="Discover more about us and mission behind Our Company."
        />
        <meta property="og:type" content="shimmersoftech" />
        <meta property="og:url" content="https://shimmersoftech.com/about" />

        <meta property="og:url" content="" />
        <meta property="og:url" content="" />
      </Helmet>
      <ScrollAnimation variants={fadeIn}>
        <HomeContent />
      </ScrollAnimation>
      <ScrollAnimation variants={fadeIn}>
        <ShortAbout />
      </ScrollAnimation>
      <ScrollAnimation variants={fadeIn}>
        <Portfolio />
      </ScrollAnimation>
      <ScrollAnimation variants={fadeIn}>
        <div className=" py-16">
          <Tech/>
          </div>
      </ScrollAnimation>
      <ScrollAnimation variants={fadeIn}>
        <Testimonial />
      </ScrollAnimation>
      
      <ScrollAnimation variants={fadeIn}>
        <div className="bg-black py-6">
        <TechSection/>
          <Cta />
         
        </div>
      </ScrollAnimation>
    </main>
  );
}

export default HomePage;
