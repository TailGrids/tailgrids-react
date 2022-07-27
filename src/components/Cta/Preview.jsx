import React from "react";
import Cta from ".";
import Button from "./Button";

const Preview = () => {
  return (
    <>
      <section class="py-20 lg:py-[120px]">
        <Cta
          bgColor="primary"
          subtitle="Find Your Next Dream App"
          title="Get started with our free trial"
          button1="go Pro Version"
          btnSrc1="#"
          button2="Start Free Trial"
          btnSrc2="#"
        >
          <Button btnColor="info"> Go to Pro </Button>
          <Button btnColor="white"> Start Free Trial </Button>
        </Cta>
      </section>
    </>
  );
};

export default Preview;
