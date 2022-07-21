import React from "react";

const Services = ({ children, subtitle, title, discription }) => {
  return (
    <>
      <>
        {/* ====== Services Section Start */}
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                  <span className="block mb-2 text-lg font-semibold text-primary">
                    {subtitle}
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    {title}
                  </h2>
                  <p className="text-base text-body-color">{discription}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">{children}</div>
          </div>
        </section>
        {/* ====== Services Section End */}
      </>
    </>
  );
};

export default Services;
