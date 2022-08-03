import React from "react";

const Portfolio = ({ children, handleProject, showCard }) => {
  return (
    <>
      {/* <!-- ====== Portfolio Section Start --> */}

      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full px-4">
          <ul className="flex flex-wrap justify-center mb-12 space-x-1">
            <li className="mb-1">
              <button
                onClick={() => handleProject("all")}
                className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                  showCard === "all"
                    ? "activeClasses bg-primary text-white"
                    : "inactiveClasses"
                }`}
              >
                All Projects
              </button>
            </li>
            <li className="mb-1">
              <button
                onClick={() => handleProject("branding")}
                className={`inline-block  rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                  showCard === "branding"
                    ? "activeClasses bg-primary text-white"
                    : "inactiveClasses"
                }`}
              >
                Branding
              </button>
            </li>
            <li className="mb-1">
              <button
                onClick={() => handleProject("design")}
                className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                  showCard === "design"
                    ? "activeClasses bg-primary text-white"
                    : "inactiveClasses"
                }`}
              >
                Design
              </button>
            </li>
            <li className="mb-1">
              <button
                onClick={() => handleProject("marketing")}
                className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                  showCard === "marketing"
                    ? "activeClasses bg-primary text-white"
                    : "inactiveClasses"
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
                    ? "activeClasses bg-primary text-white"
                    : "inactiveClasses"
                }`}
              >
                Development
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">{children}</div>

      {/* <!-- ====== Portfolio Section End -->   */}
    </>
  );
};

export default Portfolio;
