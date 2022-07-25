import React from "react";
import About from "../About1";

const Preview = () => {
  return (
    <>
      <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
        <div className="container">
          <About
            image1="https://i.ibb.co/gFb3ns6/image-1.jpg"
            image2=" https://i.ibb.co/rfHFq15/image-2.jpgs"
            image3="https://i.ibb.co/9y7nYCD/image-3.jpgs"
            subtitle="Why Choose Us"
            title="Make your customers happy by giving services."
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less."
            button="Get Started"
          />
        </div>
      </section>
    </>
  );
};

export default Preview;
