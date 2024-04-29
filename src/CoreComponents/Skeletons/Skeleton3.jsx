import React from "react";

export default function Skeleton3() {
  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container">
        <div className="mx-auto w-full max-w-[700px] items-center gap-8 md:flex">
          <div className="flex h-[200px] w-full max-w-[300px] items-center justify-center rounded-xl bg-gradient-to-r from-gray-1 to-gray-4 text-secondary-color dark:from-dark-4 dark:to-dark-5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.84995 31.15C4.49995 31.15 4.09995 31.05 3.79995 30.85C3.09995 30.45 2.69995 29.8 2.69995 29V2.99999C2.69995 2.24999 3.09995 1.54999 3.79995 1.14999C4.49995 0.749994 5.29995 0.799994 5.99995 1.19999L28.4 14.25C29.05 14.65 29.4 15.3 29.4 16.05C29.4 16.75 29.05 17.45 28.4 17.8L5.94995 30.8C5.59995 31 5.19995 31.15 4.84995 31.15ZM4.89995 3.19999V28.8L26.9 16L4.89995 3.19999Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="w-full space-y-3">
            <div className="h-3 w-full rounded-full bg-gradient-to-r from-gray-1 to-gray-4 dark:from-dark-4 dark:to-dark-5"></div>
            <div className="h-3 w-4/6 rounded-full bg-gradient-to-r from-gray-1 to-gray-4 dark:from-dark-4 dark:to-dark-5"></div>
            <div className="h-3 w-5/6 rounded-full bg-gradient-to-r from-gray-1 to-gray-4 dark:from-dark-4 dark:to-dark-5"></div>
            <div className="h-3 w-full rounded-full bg-gradient-to-r from-gray-1 to-gray-4 dark:from-dark-4 dark:to-dark-5"></div>
            <div className="h-3 w-5/6 rounded-full bg-gradient-to-r from-gray-1 to-gray-4 dark:from-dark-4 dark:to-dark-5"></div>
            <div className="h-3 w-4/6 rounded-full bg-gradient-to-r from-gray-1 to-gray-4 dark:from-dark-4 dark:to-dark-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
