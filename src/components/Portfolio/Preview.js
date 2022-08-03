import React, { useState } from "react";
import Portfolio from "./index";
import PortfolioCard from "./PortfolioCard";
import PortfolioHeader from "./PortfolioHeader";

const Preview = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container">
          <PortfolioHeader
            subtitle="Our Portfolio"
            title=" Our Recent Projects"
            description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          />
          <Portfolio handleProject={handleProject} showCard={showCard}>
            <PortfolioCard
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="Branding"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></PortfolioCard>
            <PortfolioCard
              ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></PortfolioCard>
            <PortfolioCard
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></PortfolioCard>
            <PortfolioCard
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="Development"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></PortfolioCard>
            <PortfolioCard
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="Design"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></PortfolioCard>
            <PortfolioCard
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="Marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            ></PortfolioCard>
          </Portfolio>
        </div>
      </section>
    </>
  );
};

export default Preview;
