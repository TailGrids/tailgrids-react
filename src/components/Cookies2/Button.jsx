import React from "react";

const Button = ({
  children,
  color = "white",
  textColor = "body-color",
  textHoverColor = "primary",
  rounded = "rounded-md",
}) => {
  return (
    <div>
      <button
        className={`inline-flex items-center justify-center ${rounded} bg-${color} py-[10px] px-8 text-center text-base font-semibold text-${textColor} shadow-card hover:bg-opacity-90 hover:text-${textHoverColor}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
