"use client";

import React from "react";
import { MenuItems } from "./MenuItems";
import Link from "next/link";

import { usePathname } from "next/navigation";

const SideBar = () => {
  const path = usePathname();

  return (
    <div className="h-[100vh] w-fit sticky top-0 left-0  px-[32px] bg-white">
      <div className="flex flex-col justify-start pt-[128px]">
        {MenuItems.map((e) => {
          return (
            <Link
              className={path === e.href ? " bg-[#7950F2] rounded-lg  " : ""}
              href={e.href}
              key={e.title}>
              <div
                className={`flex flex-row gap-[16px] py-[16px] px-[20px] font-semibold 
                ${
                  e.title == "Contact Support"
                    ? " mt-[16px] bg-[#E8E9FF] rounded-md "
                    : ""
                }`}>
                <div className={path === e.href ? "invert " : ""}>{e.icon}</div>
                <div className={path === e.href ? "text-white " : ""}>
                  {" "}
                  {e.title}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
