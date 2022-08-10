import React from "react";
import Footer from ".";
import FooterLinkGroup from "./FooterLinkGroup";
import FooterNavLink from "./FooterNavLink";

const Preview = () => {
  return (
    <>
      <Footer
        logo="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg"
        description="Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam."
        phone="+012 (345) 678 99"
        copyright="© 2025 TailGrids"
        facebookLink="/#"
        twitterLink="/#"
        youtubeLink="/#"
        linkedinLink="/#"
      >
        {/* hoverColor="primary" available */}
        <FooterLinkGroup header="Resources">
          <FooterNavLink href="/sass">SaaS Development</FooterNavLink>
          <FooterNavLink href="/#">Our Products</FooterNavLink>
          <FooterNavLink href="/#">User Flow</FooterNavLink>
          <FooterNavLink href="/#">User Strategy</FooterNavLink>
        </FooterLinkGroup>
        <FooterLinkGroup header="Company">
          <FooterNavLink href="/sass">About TailGrids</FooterNavLink>
          <FooterNavLink href="/#">Contact & Support</FooterNavLink>
          <FooterNavLink href="/#">Success History</FooterNavLink>
          <FooterNavLink href="/#">Setting & Privacy</FooterNavLink>
        </FooterLinkGroup>
        <FooterLinkGroup header="Quick Links">
          <FooterNavLink href="/sass">Premium Support</FooterNavLink>
          <FooterNavLink href="/#">Our Services</FooterNavLink>
          <FooterNavLink href="/#">Know Our Team</FooterNavLink>
          <FooterNavLink href="/#">Download App</FooterNavLink>
        </FooterLinkGroup>
      </Footer>
    </>
  );
};

export default Preview;
