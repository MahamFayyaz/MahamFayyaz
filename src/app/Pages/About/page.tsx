import React from "react";
import Image from "next/image";
import Card from "@/app/Sections/Card";
import code from "/public/code.png";
export default function About() {
  return (
    <section>
      <div className="mt-10 p-5">
        <div>
          <h1 className="text-5xl font-bold  text-center">About Me.</h1>
          <p className="text-xl font-bold text-gray-800 text-center">
            Here is my Introduction OverView
          </p>
        </div>
        <div className="flex items-center mt-9">
          <div className="flex-1 space-y-3">
            <h1 className="text-5xl font-bold   text-gray-800">Hola!</h1>

            <p className="text-left text-2xl">
              I am Maham, a developer with interest and expertise in developing
              Modern Websites by using latest art of the Web Technology. Let us
              collaborate together and bring ideas to life!
            </p>
            <button className=" border-gray-900 border-2 mt-3 rounded-full text-center bg-gray-800 text-white p-3 text-md items-center ">
              Let us Talk
            </button>
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <div className="bg-black flex-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-12 items-center ">
        <Card
          code="Web Developer"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D"
        />
        <Card
          code="GraphicDesigner"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D"
        />
        <Card
          code="NextJS Developer"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D"
        />
      </div>
    </section>
  );
}
