import React from "react";
import Pricing from "./index";
import PricingCard from "./PricingCard";
import PricingList from "./PricingList";
import PricingTitle from "./PricingTitle";

const Preview = () => {
  return (
    <>
      <Pricing>
        <div className="container">
          <PricingTitle
            subTitle="Pricing Tablie"
            title="Our Pricing Plan"
            description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          />
        </div>
        <PricingCard
          type="Personal"
          price="$59"
          subscription="year"
          description="Perfect for using in a personal website or a client project."
          button="Choose Personal"
        >
          <PricingList>1 User</PricingList>
          <PricingList>All UI components</PricingList>
          <PricingList>Lifetime access</PricingList>
          <PricingList>Free updates</PricingList>
          <PricingList>Use on 1 (one) project</PricingList>
          <PricingList>3 Months support</PricingList>
        </PricingCard>
        <PricingCard
          type="Business"
          price="$199"
          subscription="year"
          description="Perfect for using in a personal website or a client project."
          button="Choose Business"
          active
        >
          <PricingList>5 User</PricingList>
          <PricingList>All UI components</PricingList>
          <PricingList>Lifetime access</PricingList>
          <PricingList>Free updates</PricingList>
          <PricingList>Use on31 (Three) project</PricingList>
          <PricingList>4 Months support</PricingList>
        </PricingCard>
        <PricingCard
          type="Professional"
          price="$256"
          subscription="year"
          description="Perfect for using in a personal website or a client project."
          button="Choose Professional"
        >
          <PricingList>Unlimited User</PricingList>
          <PricingList>All UI components</PricingList>
          <PricingList>Lifetime access</PricingList>
          <PricingList>Free updates</PricingList>
          <PricingList>Unlimited project</PricingList>
          <PricingList>12 Months support</PricingList>
        </PricingCard>
      </Pricing>
    </>
  );
};

export default Preview;
