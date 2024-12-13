import React from 'react'
import s1 from '../../assets/images/s1.png';
import s2 from '../../assets/images/s2.png';
import s3 from '../../assets/images/s3.png';
import s4 from '../../assets/images/s4.png';
import s5 from '../../assets/images/s5.png';
import s6 from '../../assets/images/s6.png';
import s7 from '../../assets/images/s7.png';
import s8 from '../../assets/images/s8.png';

const images = [
    s1,
    s3,
    s5,
    s6,
    s7,
    s8,
    s4,
    s2,
  ];

  const titles = [
    'School Umpire',
    'A Ngo',
    'Grocery',
    'Vivekanand Girukul',
    'Prodigy Classes',
    'Sandeep Memorial School',
    'Gyan Vidya International School',
    'St Marx Academy'
  ];

  const links = [

  ]

function ProjectPage() {
  return (
    <div className="p-8 bg-gray-900 min-h-screen">
    <h2 className="text-center text-5xl font-bold mb-8 mt-16 underline text-orange-600">
      All Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="border-2 border-gray-300 rounded-lg hover:scale-105 transition-all ease-in-out shadow-lg overflow-hidden"
        >
          <img
            src={image}
            alt={`Image ${index}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl text-white font-semibold mb-2">{titles[index]}</h3>
            <a
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline"
            >
              Visit Site
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ProjectPage