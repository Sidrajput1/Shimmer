
import { Binoculars, CodeXml, Goal, MonitorCheck, Rocket, Wrench } from "lucide-react";
import React from "react";
import AttBanner from "./AttBanner";

function WorkStep() {
  const services = [
    {
      title: "Define Goals and Requirements",
      description:
        "At Softech, we understand the purpose of the website, its target audience, and the specific goals it needs to achieve.",
      icon: <Goal className="w-12 h-12 mx-auto"/>,
    },
    {
      title: "Research and Planning",
      description:
        "Conduct market research to gather insights about the target audience, competitors, and industry trends.",
      icon: <Binoculars className="w-12 h-12 mx-auto" />,
    },
    {
      title: "User Experience (UX) Design",
      description:
        "Design a user-friendly experience with wireframes or prototypes.",
      icon: <CodeXml className="w-12 h-12 mx-auto" />,
    },
    {
      title: "Testing and Optimization",
      description:
        "Test rigorously to find and resolve issues like broken links, browser compatibility, or usability glitches.",
      icon: <Wrench className="w-12 h-12 mx-auto" />,
    },
    {
      title: "Launch and Deployment",
      description:
        "Host the website, set up domain and hosting securely, and keep an eye on performance.",
      icon: <Rocket className="w-12 h-12 mx-auto" />,
    },
    {
      title: "Maintenance and Updates",
      description:
        "Keep the website fresh with new content, enhance its features, and fix any tech glitches.",
      icon: <MonitorCheck className="w-12 h-12 mx-auto" />,
    },
  ];
  return (
    // <div className="bg-black h-auto p-16 border-2">
    //   <header>
    //     <h2 className="text-orange-500 mb-4">How We Start Works</h2>
    //   </header>
    //   <section className="text-white flex justify-around">
    //     <div className="flex flex-col p-6 justify-around items-center gap-8 border-2 w-[25%]">
    //       <header className="text-xl text-yellow-400">
    //         <p>Step 01</p>
    //       </header>
    //       <div className="text-xl text-gray-50 font-bold">
    //         <h3>Inspection</h3>
    //       </div>
    //       <div className="text-center">
    //         <p className="leading-normal text-sm spacing space-x-0">
    //           Proper inspection of a website with the best tools for the next
    //           stage.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="flex flex-col p-6 justify-around items-center gap-8 border-2 w-[25%]">
    //       <header className="text-xl text-green-400">
    //         <p>Step 02</p>
    //       </header>
    //       <div className="text-xl text-gray-50 font-bold">
    //         <h3>Deep Optimization</h3>
    //       </div>
    //       <div className="text-center">
    //         <p className="leading-normal text-sm spacing space-x-0">
    //           Proper inspection of a website with the best tools for the next
    //           stage.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col p-6 justify-around items-center gap-8 border-2 w-[25%]">
    //       <header className="text-xl text-red-600">
    //         <p>Step 03</p>
    //       </header>
    //       <div className="text-xl text-gray-50 font-bold">
    //         <h3>Analyze Implement</h3>
    //       </div>
    //       <div className="text-center">
    //         <p className="leading-normal text-sm spacing space-x-0">
    //           Proper inspection of a website with the best tools for the next
    //           stage.
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div className="bg-sky-950 h-auto min-h-[130vh] p-12 ">
      <header>
        <h2 className="text-orange-500 mb-8 text-3xl font-bold text-center">
          How We Start Works
        </h2>
      </header>
      <section className="text-white flex md:flex-row flex-col justify-around md:gap-0 gap-4 relative">
        {/* SVG connecting lines */}
        <svg
          className="absolute top-[75%] left-48  w-full "
          height="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 20,50 C 150,150 350,150 500,50"
            stroke="orange"
            fill="transparent"
            strokeWidth="3"
          />
          <path
            d="M 500,50 C 650,-50 850,50 980,50"
            stroke="green"
            fill="transparent"
            strokeWidth="3"
          />
        </svg>

        {/* Step 01 */}
        <div className="flex flex-col p-6 justify-around items-center gap-8 border-2 rounded-3xl md:w-[25%] w-full">
          <header className="text-xl text-yellow-400">
            <p>Step 01</p>
          </header>
          <div className="text-xl text-gray-50 font-bold">
            <h3>Inspection</h3>
          </div>
          <div className="text-center">
            <p className="leading-normal text-sm spacing space-x-0">
              Proper inspection of a website with the best tools for the next
              stage.
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="flex bg-green-500 flex-col p-6 justify-around items-center gap-8 border-2 md:w-[25%] w-full">
          <header className="text-xl text-green-800">
            <p>Step 02</p>
          </header>
          <div className="text-xl text-gray-50 font-bold">
            <h3>Deep Optimization</h3>
          </div>
          <div className="text-center">
            <p className="leading-normal text-sm spacing space-x-0">
              Proper inspection of a website with the best tools for the next
              stage.
            </p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="flex flex-col p-6 justify-around items-center gap-8 border-2 rounded-3xl md:w-[25%] w-full">
          <header className="text-xl text-red-600">
            <p>Step 03</p>
          </header>
          <div className="text-xl text-gray-50 font-bold">
            <h3>Analyze Implement</h3>
          </div>
          <div className="text-center">
            <p className="leading-normal text-sm spacing space-x-0">
              Proper inspection of a website with the best tools for the next
              stage.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-sky-950 md:mt-32 mt-16 text-white md:py-24 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-gray-400 mb-12">
            As an Android developer, we provide affordable app development
            services to our clients all over the world with the best services.
            Our services include small business app development services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 rounded-lg shadow-md hover:scale-105 transition transform duration-300"
              >
                <div className=" mb-4 text-orange-600">
                  <span className=""> {service.icon} </span>
                  
                </div>
                <h3 className="text-xl text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default WorkStep;
