import React from "react";

export default function ButtonGroup1() {
  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px] dark:bg-dark">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex items-center overflow-hidden rounded-lg border border-stroke dark:border-dark-3">
            <button className="border-r border-stroke px-4 py-3 text-base font-medium text-dark last-of-type:border-r-0 hover:bg-gray-2 hover:text-primary dark:border-dark-3 dark:text-white">
              Button Text
            </button>
            <button className="border-r border-stroke px-4 py-3 text-base font-medium text-dark last-of-type:border-r-0 hover:bg-gray-2 hover:text-primary dark:border-dark-3 dark:text-white">
              Button Text
            </button>
            <button className="border-r border-stroke px-4 py-3 text-base font-medium text-dark last-of-type:border-r-0 hover:bg-gray-2 hover:text-primary dark:border-dark-3 dark:text-white">
              Button Text
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
