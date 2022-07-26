import React from "react";
import Brand from ".";
import Image from "./Image";

const Preview = () => {
  return (
    <>
      <div className="container flex h-[60vh] justify-center items-center">
        <Brand>
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
          <Image
            href="#"
            imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
          />
        </Brand>
      </div>
    </>
  );
};

export default Preview;
