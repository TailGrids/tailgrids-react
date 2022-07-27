import React from "react";

const Pricing = ({ children }) => {
  return (
    <div>
      <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">{children}</div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
