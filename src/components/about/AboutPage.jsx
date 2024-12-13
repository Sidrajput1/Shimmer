import React from 'react'
import slogo from '../../assets/images/slogo.webp';
import Stats from './Stats';
import Vm from './Vm';
import Ceo from './Ceo';
import Cta from './Cta';

function AboutPage() {
  return (
    <div>
      <div className="flex items-center justify-center h-[40vh] bg-gradient-to-r from-black via-red-700 to-black">
        
        <div className="text-center">
          
          <h1 className="text-5xl font-bold text-white">
            
            About <span className="text-red-600">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            
            Unlock the potential of your concept, enterprise, aspiration, and
            bring it to
          </p>
        </div>
      </div>
      <main className="p-4  w-full h-auto  bg-black ">
        <header className="ml-28">
          <h2 className="text-white text-5xl font-bold">
            {" "}
            <span className="text-red-700 ">Why</span> Shimmer Softech?
          </h2>
        </header>
        <div className=" max-w-[9xl] mt-8  flex justify-center gap-6  ">
          <div className="w-[60%]">
            <p className="text-white ml-16 max-w-2xl text-md text-left leading-relaxed  line-clamp-9">
              Welcome to Shimmer Softech, At Shimmer Softech, we turn your
              digital dreams into reality. Our expert team specializes in
              creating stunning websites, robust web applications, and
              innovative mobile apps tailored to your unique needs. Whether
              you are a startup looking to establish an online presence or an
              established business aiming to enhance your digital footprint, we
              have the skills and experience to help you shine.
            </p>
            <p className="text-white mt-2 ml-16 max-w-2xl text-md text-left leading-relaxed line-clamp-9">
              Our commitment to excellence ensures that every project we
              undertake is completed to the highest standards, combining
              cutting-edge technology with intuitive design. We believe in
              delivering solutions that are not only visually appealing but also
              user-friendly and efficient, ensuring a seamless experience for
              your users.
            </p>
            <p className="text-white mt-2 ml-16 max-w-2xl text-md text-left leading-relaxed line-clamp-9">
              We are a community of tech-savvy dreamers and doers, united in our
              passion for helping small business owners succeed. Our team of
              experienced developers is dedicated to providing top-notch
              services and creating websites that meet the unique needs of our
              clients
            </p>
            <p className="text-white mt-2 ml-16 max-w-2xl text-md text-left leading-relaxed line-clamp-9">
              Partner with Shimmer Softech, and let us illuminate your path to
              digital success. Your vision, our expertise—together, we can
              create something extraordinary. Let us get started on your next big
              idea!
            </p>
          </div>
          {/* <div className="w-[30%] mt-8 ">
            <div className="text-white p-4 shadow-2xl shadow-white ">
              <h2 className="text-3xl text-center mx-auto">Our Brand Identities</h2>
              <ul className=" list-none list-inside mt-4">
                <li className="text-3xl">Shimmer utility pvt ltd</li>
                <li>Shimmer Softech</li>
                <li>School Umpire</li>
              </ul>
            </div>
          </div> */}
          <div className="w-[30%] mt-8">
            <div className="text-white p-4 shadow-2xl shadow-red-800 bg-gray-900 rounded-lg">
              <h2 className="text-3xl text-center leading-tight font-bold mx-auto">
                Our Brand Identities
              </h2>
              <ul className="list-none list-inside mt-4 space-y-4">
                <li className="flex items-center text-2xl font-bold italic">
                  <img
                    src={slogo}
                    alt="Icon"
                    className="w-20 h-12 mr-2"
                    height='50'
                    width='50'
                  />
                  Shimmer Utility Pvt. Ltd
                </li>
                <li className="flex items-center text-2xl font-bold bg-white text-gray-900">
                  <img
                    src={slogo}
                    alt="Icon"
                    height='50'
                    width='50'
                    className="w-20 h-12 mr-2"
                  />
                  Shimmer Softech
                </li>
                <li className="flex items-center text-2xl font-bold">
                  <img
                    src=""
                    alt="Icon"
                    className="w-20 h-12 mr-2"
                    height='50'
                    width='50'
                  />
                  School Umpire
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[90%] m-auto text-center mt-16">
            <Stats/>
        </div>
        <div>
          <Vm/>
        </div>
        <div className="py-4">
          {/* <Testimonial/> */}
          <Ceo/>
        </div>
        <Cta/>
      </main>
    </div>
  )
}

export default AboutPage