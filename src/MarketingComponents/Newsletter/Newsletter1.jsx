import React from "react";

const Newsletter1 = () => {
  return (
    <section className="relative z-10 bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-xl bg-[#F0F4FF] dark:bg-dark-2">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative z-10 px-8 py-10 sm:p-14 lg:pb-24">
                <h2 className="mb-6 text-3xl font-semibold text-white sm:text-4xl md:text-[40px]/[48px]">
                  Start Building <br />
                  for Free
                </h2>
                <p className="max-w-[300px] text-base text-white">
                  And because your company is unique, you will need an
                  extensible identity solution.
                </p>
                <div>
                  <span className="absolute bottom-0 left-0 z-[-1]">
                    <svg
                      width="585"
                      height="400"
                      viewBox="0 0 585 400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M585 -6H0V400C168.393 400 570.581 310.231 585 -6Z"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0 z-[-2]">
                    <svg
                      width="392"
                      height="189"
                      viewBox="0 0 392 189"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M391.516 189H0V28C301.088 -64.8 386.464 96.6667 391.516 189Z"
                        fill="#13C296"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full self-center px-4 lg:w-1/2">
              <div className="relative z-10 px-6 py-9 sm:p-10">
                <h2 className="mb-6 text-3xl font-semibold text-dark dark:text-white sm:text-4xl">
                  Subscribe Now
                </h2>
                <form className="flex flex-wrap pb-1">
                  <input
                    type="email"
                    className="mb-3 mr-3 h-[50px] w-full max-w-[220px] rounded-md border border-stroke bg-white px-5 text-sm text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 md:max-w-[315px] lg:max-w-[250px] xl:max-w-[315px]"
                    placeholder="Your work mail"
                  />
                  <button className="mb-3 h-[50px] rounded-md border border-transparent bg-primary px-7 text-base font-medium text-white transition hover:bg-opacity-90">
                    Submit
                  </button>
                </form>
                <p className="text-sm text-body-color dark:text-dark-6">
                  You will receive every news and pro tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter1;
