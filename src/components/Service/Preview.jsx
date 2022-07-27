import React from "react";
import Services from ".";
import ServiceCard from "./ServiceCard";
import svg from "./icons1.svg";
import svg2 from "./icons2.svg";
import svg3 from "./icons3.svg";
import svg4 from "./icons4.svg";

const Preview = () => {
  return (
    <div>
      <Services
        subtitle="Our Services"
        title="What We Offer"
        description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form"
      >
        <ServiceCard
          title="Refreshing Design"
          details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        >
          <img src={svg} alt="" />
        </ServiceCard>
        {/*  */}
        <ServiceCard
          title="Refreshing Design"
          details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        >
          <img src={svg2} alt="" />
        </ServiceCard>
        <ServiceCard
          title="Refreshing Design"
          details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        >
          <img src={svg3} alt="" />
        </ServiceCard>
        <ServiceCard
          title="Refreshing Design"
          details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        >
          <img src={svg4} alt="" />
        </ServiceCard>
        <ServiceCard
          title="Refreshing Design"
          details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        >
          <img src={svg4} alt="" />
        </ServiceCard>
        <ServiceCard
          title="Refreshing Design"
          details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        >
          <img src={svg3} alt="" />
        </ServiceCard>
      </Services>
    </div>
  );
};

export default Preview;
