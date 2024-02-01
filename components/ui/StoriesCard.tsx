import Link from 'next/link'
import { StorYType } from './StoriesList';



export const StoriesCard = ({ it }:{it:StorYType}) => {
  const { title, topic, isPublished, views, img, id} = it;
  const date = "20 Sept 2023";
  const style = {
    backgroundImage: `url( ${img} )`,
  };

  return (
    <div
      style={{ ...style }}
      className="flex flex-col justify-between bg-center p-4 rounded-xl items-start h-[400px] max-w-[300px]">
      <div className="w-full flex flex-row justify-end items-center gap-2">
        <div className="flex flex-row gap-1 justify-center text-xs items-center bg-slate-200 py-1 px-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none">
            <path
              d="M7.99999 3C4.66666 3 1.81999 5.07333 0.666656 8C1.81999 10.9267 4.66666 13 7.99999 13C11.3333 13 14.18 10.9267 15.3333 8C14.18 5.07333 11.3333 3 7.99999 3ZM7.99999 11.3333C6.15999 11.3333 4.66666 9.84 4.66666 8C4.66666 6.16 6.15999 4.66667 7.99999 4.66667C9.83999 4.66667 11.3333 6.16 11.3333 8C11.3333 9.84 9.83999 11.3333 7.99999 11.3333ZM7.99999 6C6.89332 6 5.99999 6.89333 5.99999 8C5.99999 9.10667 6.89332 10 7.99999 10C9.10666 10 9.99999 9.10667 9.99999 8C9.99999 6.89333 9.10666 6 7.99999 6Z"
              fill="#9058FF"
            />
          </svg>
          {views}
        </div>
        <div className=" bg-slate-200 py-1 px-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none">
            <path
              d="M4.58667 12.6002C4.31334 12.6002 4.08667 12.3735 4.08667 12.1002V10.7202C4.08667 10.4469 4.31334 10.2202 4.58667 10.2202C4.86 10.2202 5.08667 10.4469 5.08667 10.7202V12.1002C5.08667 12.3802 4.86 12.6002 4.58667 12.6002Z"
              fill="#9058FF"
            />
            <path
              d="M8 12.6002C7.72667 12.6002 7.5 12.3735 7.5 12.1002V9.3335C7.5 9.06016 7.72667 8.8335 8 8.8335C8.27333 8.8335 8.5 9.06016 8.5 9.3335V12.1002C8.5 12.3802 8.27333 12.6002 8 12.6002Z"
              fill="#9058FF"
            />
            <path
              d="M11.4133 12.5998C11.14 12.5998 10.9133 12.3731 10.9133 12.0998V7.95312C10.9133 7.67979 11.14 7.45312 11.4133 7.45312C11.6867 7.45312 11.9133 7.67979 11.9133 7.95312V12.0998C11.9133 12.3798 11.6933 12.5998 11.4133 12.5998Z"
              fill="#9058FF"
            />
            <path
              d="M4.58667 8.78645C4.36 8.78645 4.16 8.63312 4.1 8.40645C4.03334 8.13978 4.19334 7.86645 4.46667 7.79978C6.92 7.18645 9.08 5.84645 10.7267 3.93312L11.0333 3.57312C11.2133 3.36645 11.5267 3.33978 11.74 3.51978C11.9467 3.69978 11.9733 4.01312 11.7933 4.22645L11.4867 4.58645C9.70667 6.66645 7.36 8.11312 4.70667 8.77312C4.66667 8.78645 4.62667 8.78645 4.58667 8.78645Z"
              fill="#9058FF"
            />
            <path
              d="M11.4133 6.34657C11.14 6.34657 10.9133 6.1199 10.9133 5.84657V4.3999H9.46001C9.18667 4.3999 8.96001 4.17324 8.96001 3.8999C8.96001 3.62657 9.18667 3.3999 9.46001 3.3999H11.4133C11.6867 3.3999 11.9133 3.62657 11.9133 3.8999V5.85324C11.9133 6.12657 11.6933 6.34657 11.4133 6.34657Z"
              fill="#9058FF"
            />
            <path
              d="M10 15.1668H6.00001C2.38001 15.1668 0.833344 13.6202 0.833344 10.0002V6.00016C0.833344 2.38016 2.38001 0.833496 6.00001 0.833496H10C13.62 0.833496 15.1667 2.38016 15.1667 6.00016V10.0002C15.1667 13.6202 13.62 15.1668 10 15.1668ZM6.00001 1.8335C2.92668 1.8335 1.83334 2.92683 1.83334 6.00016V10.0002C1.83334 13.0735 2.92668 14.1668 6.00001 14.1668H10C13.0733 14.1668 14.1667 13.0735 14.1667 10.0002V6.00016C14.1667 2.92683 13.0733 1.8335 10 1.8335H6.00001Z"
              fill="#9058FF"
            />
          </svg>
        </div>
      </div>

      {/*

       Bottom
       
       */}

      <div className={`flex flex-col justify-start  `}>
        <div className="font-semibold text-[1rem] text-white"> {title}</div>

        <div className="flex flex-row justify-between items-center gap-6">
          <div className="flex flex-row gap-2 justify-between items-center ">
            <h3 className="text-sm text-white  font-extrabold">{topic}</h3>
            <div className="text-xs text-slate-50 font-light">{date}</div>
          </div>
          <button className="px-4 py-2 text-sm text-[#7950F2] bg-[#E3D5FF] rounded-md font-semibold">
            {isPublished ? "Published" : "Created"}
          </button>
        </div>

        <div className="flex flex-row  justify-start items-center mt-4">
          <Link href={"/" + id} className="flex-grow mr-2">
            <button className="w-full py-3 rounded-[10px] bg-[#E8E9FF]   text-[#7750F1] font-semibold">
              View
            </button>
          </Link>
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
};
