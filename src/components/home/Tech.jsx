import React from "react";
import android from '../../assets/techs/android.png';
import html from '../../assets/techs/html.png';
import js from '../../assets/techs/js.png';
import mysql from '../../assets/techs/mysql.png';
import nodejs from '../../assets/techs/nodejs.png';
import php from '../../assets/techs/php.png';
import react from '../../assets/techs/react.png';
import ps from '../../assets/techs/ps.png';
import wordpress from '../../assets/techs/wordpress.png';
import css3 from '../../assets/techs/css3.png';


function Tech() {
  return (
    <div className="bg-zinc-900 max-w-7xl m-auto px-8 py-16 rounded-xl   shadow-2xl shadow-zinc-950">
      <h2 className="text-white text-center text-2xl font-bold mb-8">
        Technologies We Working With
      </h2>
      <div className="flex space-x-8 justify-center">
        <img
          src={wordpress}
          alt="WordPress"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />

        <img
          src={html}
          alt="html"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
        <img
          src={css3}
          alt="css3"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
        <img
          src={js}
          alt="js"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
        <img
          src={php}
          alt="PHP"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
        <img
          src={android}
          alt="Android"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
        <img
          src={react}
          alt="React"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
        <img
          src={ps}
          alt="Photoshop"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
        <img
          src={nodejs}
          alt="nodejs"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
        <img
          src={mysql}
          alt="CSS"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
        <img
          src="https://thinkwebhub.com/wp-content/uploads/2023/11/8-1.png"
          alt="PHP"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
        <img
          src="https://thinkwebhub.com/wp-content/uploads/2023/11/11-1.png"
          alt="Android"
          className="h-16  shadow-2xl shadow-red-600 hover:shadow-[5px_5px_15px_3px_rgba(0,0,0,0.4)] transition transform hover:scale-105"
        />
      </div>
    </div>
  );
}

export default Tech;
