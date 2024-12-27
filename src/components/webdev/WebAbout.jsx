import React from "react";

function WebAbout() {
  return (
    <div className="bg-sky-950 text-white md:py-16 py-6 px-6 lg:px-20 ">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <section className="space-y-4 relative">
        <div className="relative md:top-36 top-28">
            <img
              src="https://html.kodesolution.com/2024/mizox-php/images/resource/about-6.jpg" // Replace with your first image URL
              alt="Team Meeting"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative bottom-24 left-44">
            <img
              src="https://html.kodesolution.com/2024/mizox-php/images/resource/about-7.jpg" // Replace with your second image URL
              alt="Team Discussion"
              className="rounded-lg shadow-lg transform translate-x-6 -translate-y-6"
            />
            <div className="absolute -bottom-4 left-6 bg-purple-600 w-16 h-16 transform rotate-45 z-0"></div>
          </div>

        </section>
        <div className="space-y-6">
          <h4 className="text-indigo-400 text-sm uppercase font-semibold tracking-wide">
            Welcome to Agency <span className="inline-block ml-2 w-3 h-3 rounded-full bg-indigo-400"></span>
          </h4>
          <h2 className="text-4xl font-extrabold leading-tight">
            Are you Ready to Grow your Businesses
          </h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor
            incididunt ut labore et simply free text dolore magna aliqua lonn andhn.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <p className="text-lg font-semibold">Project Planning</p>
              </div>
              <p className="text-gray-400 mt-2">
                Lorem ipsum is not tex dolor sit amet, consectetur notted.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <p className="text-lg font-semibold">Building Quality</p>
              </div>
              <p className="text-gray-400 mt-2">
                Lorem ipsum is not tex dolor sit amet, consectetur notted.
              </p>
            </div>
          </div>
          {/* <div className="pt-4 border-t border-gray-700">
            <p className="text-5xl font-extrabold text-indigo-400">868800</p>
            <p className="text-gray-400">Professional and Skilled Contractors</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default WebAbout;
