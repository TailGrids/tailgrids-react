import React from "react";

const Breadcrumbs = ({ children, theme, round }) => {
  return (
    <>
      <div className="w-full ">
        <div
          className={`px-4 py-4 bg-${theme} border rounded-${round} border-${theme} shadow-card sm:px-6 md:px-8 md:py-5 `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
