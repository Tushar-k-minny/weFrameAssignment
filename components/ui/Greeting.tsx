import React from "react";

const Greeting = ({ name = "admin" }) => {
  return (
    <div className="px-10 py-8">
      <h1 className="text-2xl font-semibold text-[#212121]">Hello {name},</h1>
      <p className="font-light text-sm ">This is what we got you for today.</p>
    </div>
  );
};

export default Greeting;
