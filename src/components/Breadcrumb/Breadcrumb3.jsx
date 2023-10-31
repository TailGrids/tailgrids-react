import React from "react";

const Breadcrumb3 = () => {
  return (
    <div className="bg-white py-10 dark:bg-dark">
      <div className="container">
        <div className="mb-8 w-full">
          <div className="rounded-lg border border-light bg-white px-4 py-4 shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-card sm:px-6 md:px-8 md:py-5">
            <ul className="flex items-center">
              <li className="flex items-center">
                <a
                  href="javascript:void(0)"
                  className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  Home
                </a>
                <span className="px-3 text-body-color dark:text-dark-6">
                  {" "}
                  /{" "}
                </span>
              </li>
              <li className="flex items-center">
                <a
                  href="javascript:void(0)"
                  className="text-base font-medium text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                >
                  Project
                </a>
                <span className="px-3 text-body-color dark:text-dark-6">
                  {" "}
                  /{" "}
                </span>
              </li>
              <li className="text-base font-medium text-body-color dark:text-dark-6">
                Marketing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb3;
