import React from "react";
import app from "../../assets/images/app.webp";
import web from "../../assets/images/web.avif";
import hosting from "../../assets/images/hosting.avif";

function ShortContent() {
  return (
    <div className="flex justify-around gap-5 px-8">
      <div
        className="p-8 max-w-sm bg-black   border border-orange-600 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href="#"
        data-aos="fade-up"
     data-aos-duration="3000"
      >
        <img
          src={app}
          alt="content1"
          width="350"
          height="250"
          className="shadow rounded-lg overflow-hidden border w-96 h-64"
        />
        <div className="mt-8  ">
          <h4 className="font-bold text-white text-xl">App Development</h4>
          <p className="mt-2 text-gray-600">
            Designed and launched a user-friendly mobile application.
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Start Creating
            </button>
          </div>
        </div>
      </div>
      <div
        className="p-8 bg-black max-w-sm border border-orange-600 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href="#"
        data-aos="fade-up"
     data-aos-duration="2000"
      >
        <img
          src={web}
          alt="content2"
          width="200"
          height="300"
          className="shadow rounded-lg overflow-hidden border w-96 h-64"
        />
        <div className="mt-8">
          <h4 className="font-bold text-xl text-white">Web Development</h4>
          <p className="mt-2 text-gray-600">
            Developing a user-friendly interface to engage more possible
            customers.
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Start Creating
            </button>
          </div>
        </div>
      </div>
      <div
        className="p-8 bg-black max-w-sm border border-orange-600 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href="#"
        data-aos="fade-up"
     data-aos-duration="1500"
      >
        <img
          src={hosting}
          alt="content3"
          className="shadow rounded-lg overflow-hidden border w-96"
          height="300"
          width="200"
        />
        <div className="mt-8">
          <h4 className="font-bold text-xl text-white">Domain & Hosting</h4>
          <p className="mt-2 text-gray-600">
            Looking for reliable domain and hosting services to host your
            website at the top?
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Start Creating
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortContent;
