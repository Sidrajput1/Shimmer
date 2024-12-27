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
    <main className="md:min-h-[120vh] md:h-[130vh] h-auto  bg-gradient-to-r from-black via-red-700 to-black ">
      <div className="bg-gradient-to-r from-black via-red-700 to-black  md:h-[70vh] h-auto w-full flex md:flex-row lg:flex-row flex-col justify-center">
        <section className="md:w-1/2 w-full min-h-[150vh] md:h-[100vh] h-[150vh] px-0 ">
          <div className=" text-white flex flex-col  justify-around items-center py-8">
            <h2 className=" py-2  text-xl text-center font-semibold font-mono">
              ELEVATE YOUR BRAND PROFESSIONALY CRAFTED WEBSITE FOR YOUR BUSINESS
            </h2>
            <h3 className="py-0 mt-2 text-xl text-[#FCF6F5] font-light brightness-200 animate-pulse underline decoration-amber-300 underline-offset-8">
              LET’S BUILD AN EXCEPTIONAL WEBSITE TOGETHER.
            </h3>
            <div className="mt-4">
              <p 
                className="para font-semibold text-justify text-gray-100"
                data-aos="zoom-out-down"
                data-aos-duration="3000"
              >
                {" "}
                We are the Shimmer Group. We design professional websites for
                those in need. We’re offering our design services at an
                affordable rate to support small businesses in building their
                online presence.
              </p>
            </div>
          </div>
          {/* <div>
            <div className="bg-gradient-to-r from-black via-red-700 to-black py-0 mt-8">
              <div className="max-w-5xl md:h-32 lg:h-32 h-24 py-8 bg-gradient-to-r from-black via-red-700 to-black mx-auto px-4 sm:px-4 lg:px-8 text-center">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  PLEASE SELECT YOUR PACKAGE
                </h2>
                <p className="mt-2 text-sm text-gray-200">
                  Once your order is placed, we will reach out to you shortly.
                </p>
              </div>

              <div className="mt-6 max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-black sm:px-10 sm:py-6">
                    <h3 className="text-center text-2xl font-medium text-white">
                      BUSINESS PRO WEBSITE
                    </h3>
                  </div>
                  <div className="px-6 py-8 sm:p-10 sm:pb-6">
                   
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-center">
                        <span className="ml-3 text-base font-medium text-gray-500">
                          5-Page Website
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="ml-3 text-base font-medium text-gray-500">
                          Domain Registration
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="ml-3 text-base font-medium text-gray-500">
                          Web Hosting
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="ml-3 text-base font-medium text-gray-500">
                          Business Email
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="ml-3 text-base font-medium text-gray-500">
                          SEO Optimized Design
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="px-6 py-8 bg-gray-50 sm:p-10 sm:pt-6">
                    <button className="block w-full bg-yellow-500 text-white text-center font-medium py-3 rounded-md">
                      START NOW
                    </button>
                  </div>
                </div>

                <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-blue-500 sm:px-10 sm:py-6 ">
                    <h3 className="text-center text-2xl font-medium text-white">
                      E-COMMERCE WEBSITE
                    </h3>
                  </div>
                  <div className="px-6 py-8 sm:p-10 sm:pb-6">
                   
                    <ul className="mt-6 space-y-4">
                      <li className="flex items-center">
                        <span className="ml-3 text-base font-medium text-gray-500">
                          10 Products Listed
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="ml-3 text-base font-medium text-gray-500">
                          Domain Registration
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="ml-3 text-base font-medium text-gray-500">
                          Web Hosting*
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="ml-3 text-base font-medium text-gray-500">
                          Business Email
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="ml-3 text-base font-medium text-gray-500">
                          SEO Optimized Design
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="px-6 py-8 bg-gray-50 sm:p-10 sm:pt-6">
                    <button className="block w-full bg-blue-500 text-white text-center font-medium py-3 rounded-md">
                      START NOW
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-2 text-center text-gray-500">
                *Monthly maintenance fee required to host your website and keep
                it up to date.
              </div>
            </div>
          </div> */}
          <Package />
        </section>
        <section className="md:w-1/2 w-full md:min-h-[130vh] h-auto md:mt-0 mt-[55rem] ">
          <figure className="md:px-12 px-8">
            <img
              className="md:w-[38rem] w-full md:h-[32rem] h-[20rem] border-t-4 border-r-4 border-l-4 border-x-red-800 rounded-t-[60%] px-4"
              data-aos="fade-down-left"
              data-aos-duration = "2000"
              src={snew4}
              alt=""
            />
          </figure>
          {/* <div className="md:px-12 px-8">
            <div className="bg-transparent rounded-lg shadow-md p-8">
              <h2 className="text-center text-2xl font-semibold mb-6 tracking-wider">
                Contact Us
              </h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Your Email Address"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-400 text-white font-bold rounded-full shadow-md hover:bg-green-500 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div> */}
          {/* <div className="bg-[#FCF6F5] md:h-[60vh] h-auto  mt-[2rem] pr-8">
            <div className="ex py-10 text-center mx-auto">
              <h2 className="text-2xl tracking-wider">
                CRAFTING OUTSTANDING WEB EXPERIENCES
              </h2>
              <h3 className="mt-6 font-semibold text-gray-700">
                RESPONSIVE, USER-FRIENDLY, VISUALLY STUNNING DESIGNS
              </h3>
            </div>
            <div className="py-0 px-8 sm:px-44 ">
              <ul id="responsive" className="space-y-4 ">
                <li className="flex items-center text-xl ">
                  <span className="text-white font-bold rounded-full border-2 py-1 px-2 bg-green-400 mr-1">
                    <FaRegHandPointRight />
                  </span>
                  Responsive Layouts
                </li>
                <li className="flex items-center text-xl ">
                  <span className="text-white font-bold rounded-full border-2 py-1 px-2 bg-green-400 mr-1">
                    <FaRegHandPointRight />{" "}
                  </span>
                  Intuitive User Experience
                </li>
                <li className="flex items-center text-xl ">
                  <span className="text-white font-bold rounded-full border-2 py-1 px-2 bg-green-400 mr-1">
                    <FaRegHandPointRight />{" "}
                  </span>
                  Seamless Navigation
                </li>
                <li className="flex items-center text-xl ">
                  <span className="text-white font-bold rounded-full border-2 py-1 px-2 bg-green-400 mr-1">
                    <FaRegHandPointRight />{" "}
                  </span>
                  Accessible Content
                </li>
                <li className="flex items-center text-xl ">
                  <span className="text-white font-bold rounded-full border-2 py-1 px-2 bg-green-400 mr-1">
                    <FaRegHandPointRight />{" "}
                  </span>
                  Fast Loading Times
                </li>
                <li className="flex items-center text-xl ">
                  <span className="text-white font-bold rounded-full border-2 py-1 px-2 bg-green-400 mr-1">
                    <FaRegHandPointRight />{" "}
                  </span>
                  Cross-Browser Compatibility
                </li>
              </ul>
            </div>
          </div> */}
          {/* <figure className='md:px-12 px-8'>
                <img className='md:w-[38rem] w-full md:h-[32rem] h-[20rem] border-t-4 border-r-4 border-l-4 rounded-t-[60%] px-4' width={500} height={500} src='https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1732781085~exp=1732784685~hmac=42b1e2399ec81508f681b58a7e61c17e1f8176438ac4c26ff9ffdfb308ed37b0&w=740' alt='' />
            </figure> */}
          <div className="py-12  bg-transparent mt-[-2rem]">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
                Our Featured Projects
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                See how we’ve helped businesses achieve their goals through our
                innovative IT solutions.
              </p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 " data-aos="fade-left" data-aos-duration="2000">
                <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition border-2 border-b-lime-200">
                  <img
                    src="https://img.freepik.com/free-vector/sales-promotion-concept-illustration_114360-17611.jpg?t=st=1732787480~exp=1732791080~hmac=2c73e33d09c2e52c84f02f99c93a64852ea71a32fc4339d87380a34749b28c33&w=740"
                    alt="Project 1"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold text-gray-800">
                      E-Commerce 
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Built a scalable e-commerce solution for a fast-growing
                      startup.
                    </p>
                  </div>
                </div>
                <a href="https://schoolumpire.com/" target="_blank">
                <div  className="rounded-lg cursor-pointer overflow-hidden shadow-lg transform hover:scale-105 transition">
                  <img
                    src="https://img.freepik.com/free-vector/flat-university-concept_23-2148174524.jpg?t=st=1732787578~exp=1732791178~hmac=f50840f6ba81e1ebd52c09fb6d9772d43b1a756c4a62dcd017dd0354ffa4a08d&w=740"
                    alt="Project 2"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold text-gray-800">
                      School ERP
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Developed a custom CRM system to streamline client
                      management.
                    </p>
                  </div>
                </div>
                </a>
                <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition">
                  <img
                    src="https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg?t=st=1732787677~exp=1732791277~hmac=996e50aa5eac03db3a00d4343d2b60d9797635a3a49b0d26b4949fd2433c63e8&w=1380"
                    alt="Project 3"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold text-gray-800">
                      Mobile App
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Designed and launched a user-friendly mobile application.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-end text-white text-xl cursor-pointer">
                <span>Click here to</span> <button onClick={()=>navigate('/portfolio')} className="text-blue-300 hover:text-blue-600">Know More?</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PriceCard;
