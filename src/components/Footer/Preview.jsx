import React from "react";
import Footer from "../Footer";
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
          <NavLink src="/sass">SaaS Development</NavLink>
          <NavLink src="/#">Our Products</NavLink>
          <NavLink src="/#">User Flow</NavLink>
          <NavLink src="/#">User Strategy</NavLink>
        </LinkGroup>
        <LinkGroup header="Company">
          <NavLink src="/sass">About TailGrids</NavLink>
          <NavLink src="/#">Contact & Support</NavLink>
          <NavLink src="/#">Success History</NavLink>
          <NavLink src="/#">Setting & Privacy</NavLink>
        </LinkGroup>
        <LinkGroup header="Quick Links">
          <NavLink src="/sass">Premium Support</NavLink>
          <NavLink src="/#">Our Services</NavLink>
          <NavLink src="/#">Know Our Team</NavLink>
          <NavLink src="/#">Download App</NavLink>
        </LinkGroup>
      </Footer>
    </>
  );
};

export default Preview;
