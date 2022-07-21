import React from "react";
import Services from ".";
import ServiceCard from "./ServiceCard";
import icon from "./icons1.svg";
import icon2 from "./icons2.svg";
import icon3 from "./icons3.svg";
import icon4 from "./icons4.svg";

const Preview = () => {
  return (
    <div>
      <Services
        subtitle="Our Services"
        title="What We Offer"
        discription="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form"
      >
        <ServiceCard
          danger
          title="Refreshing Design"
          details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        >
          <img src={icon2} alt="" />
        </ServiceCard>
        {/*  */}
        <ServiceCard
          secondary
          title="Refreshing Design"
          details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        >
          <img src={icon2} alt="" />
        </ServiceCard>
        <ServiceCard
          title="Refreshing Design"
          details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        >
          <img src={icon3} alt="" />
        </ServiceCard>
        <ServiceCard
          info
          title="Refreshing Design"
          details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        >
          <img src={icon4} alt="" />
        </ServiceCard>
      </Services>
    </div>
  );
};

export default Preview;
