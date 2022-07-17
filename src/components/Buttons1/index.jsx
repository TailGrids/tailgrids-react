import React from "react";

const Button = ({
  title = "Get Started",
  color,
  href,
  outline,
  rounded,
  pill,
}) => {
  return (
    <>
      <a
        href={href && href}
        className={`hover:bg-${outline && color} hover:text-${
          outline && "white"
        } ${rounded && "rounded-md"} ${pill && "rounded-full"} bg-${
          color && color && outline ? "transparent" : color
        } border border-${outline ? color : "transparent"} text-${
          outline ? color : "white"
        } inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center cursor-pointer hover:bg-opacity-90 lg:px-8 xl:px-10`}
      >
        {title}
      </a>
    </>
  );
};

export default Button;
