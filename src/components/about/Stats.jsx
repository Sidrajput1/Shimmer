import React from 'react'

function Stats() {
  return (
    <div className="flex items-center justify-center  bg-gradient-to-r from-black via-gray-800 to-black">
     
    <div className="text-center p-8">
      
      <h2 className="text-4xl font-bold text-white mb-8">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
        <div className="bg-gray-800 text-white p-6 rounded-lg hover:shadow-xl hover:scale-105 hover:shadow-white transition-transform ease-in-out duration-300">
          
          <h3 className="text-6xl font-semibold">1+</h3>
          <p className="mt-2 text-lg">Years In Business</p>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-white transition-transform ease-in-out duration-300">
        
          <h3 className="text-6xl font-semibold">35+</h3>
          <p className="mt-2 text-lg">Happy Clients</p>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-white transition-transform ease-in-out duration-300">
     
          <h3 className="text-6xl font-semibold">20+</h3>
          <p className="mt-2 text-lg">Projects Completed</p>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-white transition-transform ease-in-out duration-300">
          
          <h3 className="text-6xl font-semibold">30k+</h3>
          <p className="mt-2 text-lg">Lines of Code</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Stats