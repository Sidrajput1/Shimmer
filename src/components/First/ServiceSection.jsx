import React from 'react'
import stech7 from '../../assets/images/stech7.jpg';
import stech8 from '../../assets/images/stech8.jpg';
import stech9 from '../../assets/images/stech9.jpg';
import s10 from '../../assets/images/s10.jpg';
import s11 from '../../assets/images/s11.jpg';

function ServiceSection() {
  return (
    <main>
    <div className="bg-gradient-to-r from-gray-900 via-red-700 to-black text-white py-12 md:px-24 px-6">
        <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">WE OFFER BUSINESS SOLUTIONS THAT ENSURE YOUR SUCCESS</h2>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center  md:space-x-6 space-x-0 md:space-y-0 space-y-2">
            <div 
            className="bg-white text-teal-900 p-6 rounded shadow-md text-center md:w-1/5 w-full transform hover:scale-105 transition"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <div className="mb-4">
                    <img  src={stech7}  alt="Payment Gateway" className="mx-auto" />
                </div>
                <h3 className="font-bold ">Payment Gateway</h3>
            </div>
            <div 
            className="bg-white text-teal-900 p-6 rounded  shadow-md text-center transform hover:scale-105 transition  md:w-1/5 w-full"
            data-aos="fade-up"
            data-aos-duration="2000"
            >
                <div className="mb-4">
                    <img  src={stech8} alt="Dedicated Support" className="mx-auto" />
                </div>
                <h3 className="font-bold">Dedicated Support</h3>
            </div>
            <div className="bg-white text-teal-900 p-6 rounded shadow-md text-center transform hover:scale-105 transition md:w-1/5 w-full"
                data-aos="fade-up"
            data-aos-duration="1500"
            >
                <div className="mb-4">
                    <img  src={stech9} alt="Website Maintenance" className="mx-auto" />
                </div>
                <h3 className="font-bold">Website Maintenance</h3>
            </div>
            <div 
            className="bg-white text-teal-900 p-6 rounded shadow-md text-center transform hover:scale-105 transition md:w-1/5 w-full"
                data-aos="fade-up"
            data-aos-duration="1000"
            >
                <div className="mb-4">
                    <img   src={s10} alt="Website Maintenance" className="mx-auto" />
                </div>
                <h3 className="font-bold">SEO Optimized</h3>
            </div>
            <div className="bg-white text-teal-900 p-4 rounded shadow-md text-center transform hover:scale-105 transition md:w-1/5 w-full"
                data-aos="fade-up"
            data-aos-duration="500"
            >
                <div className="mb-4">
                    <img  src={s11} alt="Terms of Service Agreements" className="mx-auto" />
                </div>
                <h3 className="font-bold">Terms of Service Agreements</h3>
            </div>
        </div>
        <div className="text-center mt-12">
            <a href='/home'><button  className="bg-[#FEE715] text-teal-900 py-2 px-4 rounded hover:bg-teal-800">
                START YOUR WEBSITE
            </button></a>
        </div>
    </div>
</main>
  )
}

export default ServiceSection