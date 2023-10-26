import React from "react";
import Image from "next/image";
import pic from "/public/code.png";
interface CardProps {
  code: string;
  des: string;
}

const Card: React.FC<CardProps> = ({ code, des }) => {
  return (
    <div className="bg-white p-2 mt-10 text-center rounded-md shadow-md ">
      <Image src={pic} alt="</>" width={150} className="flex justify-center items-center " />
      <div className="text-xl font-semibold mb-2">{code}</div>
      <div className="text-gray-600">{des}</div>
    </div>
  );
};

export default Card;
