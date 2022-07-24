import React from "react";

const NavLink = ({ children, src }) => {
  return (
    <div>
      <li>
        <a
          href={src}
          className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
        >
          {children}
        </a>
      </li>
    </div>
  );
};

export default NavLink;
