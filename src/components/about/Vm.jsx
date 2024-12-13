import React from 'react'
import mv from '../../assets/images/mv.png';

function Vm() {
  return (
    <div className="bg-black text-white py-16 px-8 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
        {/* Mission Section */}
        <div className="flex flex-col items-center justify-center text-center md:text-center">
          <h2 className="text-5xl font-bold mb-4">Our <span className='text-orange-800 brightness-150'>Mission</span></h2>
          <p className="text-lg leading-relaxed">
            To revolutionize the digital landscape by delivering cutting-edge technology solutions that empower businesses to thrive in the modern world.
          </p>
        </div>

        {/* Central Image */}
        <div className="flex justify-center">
          <div className="w-80 h-80  rounded-full shadow-inner  shadow-orange-400 overflow-hidden">
            {/* Replace with your image */}
            <img
              src={mv}
              alt="Mission Vision Graphic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-center text-center md:text-center">
          <h2 className="text-5xl font-bold mb-4">Our <span className='text-orange-800 brightness-150'>Vision</span></h2>
          <p className="text-lg leading-relaxed">
            To be the world s most innovative and trusted IT partner, creating transformative digital experiences that connect and inspire.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Vm