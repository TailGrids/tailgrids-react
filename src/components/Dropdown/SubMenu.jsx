import React from "react";

const SubMenu = ({ menu }) => {
  return (
    <div>
      <a
        href="/#"
        className="block px-5 py-2 text-base font-semibold text-body-color hover:bg-primary/5 hover:text-primary"
      >
        {menu}
      </a>
    </div>
  );
};

export default SubMenu;
