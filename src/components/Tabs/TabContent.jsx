import React from "react";

const TabContent = ({ open, tabCatagory, details }) => {
  return (
    <div>
      <div
        className={`p-6 text-base leading-relaxed text-body-color ${
          open === tabCatagory ? "block" : "hidden"
        } `}
      >
        {details}
      </div>
    </div>
  );
};

export default TabContent;
