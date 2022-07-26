import React from "react";

const Image = ({ href, imgSrc }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt="" className="w-full h-10" />
      </a>
    </>
  );
};

export default Image;
