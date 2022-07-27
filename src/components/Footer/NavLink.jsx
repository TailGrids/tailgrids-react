import React from "react";

const NavLink = ({ children, LinkSrc, hoverColor = "primary" }) => {
  return (
    <div>
      <li>
        <a
          href={LinkSrc}
          className={`inline-block mb-2 text-base leading-loose text-body-color hover:text-${hoverColor}`}
        >
          {children}
        </a>
      </li>
    </div>
  );
};

export default NavLink;
