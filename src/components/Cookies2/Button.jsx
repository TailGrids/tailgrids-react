import React from "react";

const Button = ({ children, rounded = "rounded-md" }) => {
  return (
    <div>
      <button
        className={`inline-flex items-center justify-center ${rounded} bg-white py-[10px] px-8 text-center text-base font-semibold text-body-color shadow-card hover:bg-opacity-90 hover:text-primary`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
