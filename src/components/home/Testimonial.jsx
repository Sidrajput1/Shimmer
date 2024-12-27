import React from 'react'

function Testimonial() {

  const testimonials = [
    {
      id: 1,
      name: "St Marx School",
      designation: "Managing Director",
      feedback:
        "The team did an excellent job developing our website. The user interface is intuitive, and the performance is outstanding. Highly recommend their services!",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Sanchit Taneja",
      designation: "Founder & Ceo, Sri Sai Trader",
      feedback:
        "Absolutely delighted with the design and functionality! Our website stands out thanks to their expertise in React and Tailwind CSS.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Vikram Iyer",
      designation: "CEO, GreenEarth Enterprises",
      feedback:
        "Seamless execution and fantastic support! They delivered exactly what we envisioned, and our customers love the new design.",
      image: "https://via.placeholder.com/100",
    },
  ];
  
  return (
    // <div>
    //      <div className="bg-neutral-950  ">
    //     <section className="max-w-5xl mx-auto w-full px-10 py-2 ">
    //       <div className="flex items-center justify-center flex-col gap-y-2 py-5">
    //         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">
    //           Here is what our
    //           <span className="text-orange-700">customers</span> have to say
    //         </h2>
    //         <p className="text-lg font-medium text-slate-400/70">
    //           Discover how our service can benefit you
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
    //         <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
    //           <div className="flex flex-col gap-y-3.5">
    //             <p className="font-bold text-xl text-white">
    //               Efficient customer support
    //             </p>
    //             <p className="font-medium text-white">
    //               The customer support team at our service is incredibly
    //               responsive and helpful. They went above and beyond to assist
    //               me with my issue.
    //             </p>
    //           </div>
    //           <div className="flex flex-col">
    //             <img
    //               src="https://randomuser.me/api/portraits/women/43.jpg"
    //               alt="Emily Smith"
    //               className="h-10 w-10"
    //               height='100'
    //               width='100'
    //             />
    //             <p className="pt-2 text-sm font-semibold text-white">Emily Smith</p>
    //             <p className="text-sm font-medium text-slate-100/70">
    //               Marketing Manager at ABC Company
    //             </p>
    //           </div>
    //         </div>
    //         <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
    //           <div className="flex flex-col gap-y-3.5">
    //             <p className="font-bold text-xl text-white">
    //               Excellent product features
    //             </p>
    //             <p className="font-medium text-white">
    //               The features offered by our service are outstanding. They have
    //               greatly improved our workflow and efficiency.
    //             </p>
    //           </div>
    //           <div className="flex flex-col">
    //             <img
    //               src="https://randomuser.me/api/portraits/men/34.jpg"
    //               alt="Michael Johnson"
    //               className="h-10 w-10"
    //                height='100'
    //               width='100'
    //             />
    //             <p className="pt-2 text-sm font-semibold text-white">
    //               Michael Johnson
    //             </p>
    //             <p className="text-sm font-medium text-slate-100/70">
    //               CEO at XYZ Corporation
    //             </p>
    //           </div>
    //         </div>
    //         <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
    //           <div className="flex flex-col gap-y-3.5">
    //             <p className="font-bold text-xl text-white">
    //               Seamless integration process
    //             </p>
    //             <p className="font-medium text-white">
    //               Integrating our systems with our service was smooth and
    //               hassle-free. The support team guided us through every step of
    //               the process.
    //             </p>
    //           </div>
    //           <div className="flex flex-col">
    //             <img
    //               src="https://randomuser.me/api/portraits/women/71.jpg"
    //               alt="Sarah Brown"
    //               className="h-10 w-10"
    //                height='100'
    //               width='100'
    //             />
    //             <p className="pt-2 text-sm font-semibold text-white">Sarah Brown</p>
    //             <p className="text-sm font-medium text-slate-100/70">
    //               CTO at XYZ Corporation
    //             </p>
    //           </div>
    //         </div>
    //         <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
    //           <div className="flex flex-col gap-y-3.5">
    //             <p className="font-bold text-xl text-white">
    //               Reliable service uptime
    //             </p>
    //             <p className="font-medium text-white">
    //               Our service has consistently maintained high uptime, ensuring
    //               that our operations run smoothly without any disruptions.
    //             </p>
    //           </div>
    //           <div className="flex flex-col">
    //             <img
    //               src="https://randomuser.me/api/portraits/men/71.jpg"
    //               alt="James White"
    //               className="h-10 w-10"
    //                height='100'
    //               width='100'
    //             />
    //             <p className="pt-2 text-sm font-semibold text-white">James White</p>
    //             <p className="text-sm font-medium text-slate-100/70">
    //               COO at XYZ Corporation
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <section className="bg-gradient-to-r from-black  to-black py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-white text-center mb-8">
        Hear From Our Happy Clients
      </h2>
      <p className="text-center text-indigo-200 max-w-2xl mx-auto mb-12">
        We take pride in delivering excellent solutions that transform businesses and leave a lasting impression.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl w-full max-w-sm"
          >
            <div className="bg-gradient-to-r from-orange-600 to-indigo-800 p-4 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-white"
              />
              <h3 className="text-lg font-semibold text-white mt-4">
                {testimonial.name}
              </h3>
              <p className="text-sm text-indigo-200">{testimonial.designation}</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonial