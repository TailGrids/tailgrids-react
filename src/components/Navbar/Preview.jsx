import React from "react";
import Navbar from "../Navbar";
import ListItem from "./ListItem";

const Preview = () => {
  return (
    <>
      <Navbar
        button1="Login"
        button2="Sign up"
        logoSrc="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg"
      >
        <ListItem NavLink="/#">Home</ListItem>
        <ListItem NavLink="/#">Payment</ListItem>
        <ListItem NavLink="/#">About</ListItem>
        <ListItem NavLink="/#">Blog</ListItem>
      </Navbar>
    </>
  );
};

export default Preview;
