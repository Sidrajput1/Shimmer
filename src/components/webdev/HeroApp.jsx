import React, { useState } from "react";
import WorkStep from "./WorkStep";
import AttBanner from "./AttBanner";
import ReachUs from "./ReachUs";
import { Helmet } from "react-helmet";

function HeroApp() {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    mobile_no:'',
    service :('web_development','app_development','domain&hosting','ui&uxdesign'),
    business_type:'',
    message:''
  });

  const handleChange = (e) => {
    const {name,value} = e.target;

    setFormData({
      ...formData,
      [name]:value
    });
  };

  const handleSubmit = async(e) => {
      e.preventDefault();

      try {
        const response = await fetch('https://shimmersoftech.com//api/sendingmail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
  
        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending the message.');
    }
  }
  return (
    <div className="">
        <Helmet>
        <title>App development - Shimmer Softech</title>
        <meta
          name="description"
          content="Welcome to Shimmer Softech, At Shimmer Softech, we turn your digital dreams into reality. Our expert team specializes in creating stunning websites, robust web applications, and innovative mobile apps tailored to your unique needs"
        />
        <meta
          name="keywords"
          content="Website,App,Development,Domain,Ui,Ux,Design,Software"
        />
        <meta property="og:title" content="About Us - Shimmer Softech " />
        <meta
          property="og:description"
          content="Discover more about us and mission behind Our Company."
        />
        <meta property="og:type" content="shimmersoftech" />
        <meta property="og:url" content="https://shimmersoftech.com/about" />

        <meta property="og:url" content="" />
        <meta property="og:url" content="" />
      </Helmet>
      <main className="relative  bg-image bg-cover  md:h-[95vh] h-[160vh]">
        <div className="absolute  bg-gradient-to-r from-gray-900 to-black h-full w-full opacity-90  text-white">
          <div className="absolute flex md:flex-row flex-col justify-center gap-12  md:top-[23%] top-[10%]">
            <section className=" md:w-1/2 w-full p-4 ">
              <h2 className="header1 md:text-[160px] text-[80px]">App </h2>
              <h3 className="md:text-[100px] text-[50px] header2 leading-tight   text-white">
                Development
              </h3>
              <p className="mt-5 md:pr-0 pr-16 text-gray-400 md:text-lg text-md  max-w-full">
                We specialize in creating robust, scalable, and innovative
                mobile applications tailored to your business needs. Whether you
                need an iOS app, Android app, or cross-platform solution, our
                team has the expertise to deliver top-notch services that drive
                results.
              </p>
            </section>

           
            <div className="md:h-[65vh] h-[85vh] z-10 mt-[-10px]   flex items-center md:p-2 pr-24  max-w-[550px] w-[450px] justify-center bg-black">
              <div className=" p-8  rounded-lg w-full max-w-md shadow-2xl shadow-orange-600 transition-shadow duration-200">
                <h2 className="text-2xl text-center font-extrabold text-gray-100 mb-6">
                  Drop Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-3" >
                  <div className="mb-4">
                    {" "}
                    {/* <label className="block text-gray-400 mb-2" htmlFor="name">
                      Name*
                    </label>{" "} */}
                    <input
                      className="w-full p-2 border-orange-600 rounded bg-transparent text-white"
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />{" "}
                  </div>{" "}
                  <div className="mb-4">
                    {" "}
                   
                    <div className="flex space-x-2">
                      {" "}
                      <select className="p-2 rounded-l bg-transparent border-orange-600 text-white">
                        {" "}
                        <option value="+91">🇮🇳 +91</option>{" "}
                        {/* Add more country codes as needed */}{" "}
                      </select>{" "}
                      <input
                        className="w-full p-2 rounded-r bg-transparent border-orange-600 text-white"
                        placeholder="Phone No*"
                        type="tel"
                        name="mobile_no"
                        id="mobile_no"
                        value={formData.mobile_no}
                        onChange={handleChange}
                        required
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="mb-4">
                    {" "}
                   
                    <input
                      className="w-full p-2 rounded bg-transparent border-orange-600 text-white"
                      placeholder="Email*"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      id="email"
                      required
                    />{" "}
                  </div>{" "}
                  <div className="mb-4">
                    {" "}
                   
                    <select
                      className="w-full p-2  rounded bg-transparent border-orange-600 text-white"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      {" "}
                      <option className="app_development">App Development</option>{" "}
                       <option value="web_development">Web Development</option>
                       <option value="domain&hosting">Domain & Hosting</option>
                       <option value="ui&uxdesign">UI & UX Design</option>
                    </select>{" "}
                  </div>{" "}
                  <div className="mb-4">
                    {" "}
                   
                    <input
                      className="w-full p-2 rounded bg-transparent border-orange-600 text-white"
                      placeholder="Which Business do you have?*"
                      type="text"
                      id="business_type"
                      name="business_type"
                      onChange={handleChange}
                      value={formData.business_type}
                      required
                    />{" "}
                  </div>
                  <div className="mb-4 ">
                    <textarea
                      
                      className="w-full p-2  rounded bg-transparent border-orange-600 border-2  text-white"
                      placeholder="type message.."
                      rows={4}
                      cols={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      >
                      </textarea>  
                    
                  </div>
                  <div>
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg font-bold"
                  >
                    Submit
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <WorkStep/>
      <div>
       <AttBanner/>
      </div>
      <ReachUs/>
    </div>
  );
}

export default HeroApp;
