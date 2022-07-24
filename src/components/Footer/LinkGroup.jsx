import React from "react";

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="w-full mb-10">
          <h4 className="text-lg font-semibold mb-9 text-dark"> {header} </h4>
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
};

export default LinkGroup;
