import React from "react";

function Ceo() {
  return (
    <div className="bg-gradient-to-br from-black  to-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Founder Image */}
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-teal-400 to-blue-600 rounded-full overflow-hidden shadow-lg mx-auto">
            {/* Replace with the actual image */}
            <img src="" alt="Founder" className="w-full h-full object-cover" />
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-800 rounded-full blur-xl opacity-75"></div>
          <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-tl from-gray-100 to-orange-800 rounded-full blur-lg opacity-50"></div>
        </div>

        {/* Founder Details */}
        <div className="flex flex-col justify-center items-start text-center md:text-left space-y-4">
          <h2 className="text-4xl font-bold">
            Meet Our <span className="text-orange-700">Founder</span>
          </h2>
          <p className="text-lg leading-relaxed">
            John Doe, the visionary behind our company, has over 20 years of
            experience in technology innovation. Passionate about creating
            transformative digital solutions, he has spearheaded countless
            projects that have reshaped the IT landscape globally.
          </p>
          <p className="text-lg leading-relaxed">
            Under his leadership, we have grown into a trusted partner for
            businesses seeking cutting-edge IT solutions. His commitment to
            excellence and innovation continues to inspire our team every day.
          </p>
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-teal-400 hover:to-blue-400 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ceo;
