import React from "react";

const Brand = ({ children }) => {
  return (
    <>
      {/* ====== Brands Section Start */}
      <section className="bg-white ">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;
