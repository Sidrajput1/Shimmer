import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Package() {
    const [showMore,setShowMore] = useState();
    const navigate = useNavigate();
  return (
    <div>
      {/* Header Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 
            className="text-4xl md:text-5xl font-black premium-heading mb-6"
            data-aos="zoom-in"
          >
            PLEASE SELECT YOUR PACKAGE
          </h2>
          <p className="text-lg text-gray-300 font-medium max-w-3xl mx-auto">
            Choose a package that fits your needs. Once your order is placed,
            we'll reach out to help you bring your vision to life.
          </p>
        </div>
      </div>

      {/* Package Section */}
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 px-6">
        {/* Package 1 */}
        <div 
          className="premium-card rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 pulse-glow overflow-hidden"
          data-aos="fade-down-right"
          data-aos-delay="1500"
        >
          <div className="px-8 py-10 bg-gradient-to-r from-[#fb923ce6] to-[#44EBFF] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <h3 className="text-2xl md:text-3xl font-black text-white relative z-10">BUSINESS PRO WEBSITE</h3>
          </div>
          <div className="p-8">
            <ul className="space-y-6">
              <li className="flex items-center text-white group">
                <div className="w-3 h-3 bg-gradient-to-r from-[#fb923ce6] to-[#44EBFF] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-semibold">5-Page Website</span>
              </li>
              <li className="flex items-center text-white group">
                <div className="w-3 h-3 bg-gradient-to-r from-[#fb923ce6] to-[#44EBFF] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-semibold">Domain Registration</span>
              </li>
              <li className="flex items-center text-white group">
                <div className="w-3 h-3 bg-gradient-to-r from-[#fb923ce6] to-[#44EBFF] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-semibold">Web Hosting</span>
              </li>
              <li className="flex items-center text-white group">
                <div className="w-3 h-3 bg-gradient-to-r from-[#fb923ce6] to-[#44EBFF] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-semibold">Business Email</span>
              </li>
              <li className="flex items-center text-white group">
                <div className="w-3 h-3 bg-gradient-to-r from-[#fb923ce6] to-[#44EBFF] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-semibold">SEO Optimized Design</span>
              </li>
            </ul>
          </div>
          <div className="p-8">
            <button 
              onClick={() => navigate('/web-dev')} 
              className="premium-btn w-full py-4 text-lg font-bold"
            >
              START NOW
            </button>
          </div>
        </div>

        {/* Package 2 */}
        <div 
          className="premium-card rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 neon-glow overflow-hidden"
           data-aos="fade-down-right"
        >
          <div className="px-8 py-10 bg-gradient-to-r from-[#44EBFF] to-[#fb923ce6] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <h3 className="text-2xl md:text-3xl font-black text-white relative z-10">E-COMMERCE WEBSITE</h3>
          </div>
          <div className="p-8">
            <ul className="space-y-6">
              <li className="flex items-center text-white group">
                <div className="w-3 h-3 bg-gradient-to-r from-[#44EBFF] to-[#fb923ce6] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-semibold">10 Products Listed</span>
              </li>
              <li className="flex items-center text-white group">
                <div className="w-3 h-3 bg-gradient-to-r from-[#44EBFF] to-[#fb923ce6] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-semibold">Domain Registration</span>
              </li>
              <li className="flex items-center text-white group">
                <div className="w-3 h-3 bg-gradient-to-r from-[#44EBFF] to-[#fb923ce6] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-semibold">Web Hosting*</span>
              </li>
              <li className="flex items-center text-white group">
                <div className="w-3 h-3 bg-gradient-to-r from-[#44EBFF] to-[#fb923ce6] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-semibold">Business Email</span>
              </li>
              <li className="flex items-center text-white group">
                <div className="w-3 h-3 bg-gradient-to-r from-[#44EBFF] to-[#fb923ce6] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                <span className="text-lg font-semibold">SEO Optimized Design</span>
              </li>
            </ul>
          </div>
          <div className="p-8">
            <button 
              onClick={() => navigate('/web-dev')} 
              className="premium-btn w-full py-4 text-lg font-bold"
            >
              START NOW
            </button>
          </div>
        </div>
      </div>

      {/* Show More Section */}
      <div className="mt-12 text-center">
        {showMore ? (
          <div className="max-w-4xl mx-auto px-6 py-8 glass-card rounded-3xl">
            <h4 className="text-2xl font-bold premium-heading mb-4">Why Choose Us?</h4>
            <p className="text-lg text-gray-300 leading-relaxed">
              We offer tailored solutions to meet your business needs. Our team
              ensures top-notch quality, fast delivery, and dedicated support to
              help you succeed online. Let us turn your ideas into reality!
            </p>
            <button
              onClick={() => setShowMore(false)}
              className="mt-6 premium-btn px-8 py-3"
            >
              Show Less
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="premium-btn px-8 py-3"
          >
            Show More
          </button>
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-8 text-center text-gray-400 font-medium">
        *Monthly maintenance fee required to host your website and keep it up to
        date.
      </div>
    </div>
  )
}

export default Package