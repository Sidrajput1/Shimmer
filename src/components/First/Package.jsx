import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Package() {
    const [showMore,setShowMore] = useState();
    const navigate = useNavigate();
  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-black via-red-700 to-black py-12 mt-8">
        <div className="max-w-5xl h-auto mx-auto px-4 text-center">
          <h2 
          className="text-3xl font-extrabold text-white sm:text-4xl"
            data-aos="zoom-in"
          >
            PLEASE SELECT YOUR PACKAGE
          </h2>
          <p className="mt-4 text-base text-gray-300">
            Choose a package that fits your needs. Once your order is placed,
            we'll reach out to help you bring your vision to life.
          </p>
        </div>
      </div>

      {/* Package Section */}
      <div className="mt-10 max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 px-4 sm:px-6 lg:px-8">
        {/* Package 1 */}
        <div 
        className="flex flex-col bg-white rounded-lg shadow-2xl transform transition duration-300 hover:scale-105"
          data-aos="fade-down-right"
          data-aos-delay="1500"
        >
          <div className="px-6 py-8 bg-gradient-to-r from-black via-red-700 to-black text-center">
            <h3 className="text-2xl font-bold text-white">BUSINESS PRO WEBSITE</h3>
          </div>
          <div className="px-6 py-8 sm:p-10">
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <span className="ml-3 text-base font-medium">5-Page Website</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="ml-3 text-base font-medium">Domain Registration</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="ml-3 text-base font-medium">Web Hosting</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="ml-3 text-base font-medium">Business Email</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="ml-3 text-base font-medium">SEO Optimized Design</span>
              </li>
            </ul>
          </div>
          <div className="px-6 py-8 bg-gray-100">
            <button onClick={()=>navigate('/web-dev')} className="block w-full bg-yellow-500 text-white text-center font-medium py-3 rounded-md hover:bg-yellow-400">
              START NOW
            </button>
          </div>
        </div>

        {/* Package 2 */}
        <div 
        className="flex flex-col bg-white rounded-lg shadow-2xl transform transition duration-300 hover:scale-105"
           data-aos="fade-down-right"
        >
          <div className="px-6 py-8 bg-gradient-to-r from-blue-600 to-blue-800 text-center">
            <h3 className="text-2xl font-bold text-white">E-COMMERCE WEBSITE</h3>
          </div>
          <div className="px-6 py-8 sm:p-10">
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <span className="ml-3 text-base font-medium">10 Products Listed</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="ml-3 text-base font-medium">Domain Registration</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="ml-3 text-base font-medium">Web Hosting*</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="ml-3 text-base font-medium">Business Email</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="ml-3 text-base font-medium">SEO Optimized Design</span>
              </li>
            </ul>
          </div>
          <div className="px-6 py-8 bg-gray-100">
            <button onClick={()=>navigate('/web-dev')} className="block w-full bg-blue-600 text-white text-center font-medium py-3 rounded-md hover:bg-blue-500">
              START NOW
            </button>
          </div>
        </div>
      </div>

      {/* Show More Section */}
      <div className="mt-8 text-center">
        {showMore ? (
          <div className="max-w-5xl mx-auto px-4 py-6 bg-gray-50 rounded-md shadow-lg">
            <h4 className="text-lg font-semibold text-gray-800">Why Choose Us?</h4>
            <p className="mt-3 text-gray-600">
              We offer tailored solutions to meet your business needs. Our team
              ensures top-notch quality, fast delivery, and dedicated support to
              help you succeed online. Let us turn your ideas into reality!
            </p>
            <button
              onClick={() => setShowMore(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400"
            >
              Show Less
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Show More
          </button>
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-center text-sm text-gray-400">
        *Monthly maintenance fee required to host your website and keep it up to
        date.
      </div>
    </div>
  )
}

export default Package