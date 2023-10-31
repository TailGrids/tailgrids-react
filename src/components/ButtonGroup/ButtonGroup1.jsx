import React from "react";

const ButtonGroup1 = () => {
  return (
    <div className="inline-flex bg-white dark:bg-dark">
      <a
        href="#"
        className="inline-flex items-center justify-center border border-primary bg-primary px-[12px] py-[11px] text-center text-base font-medium text-white transition-all hover:border-primary hover:bg-primary hover:text-white sm:px-6"
      >
        About
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center border-y border-stroke px-[12px] py-[11px] text-center text-base font-medium text-dark transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white sm:px-6 sm:text-base"
      >
        Profile
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center border border-stroke px-[12px] py-[11px] text-center text-base font-medium text-dark transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white sm:px-6 sm:text-base"
      >
        Services
      </a>
    </div>
  );
};

export default ButtonGroup1;
