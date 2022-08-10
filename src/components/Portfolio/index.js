import React from "react";

const Portfolio = ({ children }) => {
  return (
    <>
      <div className="flex flex-wrap -mx-4">{children}</div>
    </>
  );
};

export default Portfolio;
