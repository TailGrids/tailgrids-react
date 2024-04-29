import React from "react";

export default function Toast6() {
  return (
    <section className="bg-gray-2 py-[60px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="relative max-w-[520px] items-center justify-between rounded-lg border border-stroke bg-white px-5 py-4 shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark sm:flex">
          <div className="mb-4 flex items-center sm:mb-0">
            <div className="mr-[18px] h-[54px] w-full max-w-[54px] overflow-hidden rounded-full">
              <img
                src="https://cdn.tailgrids.com/2.0/image/dashboard/images/notification/image-01.png"
                alt="user image"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div className="w-full">
              <h6 className="mb-0.5 text-base font-semibold text-dark dark:text-white sm:text-lg">
                Devid Miller
              </h6>
              <p className="text-sm text-body-color dark:text-dark-6">
                Started following your
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="mr-3 rounded-[3px] bg-primary px-4 py-[5px] text-xs font-medium text-white hover:bg-blue-dark">
              Accept
            </button>
            <button className="mr-8 rounded-[3px] bg-dark px-4 py-[5px] text-xs font-medium text-white hover:bg-opacity-90">
              Decline
            </button>
            <button className="absolute right-[18px] top-1/2 -translate-y-1/2 text-dark-5 hover:text-red dark:text-dark-6">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <g clipPath="url(#clip0_1088_26057)">
                  <path d="M8.79999 7.99999L14.9 1.89999C15.125 1.67499 15.125 1.32499 14.9 1.09999C14.675 0.874994 14.325 0.874994 14.1 1.09999L7.99999 7.19999L1.89999 1.09999C1.67499 0.874994 1.32499 0.874994 1.09999 1.09999C0.874994 1.32499 0.874994 1.67499 1.09999 1.89999L7.19999 7.99999L1.09999 14.1C0.874994 14.325 0.874994 14.675 1.09999 14.9C1.19999 15 1.34999 15.075 1.49999 15.075C1.64999 15.075 1.79999 15.025 1.89999 14.9L7.99999 8.79999L14.1 14.9C14.2 15 14.35 15.075 14.5 15.075C14.65 15.075 14.8 15.025 14.9 14.9C15.125 14.675 15.125 14.325 14.9 14.1L8.79999 7.99999Z" />
                </g>
                <defs>
                  <clipPath id="clip0_1088_26057">
                    <rect width={16} height={16} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
