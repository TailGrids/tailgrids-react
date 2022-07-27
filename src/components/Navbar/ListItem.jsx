import React from "react";

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};

export default ListItem;
