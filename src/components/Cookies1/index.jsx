import React from "react";

const Cookies = ({
  children,
  bgColor = "#f4f7ff",
  borderColor = "#e7e7e7",
}) => {
  return (
    <>
      <div className="container">
        <div
          className={`flex flex-wrap items-center justify-between rounded-lg border border-[${borderColor}] bg-[${bgColor}] py-8 px-6 xs:px-10 md:px-8 lg:px-10`}
        >
          <div className="w-full md:w-7/12 lg:w-2/3">
            <div className="mb-6 md:mb-0">
              <h4 className="mb-1 text-xl font-bold text-black xs:text-2xl md:text-xl lg:text-2xl">
                We use cookies
              </h4>
              <p className="text-base font-medium text-body-color">
                Please, accept these sweeties to continue enjoying our site!
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 lg:w-1/3">
            <div className="flex items-center space-x-3 md:justify-end">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookies;
