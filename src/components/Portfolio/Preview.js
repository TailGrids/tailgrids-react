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
          <Portfolio>
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4">
                <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                  <li className="mb-1">
                    <button
                      onClick={() => handleProject("all")}
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === "all" ? "bg-primary text-white" : ""
                      }`}
                    >
                      All Projects
                    </button>
                  </li>
                  <li className="mb-1">
                    <button
                      onClick={() => handleProject("branding")}
                      className={`inline-block  rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === "branding" ? "bg-primary text-white" : ""
                      }`}
                    >
                      Branding
                    </button>
                  </li>
                  <li className="mb-1">
                    <button
                      onClick={() => handleProject("design")}
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === "design" ? "bg-primary text-white" : ""
                      }`}
                    >
                      Design
                    </button>
                  </li>
                  <li className="mb-1">
                    <button
                      onClick={() => handleProject("marketing")}
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === "marketing" ? "bg-primary text-white" : ""
                      }`}
                    >
                      Marketing
                    </button>
                  </li>
                  <li className="mb-1">
                    <button
                      onClick={() => handleProject("development")}
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === "development"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                    >
                      Development
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <PortfolioCard
              ImageSrc="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="Branding"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageSrc="https://i.ibb.co/PT7ghRs/image-06.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageSrc="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageSrc="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="Development"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageSrc="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="Design"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageSrc="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="Marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </Portfolio>
        </div>
      </section>
    </>
  );
};

export default Preview;
