import React from "react";

const PageTitle4 = () => {
  return (
    <section className="bg-white py-[70px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="flex items-center border-b border-stroke pb-6 dark:border-dark-3">
          <div className="mr-[18px] h-[44px] w-full max-w-[44px] overflow-hidden rounded-xl">
            <img
              src="https://cdn.tailgrids.com/2.0/image/core-components/images/page-title/image.png"
              alt="page title"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <h4 className="mb-1 text-sm font-semibold text-dark dark:text-white">
              Hey Devid Wisedom 👋
            </h4>
            <p className="text-sm font-medium text-body-color dark:text-dark-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle4;
