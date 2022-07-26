import React from "react";

const FormElements = ({ children }) => {
  return (
    <>
      {/* ====== Form Elements Section Start */}
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">{children}</div>
        </div>
      </section>
      {/* ====== Form Elements Section End */}
    </>
  );
};

export default FormElements;
