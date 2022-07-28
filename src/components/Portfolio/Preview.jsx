import React, { useState } from "react";
import Portfolio from "../Portfolio";
import Project from "./Project";
import ProtfolioHeader from "./ProtfolioHeader";

const Preview = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (catagory) => {
    setShowCard(catagory);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container">
          <ProtfolioHeader
            subtitle="Our Portfolio"
            title=" Our Recent Projects"
            description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          />
          <Portfolio handleProject={handleProject} showCard={showCard}>
            <Project
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              catagory="Branding"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></Project>
            <Project
              ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
              catagory="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></Project>
            <Project
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              catagory="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></Project>
            <Project
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              catagory="Development"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></Project>
            <Project
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              catagory="Design"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></Project>
            <Project
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              catagory="Marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></Project>
          </Portfolio>
        </div>
      </section>
    </>
  );
};

export default Preview;
