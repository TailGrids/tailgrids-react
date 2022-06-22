import React from "react";

const Cookies = () => {
  return (
    <>
      <>
        {/* ====== Cookies Section Start */}
        <section className="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between rounded-lg border border-[#e7e7e7] bg-[#f4f7ff] py-8 px-6 xs:px-10 md:px-8 lg:px-10">
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
                  <button className="inline-flex items-center justify-center rounded-md bg-primary py-[10px] px-8 text-center text-base font-semibold text-white hover:bg-opacity-90">
                    Accept
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md bg-white py-[10px] px-8 text-center text-base font-semibold text-body-color shadow-card hover:bg-primary hover:text-white">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Cookies Section End */}
      </>
    </>
  );
};

export default Cookies;
