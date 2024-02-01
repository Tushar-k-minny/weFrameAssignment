import { ReactNode } from "react";
import { ArticleItems } from "./ArticleCardItems";
import Image from "next/image";
import { UserIcon } from "./Icons";

export const SectionCard = ({
  title,
  total,
  icon,
}: {
  title: string;
  total: string;
  icon: ReactNode;
}) => {
  return (
    <div className=" rounded-xl  w-auto px-[40px] py-[20px] flex flex-row justify-start items-center gap-3 bg-white ">
      <div className="flex justify-center items-center bg-[#E8E9FF] rounded-full h-[60px] aspect-square">
        <div className="aspect-square">{icon}</div>
      </div>
      <div className="flex flex-col ">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className=" m-[-2] text-sm">{total} New Updates</p>
      </div>
    </div>
  );
};

export const ArticleCard = ({ it }: { it: ArticleItems }) => {
  const { title, topic, writer, isPublished, tags, image } = it;
  const date = "20 Sept 2023";

  return (
    <div className=" flex flex-col justify-between mx-4 max-w-[420px] px-6 ">
      <div className="rounded-[16px] py-4">
        <Image
          className="rounded-[10px]  "
          src={image}
          alt={topic + " image"}
        />
      </div>

      <div className="flex flex-row justify-between gap-6">
        <div className="flex flex-row gap-2 items-center ">
          <h3 className="text-sm text-[#9058FF]  font-extrabold">{topic}</h3>
          <div className="text-xs font-light">{date}</div>
        </div>
        <div className=" flex flex-row text-sm font-semibold justify-between items-center">
          <div className="p-2" >{UserIcon}</div>
          <h4>{writer}</h4>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="font-semibold text-[1rem]"> {title}</div>
        <button className="px-4 py-2 text-sm text-[#7950F2] bg-[#E3D5FF] rounded-md font-semibold">
          {isPublished ? "Published" : "Created"}
        </button>
      </div>
      <div className="text-xs font-light text-slate-400 pb-[8px] mt-[-6px]">
        <p>Lorem ipsum dolor sit amet consectetur </p>
      </div>
      <div>
        {tags.map((el, index) => {
          return (
            <div
              className={"text-sm font-semibold px-2 inline mx-2  "}
              key={index}>
              {el}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row  justify-start items-center">
        <button className="flex-1 py-3 rounded-[10px] bg-[#E8E9FF] mr-2 my-4 text-[#7750F1] font-semibold">
          View
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
  );
};
