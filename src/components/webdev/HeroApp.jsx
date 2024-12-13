import React from "react";

function HeroApp() {
  return (
    <div className="">
      <main className="relative  bg-image bg-cover  h-[95vh]">
        <div className="absolute  bg-gradient-to-r from-gray-900 to-black h-full w-full opacity-90  text-white">
          <div className="absolute flex justify-center gap-12  top-[25%]">
            <section className=" w-1/2 p-4 ">
              <h2 className="header1">App </h2>
              <h3 className="text-[100px] header2 leading-tight   text-white">
                Development
              </h3>
              <p className="mt-5 text-lg max-w-full">
                We specialize in creating robust, scalable, and innovative
                mobile applications tailored to your business needs. Whether you
                need an iOS app, Android app, or cross-platform solution, our
                team has the expertise to deliver top-notch services that drive
                results.
              </p>
            </section>

            <section className=" bg-black p-8 z-20 h-[60vh] rounded-lg  w-full shadow-lg max-w-[450px]">
              <h4 className="text-3xl text-center text-orange-600 font-semibold mb-4">Drop Us a Message</h4>
              <form className="space-y-4">
                <div>
                  <label for="name" className="block mb-1 text-sm">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label for="email" className="block mb-1 text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label for="service" className="block mb-1 text-sm">
                    Select Service
                  </label>
                  <select
                    id="service"
                    className="w-full p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="app">App Development</option>
                    <option value="web">Web Development</option>
                    <option value="domain">Domain & Hosting</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-bold"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroApp;
