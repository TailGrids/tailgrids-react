import React from "react";
import Pricing from ".";
import List from "./List";
import PricingCard from "./PricingCard";

const Preview = () => {
  return (
    <>
      <Pricing
        subTitle="Pricing Tablie"
        title="Our Pricing Plan"
        discription="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
      >
        <PricingCard
          type="Personal"
          price="$59"
          subscription="year"
          discription="Perfect for using in a personal website or a client project."
          button="Choose Personal"
        >
          <List>1 User</List>
          <List>All UI components</List>
          <List>Lifetime access</List>
          <List>Free updates</List>
          <List>Use on 1 (one) project</List>
          <List>3 Months support</List>
        </PricingCard>
        <PricingCard
          type="Business"
          price="$199"
          subscription="year"
          discription="Perfect for using in a personal website or a client project."
          button="Choose Business"
          active
        >
          <List>5 User</List>
          <List>All UI components</List>
          <List>Lifetime access</List>
          <List>Free updates</List>
          <List>Use on31 (Three) project</List>
          <List>4 Months support</List>
        </PricingCard>
        <PricingCard
          type="Professional"
          price="$256"
          subscription="year"
          discription="Perfect for using in a personal website or a client project."
          button="Choose Professional"
        >
          <List>Unlimited User</List>
          <List>All UI components</List>
          <List>Lifetime access</List>
          <List>Free updates</List>
          <List>Unlimited project</List>
          <List>12 Months support</List>
        </PricingCard>
      </Pricing>
    </>
  );
};

export default Preview;
