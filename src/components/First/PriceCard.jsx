import React, { useEffect } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import Package from "./Package";
import snew4 from "../../assets/images/snew4.png";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";


function PriceCard() {

  const navigate = useNavigate();

  useEffect(()=>{
    AOS.init({});
  },[]);
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fb923ce6]/10 via-transparent to-[#44EBFF]/10"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#fb923ce6] to-[#44EBFF] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full flex md:flex-row flex-col justify-center items-start min-h-screen">
        <section className="md:w-1/2 w-full px-6 py-12">
          <div className="text-white flex flex-col justify-center items-center space-y-8">
            <h2 className="text-2xl md:text-3xl text-center font-black shimmer-text leading-tight">
              ELEVATE YOUR BRAND PROFESSIONALY CRAFTED WEBSITE FOR YOUR BUSINESS
            </h2>
            <h3 className="text-xl md:text-2xl text-center font-bold premium-heading glow-text">
              LET’S BUILD AN EXCEPTIONAL WEBSITE TOGETHER.
            </h3>
            <div className="glass-card p-6 rounded-2xl max-w-2xl">
              <p 
                className="text-base md:text-lg font-medium text-gray-100 leading-relaxed text-center"
                data-aos="zoom-out-down"
                data-aos-duration="3000"
              >
                We are the Shimmer Group. We design professional websites for
                those in need. We’re offering our design services at an
                affordable rate to support small businesses in building their
                online presence.
              </p>
            </div>
          </div>
          <Package />
        </section>
        
        <section className="md:w-1/2 w-full px-6 py-12">
          <figure className="mb-12">
            <img
              className="w-full max-w-2xl mx-auto h-auto glass-card p-4 rounded-3xl float-animation pulse-glow transform hover:scale-105 transition-all duration-500"
              data-aos="fade-down-left"
              data-aos-duration="2000"
              src={snew4}
              alt="Premium Website Design"
            />
          </figure>
          
          <div className="glass-card p-8 rounded-3xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black premium-heading mb-4">
                Our Featured Projects
              </h2>
              <p className="text-lg text-gray-300 font-medium">
                See how we’ve helped businesses achieve their goals through our
                innovative IT solutions.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8" data-aos="fade-left" data-aos-duration="2000">
              <div className="premium-card rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 neon-glow">
                  <img
                    src="https://img.freepik.com/free-vector/sales-promotion-concept-illustration_114360-17611.jpg?t=st=1732787480~exp=1732791080~hmac=2c73e33d09c2e52c84f02f99c93a64852ea71a32fc4339d87380a34749b28c33&w=740"
                    alt="Project 1"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      E-Commerce 
                    </h3>
                    <p className="text-gray-300">
                      Built a scalable e-commerce solution for a fast-growing
                      startup.
                    </p>
                  </div>
                </div>
                
                <a href="https://schoolumpire.com/" target="_blank">
                  <div className="premium-card rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 pulse-glow cursor-pointer">
                  <img
                    src="https://img.freepik.com/free-vector/flat-university-concept_23-2148174524.jpg?t=st=1732787578~exp=1732791178~hmac=f50840f6ba81e1ebd52c09fb6d9772d43b1a756c4a62dcd017dd0354ffa4a08d&w=740"
                    alt="Project 2"
                    className="w-full h-48 object-cover"
                  />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                      School ERP
                    </h3>
                      <p className="text-gray-300">
                      Developed a custom CRM system to streamline client
                      management.
                    </p>
                  </div>
                </div>
                </a>
                
                <div className="premium-card rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 neon-glow">
                  <img
                    src="https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg?t=st=1732787677~exp=1732791277~hmac=996e50aa5eac03db3a00d4343d2b60d9797635a3a49b0d26b4949fd2433c63e8&w=1380"
                    alt="Project 3"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Mobile App
                    </h3>
                    <p className="text-gray-300">
                      Designed and launched a user-friendly mobile application.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <span className="text-white text-lg mr-3">Want to see more?</span> 
                <button 
                  onClick={() => navigate('/portfolio')} 
                  className="premium-btn text-sm"
                >
                  View Portfolio
                </button>
              </div>
            </div>
        </section>
      </div>
    </main>
  );
}

export default PriceCard;
