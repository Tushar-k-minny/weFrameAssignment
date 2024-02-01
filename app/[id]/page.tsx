"use client";

import { StoriesList } from "@/components/ui/StoriesList";
import { useParams } from "next/navigation";

import Profile from "@/components/NavBar/Profile";
import {
  BackIcon,
  LeftIcon,
  RightIcon,
  UserIcon,
  downIcon,
} from "@/components/ui/Icons";
import { useRouter } from "next/navigation";

const IdPage = () => {
  const path = useParams();
  const router = useRouter();

  const CurrentStory = StoriesList.find((el) => el.id + "" === path.id);

  if (CurrentStory) {
    const { title, topic, img } = CurrentStory;
    const style = {
      backgroundImage: `url(${img})`,
    };
    return (
      <section className="flex-grow p-4">
        <div className="flex flex-row justify-between  items-center w-full">
          <div className="flex flex-row justify-start items-center gap-2">
            <button onClick={() => router.back()} className="">
              {" "}
              {BackIcon}
            </button>
            <h1>Stories</h1>
          </div>
          <Profile />
        </div>
        <div className="flex flex-row items-center justify-between p-4">
          <div className="flex flex-row justify-start gap-1 items-center">
            <div>{UserIcon}</div>
            <div>John Doe</div>
            <div className="text-violet-400 ml-2 ">{"22 Sept 2023"}</div>
          </div>
          <div className="flex flex-row gap-3 justify-end items-center">
            <div className="flex flex-row items-center ">
              {" "}
              <div>Accesibility</div>
              <div className="scale-75 mt-[4px]">{downIcon}</div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="6"
                viewBox="0 0 21 7"
                fill="none">
                <circle cx="3.21239" cy="3.49996" r="2.915" fill="#9058FF" />
                <circle cx="10.4996" cy="3.49996" r="2.915" fill="#9058FF" />
                <circle cx="17.7876" cy="3.49996" r="2.915" fill="#9058FF" />
              </svg>
            </div>
          </div>
        </div>
        <div
          style={{ ...style }}
          className="bg-no-repeat bg-center bg-cover w-full h-full flex-grow flex justify-center items-center p-6  gap-3 ">
          <div className="bg-[#212121] text-white p-2 rounded-md">
            {LeftIcon}
          </div>
          <div
            style={{ ...style }}
            className="bg-no-repeat bg-center bg-cover max-w-[500px] h-[500px] flex flex-col justify-end items-start p-4 rounded-lg ">
            <h3 className="text-white font-bold text-[40px] leading-snug">
              {title}
            </h3>
            <div className="bg-[#F7EEFF] px-3 py-2 inline rounded-md font-semibold text-[#9058FF] ">
              {topic}{" "}
            </div>
          </div>
          <div className="bg-[#212121] text-white p-2 rounded-md">
            {RightIcon}
          </div>
        </div>
      </section>
    );
  }
  return <div>Error</div>;
};

export default IdPage;
