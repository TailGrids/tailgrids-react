import React from "react";
import Brand from "../Brand";
import Navbar from "../Navbar";
import NavbarListItem from "../Navbar/NavbarListItem";
import Hero from "./index";

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
            <NavbarListItem href="/#">Home</NavbarListItem>
            <NavbarListItem href="/#">Payment</NavbarListItem>
            <NavbarListItem href="/#">About</NavbarListItem>
            <NavbarListItem href="/#">Blog</NavbarListItem>
          </Navbar>

          <Hero
            title="Kickstart Startup Website with TailGrids"
            description="With TailGrids, business and students thrive together. Business can perfectly match their staffing to changing demand throughout the dayed."
            buttonText="Get Started"
            Btn2Text=" Download App"
            imgSrc="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
          >
            <Brand>
              <div className="flex flex-wrap space-y-5">
                <BrandImage
                  href="#"
                  alt="alt text"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                />

                <BrandImage
                  href="#"
                  alt="alt text"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                />

                <BrandImage
                  href="#"
                  alt="alt text"
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
