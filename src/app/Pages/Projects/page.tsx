// components/TechExpertise.tsx
import Link from 'next/link';
import Image from 'next/image';
import o from '/public/Opheliaa.png'
import d from '/public/Dineee.png' 
const technologies = [
  {
    name: 'Ophelia',
    image: o,
    link: 'https://ophelia-delta.vercel.app/',
  },
  {
    name: 'Dine Market Place',
    image: d,
    link: '/https://hackathon-six-rouge.vercel.app/sign-in?redirect_url=https%3A%2F%2Fhackathon-six-rouge.vercel.app%2F',
  },
  
];

const Work = () => {
  return (
    <section>
    <div className=" p-5">
    <h1 className="text-5xl font-bold  text-center">Projects.</h1>
    <p className="text-xl font-bold text-gray-800 text-center">
     My Recent Working
    </p>
  </div>
    <div className="grid grid-cols-2 gap-4">
      {technologies.map((tech) => (
        <Link key={tech.name} href={tech.link} legacyBehavior>
          <a>
            <Image src={tech.image} alt={tech.name} className="rounded-lg shadow-md" />
            <p className="text-center mt-2 text-xl bg-black text-white">{tech.name}</p>
          </a>
        </Link>
      ))}
    </div></section>
  );
};

export default Work;
