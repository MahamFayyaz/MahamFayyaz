// components/TechExpertise.tsx
import React from 'react';
import Image from 'next/image';
import css from '/public/css.png'
import html from '/public/html.png'
import ts from '/public/ts1.png'
import react from '/public/react.png'
import tcss from '/public/tcss.png'
import js from '/public/j.png'
import nextjs from '/public/nj.png'
import python from '/public/py.png'
const technologies = [
  { name: 'HTML5', image: html },
  { name: 'CSS3', image: css }, 
  { name: 'JavaScript', image: js },
  { name: 'TypeScript', image: ts },
  { name: 'ReactJs', image: react }, 
  { name: 'NextJs 13', image: nextjs },
  { name: 'Tailwind CSS', image: tcss }, 
  { name: 'Python', image: python },
];

const Technologies: React.FC = () => {
  return (
    <section>
        <div className="mt-20 p-5">
          <h1 className="text-5xl font-bold  text-center">Skills.</h1>
          <p className="text-xl font-bold text-gray-800 text-center">
           My Technologies Expertise
          </p>
        </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {technologies.map((tech, index) => (
        <div key={index} className="p-4 bg-white  rounded-full shadow">
          <Image
            src={tech.image}
            alt={tech.name}
            width={50}
            height={50}
            className="w-20 h-20 mx-auto mb-2"
          />
          <div className="text-center">{tech.name}</div>
        </div>
      ))}
    </div></section>
  );
};

export default Technologies;
