import React from "react";

const Breadcrumb3 = () => {
  return (
    <div className="py-10 bg-white dark:bg-dark">
      <div className="container">
        <div className="w-full mb-8">
          <div className="px-4 py-4 bg-white border rounded-lg border-light shadow-1 dark:shadow-card dark:bg-dark-2 dark:border-dark-3 sm:px-6 md:px-8 md:py-5">
            <ul className="flex items-center">
              <li className="flex items-center">
                <a
                  href="/#"
                  className="text-base font-medium hover:text-primary dark:hover:text-primary text-dark dark:text-white"
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
                  href="/#"
                  className="text-base font-medium text-body-color dark:text-dark-6 dark:hover:text-primary hover:text-primary"
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
