import React from "react";

const Button = ({ children, color = "primary", textColor = "white" }) => {
  return (
    <div>
      <button
        className={`inline-flex items-center justify-center rounded-md bg-${color} py-[10px] px-8 text-center text-base font-semibold text-${textColor} hover:bg-opacity-90`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
