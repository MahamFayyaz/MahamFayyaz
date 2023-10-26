import React from "react";
import Image from "next/image";
import camera from "/public/camera.jpg";
export default function Hero() {
  return (
    <div className="mt-16">
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <div className=" text-center">
          <h2 className="text-4xl text-left  text-[#000000]">
            MY NAME IS <br /> <span className="text-6xl font-bold">MAHAMFAYYAZ</span>
          </h2>
          <p className="mt-3 text-3xl text-center p-2 text-white bg-gray-950 opacity-50">
            I AM A MODERN WEB DEVELOPER
          </p>
          <div className="flex items-center mt-3  space-x-3">
          <button className="flex-1 border-gray-900 border-2 mt-3 rounded-full text-center text-black p-2 text-lg items-center w=full">Let us Talk</button>          
          <button className="flex-1 border-black border-2 mt-3 rounded-full text-center text-white p-2 text-lg bg-black  items-center">Want to discuss?</button>
        </div></div>

        {/* <div>
          <Image className="rounded-full" src={camera} alt="camera" />
        </div> */}
      </div>
    </div>
  );
}
