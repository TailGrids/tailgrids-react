import React from "react";
import Cta from ".";

const Preview = () => {
  return (
    <>
      <section class="py-20 lg:py-[120px]">
        <Cta
          bgColor="primary"
          subtitle="Find Your Next Dream App"
          title="Get started with our free trial"
          primaryButtonLink="#"
          secondaryButtonLink="#"
          primaryButton="Get Pro Version"
          secondaryButton="Start Free Trial"
        />
      </section>
    </>
  );
};

export default Preview;
