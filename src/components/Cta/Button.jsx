import React from "react";

const Button = ({ children, href, btnColor }) => {
  return (
    <>
      <a
        href={href}
        className={`my-1 inline-block rounded bg-${btnColor}
         py-4 px-6 text-base font-medium text-${
           btnColor === "white" ? "black" : "white"
         } transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9`}
      >
        {children}
      </a>
    </>
  );
};

export default Button;
