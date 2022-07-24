import React from "react";

const Pricing = ({ children, subTitle, title, description }) => {
  return (
    <div>
      <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  {subTitle}
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  {title}
                </h2>
                <p className="text-base text-body-color">{description}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">{children}</div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
