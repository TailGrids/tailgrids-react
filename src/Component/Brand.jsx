import React from "react";

import ayroui from "../assets/ayroui.svg";
import graygrids from "../assets/graygrids.svg";
import lineicons from "../assets/lineicons.svg";
import uideck from "../assets/uideck.svg";

const Brand = () => {
  return (
    <>
      {/* ====== Brands Section Start */}
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <a
                  href="/#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img src={ayroui} alt="" className="h-10 w-full" />
                </a>
                <a
                  href="/#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img src={graygrids} alt="" className="h-10 w-full" />
                </a>
                <a
                  href="/#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img src={lineicons} alt="" className="h-10 w-full" />
                </a>
                <a
                  href="/#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img src={uideck} alt="" className="h-10 w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;
