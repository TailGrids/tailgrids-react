import React from "react";
import Navbar from ".";
import NavbarListItem from "./NavbarListItem";

const Preview = () => {
  return (
    <>
      <Navbar
        button1="Login"
        button2="Sign up"
        logoSrc="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg"
      >
        <NavbarListItem href="/#">Home</NavbarListItem>
        <NavbarListItem href="/#">Payment</NavbarListItem>
        <NavbarListItem href="/#">About</NavbarListItem>
        <NavbarListItem href="/#">Blog</NavbarListItem>
      </Navbar>
    </>
  );
};

export default Preview;
