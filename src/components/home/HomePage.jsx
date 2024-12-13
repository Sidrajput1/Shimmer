import React from "react";
import HomeContent from "./HomeContent";
import ShortAbout from "./ShortAbout";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import Cta from "../about/Cta";
import ScrollAnimation from "./ScrollAnimation";

function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <main className="bg-black">
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
      <Testimonial />
      </ScrollAnimation>
      <ScrollAnimation variants={fadeIn}>
      <div className="bg-black py-6">
        <Cta />
      </div>
      </ScrollAnimation>
    </main>
  );
}

export default HomePage;
