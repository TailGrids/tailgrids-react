import React from "react";

const FooterNavLink = ({ children, href, hoverColor = "primary" }) => {
  return (
    <div>
      <li>
        <a
          href={href}
          className={`inline-block mb-2 text-base leading-loose text-body-color hover:text-${hoverColor}`}
        >
          {children}
        </a>
      </li>
    </div>
  );
};

export default FooterNavLink;
