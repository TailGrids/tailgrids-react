import React from "react";
import Brand from ".";
import BrandImage from "./BrandImage";

const Preview = () => {
  return (
    <>
      <div className="container flex h-[60vh] justify-center items-center">
        <Brand>
          <BrandImage
            href="#"
            alt="Brand Image"
            imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
          />
          <BrandImage
            href="#"
            alt="Brand Image"
            imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
          />
          <BrandImage
            href="#"
            alt="Brand Image"
            imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
          />
          <BrandImage
            href="#"
            alt="Brand Image"
            imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
          />
        </Brand>
      </div>
    </>
  );
};

export default Preview;
