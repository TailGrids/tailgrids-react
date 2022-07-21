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
        <ListItem>Home</ListItem>
        <ListItem>Payment</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Blog</ListItem>
      </Navbar>
    </>
  );
};

export default Preview;
