import React from "react";
import Footer from ".";
import LinkGroup from "./LinkGroup";
import NavLink from "./NavLink";

const Preview = () => {
  return (
    <>
      <Footer
        logo="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg"
        description="Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam."
        phone="+012 (345) 678 99"
        copyright="© 2025 TailGrids"
        title="Follow us On"
        facebookLink="/#"
        twitterLink="/#"
        youtubeLink="/#"
        linkedinLink="/#"
      >
        {/* hoverColor="primary" available */}
        <LinkGroup header="Resources">
          <NavLink LinkSrc="/sass">SaaS Development</NavLink>
          <NavLink LinkSrc="/#">Our Products</NavLink>
          <NavLink LinkSrc="/#">User Flow</NavLink>
          <NavLink LinkSrc="/#">User Strategy</NavLink>
        </LinkGroup>
        <LinkGroup header="Company">
          <NavLink LinkSrc="/sass">About TailGrids</NavLink>
          <NavLink LinkSrc="/#">Contact & Support</NavLink>
          <NavLink LinkSrc="/#">Success History</NavLink>
          <NavLink LinkSrc="/#">Setting & Privacy</NavLink>
        </LinkGroup>
        <LinkGroup header="Quick Links">
          <NavLink LinkSrc="/sass">Premium Support</NavLink>
          <NavLink LinkSrc="/#">Our Services</NavLink>
          <NavLink LinkSrc="/#">Know Our Team</NavLink>
          <NavLink LinkSrc="/#">Download App</NavLink>
        </LinkGroup>
      </Footer>
    </>
  );
};

export default Preview;
