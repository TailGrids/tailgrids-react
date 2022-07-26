import React from "react";
import Hero from "../Hero";
import Navbar from "../Navbar";
import ListItem from "../Navbar/ListItem";
import Image from "../Brand/Image";
import Brand from "../Brand";

const Preview = () => {
  return (
    <>
      <header className="flex items-center w-full bg-white">
        <div className="container">
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

          <Hero
            title="Kickstart Startup Website with TailGrids"
            description="With TailGrids, business and students thrive together. Business can perfectly match their staffing to changing demand throughout the dayed."
            buttonText="Get Started"
            Btn2Text=" Dowenload App"
            imghref="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
          >
            <Brand>
              <div className="flex">
                <Image
                  href="#"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                />

                <Image
                  href="#"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                />

                <Image
                  href="#"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                />
              </div>
            </Brand>
          </Hero>
        </div>
      </header>
    </>
  );
};

export default Preview;
