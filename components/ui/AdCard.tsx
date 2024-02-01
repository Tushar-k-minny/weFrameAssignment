import React from "react";
import Image from "next/image";

function AdCard({ it }) {
  const { img, title, subText } = it;
  return (
    <div className="flex flex-row items-center justify-start gap-3 rounded-2xl bg-white lg:min-w-[600px]">
      <Image className="rounded-l-xl  max-w-full h-full" src={img} alt={title + "image"} />
      <div className="mr-6 mt-2 flex flex-col justify-start gap-2  max-w-[400px]">
        <div className="text-lg font-semibold ">{title}</div>
        <p>{subText}</p>
        <div className="flex flex-row  justify-start items-center">
          <button className="flex-1 py-3  rounded-[10px] bg-[#E8E9FF] mr-2 my-4 text-[#7750F1] font-bold">
            Visit
          </button>
          <button className="flex-0 flex justify-center items-center bg-[#FAFAFA]px-5 py-3 text-sm ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="7"
              viewBox="0 0 21 7"
              fill="none">
              <circle cx="3.21239" cy="3.49996" r="2.915" fill="#9058FF" />
              <circle cx="10.4996" cy="3.49996" r="2.915" fill="#9058FF" />
              <circle cx="17.7876" cy="3.49996" r="2.915" fill="#9058FF" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdCard;
