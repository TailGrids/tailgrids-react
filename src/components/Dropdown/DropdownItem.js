import React from "react";

const DropdownItem = ({ label, href }) => {
  return (
    <a
      href={href}
      className="block px-5 py-2 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
    >
      {label}
    </a>
  );
};

export default DropdownItem;
