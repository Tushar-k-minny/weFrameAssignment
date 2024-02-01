import React from "react";

const Search = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-2 bg-[#f0f0f9] px-3 py-2 rounded-full w-[300px] max-h-20">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
            stroke="#CECECE"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <input className="bg-[inherit]" placeholder="Search anything"></input>
    </div>
  );
};

export default Search;
