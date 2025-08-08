import React from "react";

const HomeCard = ({ name, imageUrl, link }) => {
  return (
    <div className="div h-[8em] w-[15em] bg-sky-100 m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
      <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

      <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
        <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
          {/* <a href={link}>More Info</a> */}
        </span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>

      <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
        {name}
      </h1>
    </div>
  );
};

export default HomeCard;
