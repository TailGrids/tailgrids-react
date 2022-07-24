import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");
  return (
    <>
      {/* <!-- ====== Portfolio Section Start --> */}
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Portfolio
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => setShowCard("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all" ? "activeClasses" : "inactiveClasses"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => setShowCard("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses"
                        : "inactiveClasses"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => setShowCard("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses"
                        : "inactiveClasses"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => setShowCard("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses"
                        : "inactiveClasses"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => setShowCard("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses"
                        : "inactiveClasses"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div
              className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
                showCard === "all" || showCard === "branding"
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="relative mb-12">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://i.ibb.co/64WfFPt/image-01.jpg"
                    alt="portfolio"
                    className="w-full"
                  />
                </div>
                <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9">
                  <span className="block mb-2 text-sm font-semibold text-primary">
                    Branding
                  </span>
                  <h3 className="mb-4 text-xl font-bold text-dark">
                    Branding Design
                  </h3>
                  <a
                    href="/#"
                    className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
                showCard === "all" || showCard === "marketing"
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="relative mb-12">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://i.ibb.co/vkt8C1P/image-02.jpg"
                    alt="portfolio"
                    className="w-full"
                  />
                </div>
                <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9">
                  <span className="block mb-2 text-sm font-semibold text-primary">
                    Marketing
                  </span>
                  <h3 className="mb-4 text-xl font-bold text-dark">
                    Best Marketing tips
                  </h3>
                  <a
                    href="/#"
                    className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
                showCard === "all" || showCard === "development"
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="relative mb-12">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://i.ibb.co/3FKqS1G/image-03.jpg"
                    alt="portfolio"
                    className="w-full"
                  />
                </div>
                <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9">
                  <span className="block mb-2 text-sm font-semibold text-primary">
                    Development
                  </span>
                  <h3 className="mb-4 text-xl font-bold text-dark">
                    Web Design Trend
                  </h3>
                  <a
                    href="/#"
                    className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
                showCard === "all" || showCard === "design" ? "block" : "hidden"
              }`}
            >
              <div className="relative mb-12">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://i.ibb.co/m6dq2fX/image-04.jpg"
                    alt="portfolio"
                    className="w-full"
                  />
                </div>
                <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9">
                  <span className="block mb-2 text-sm font-semibold text-primary">
                    Design
                  </span>
                  <h3 className="mb-4 text-xl font-bold text-dark">
                    Business Card Design
                  </h3>
                  <a
                    href="/#"
                    className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
                showCard === "all" || showCard === "marketing"
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="relative mb-12">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://i.ibb.co/mCPjBsH/image-05.jpg"
                    alt="portfolio"
                    className="w-full"
                  />
                </div>
                <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9">
                  <span className="block mb-2 text-sm font-semibold text-primary">
                    Marketing
                  </span>
                  <h3 className="mb-4 text-xl font-bold text-dark">
                    Digital marketing
                  </h3>
                  <a
                    href="/#"
                    className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
                showCard === "all" || showCard === "branding"
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="relative mb-12">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="
                    https://i.ibb.co/PT7ghRs/image-06.jpg"
                    alt="portfolio"
                    className="w-full"
                  />
                </div>
                <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9">
                  <span className="block mb-2 text-sm font-semibold text-primary">
                    Branding
                  </span>
                  <h3 className="mb-4 text-xl font-bold text-dark">
                    Creative Agency
                  </h3>
                  <a
                    href="/#"
                    className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Portfolio Section End -->   */}
    </>
  );
};

export default Portfolio;
