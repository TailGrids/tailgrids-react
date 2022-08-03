import React from "react";

const Breadcrumb = ({ children, theme, round, center }) => {
  return (
    <>
      <div className="w-full ">
        <div
          className={`px-4 py-4 bg-${theme} border rounded-${round} border-${theme} shadow-card sm:px-6 md:px-8 md:py-5 `}
        >
          <div className={`flex ${center && "justify-center"}`}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
