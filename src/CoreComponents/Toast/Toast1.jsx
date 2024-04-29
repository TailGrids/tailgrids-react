import React from "react";

export default function Toast1() {
  return (
    <section className="bg-gray-2 py-[60px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="relative flex max-w-[415px] items-center rounded-lg border border-stroke bg-white px-5 py-4 shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-box-dark">
          <button className="absolute right-3 top-3 text-dark-5 hover:text-red dark:text-dark-6">
            <svg
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <g clipPath="url(#clip0_1087_25969)">
                <path d="M7.7 6.99998L13.0375 1.66248C13.2344 1.4656 13.2344 1.15935 13.0375 0.962476C12.8406 0.765601 12.5344 0.765601 12.3375 0.962476L7 6.29998L1.6625 0.962476C1.46562 0.765601 1.15937 0.765601 0.962498 0.962476C0.765623 1.15935 0.765623 1.4656 0.962498 1.66248L6.3 6.99998L0.962498 12.3375C0.765623 12.5344 0.765623 12.8406 0.962498 13.0375C1.05 13.125 1.18125 13.1906 1.3125 13.1906C1.44375 13.1906 1.575 13.1469 1.6625 13.0375L7 7.69998L12.3375 13.0375C12.425 13.125 12.5562 13.1906 12.6875 13.1906C12.8187 13.1906 12.95 13.1469 13.0375 13.0375C13.2344 12.8406 13.2344 12.5344 13.0375 12.3375L7.7 6.99998Z" />
              </g>
              <defs>
                <clipPath id="clip0_1087_25969">
                  <rect width={14} height={14} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className="mr-[18px] h-[54px] w-full max-w-[54px] overflow-hidden rounded-full">
            <img
              src="https://cdn.tailgrids.com/2.0/image/dashboard/images/notification/image-01.png"
              alt="user image"
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
          <div className="w-full">
            <h6 className="text-base font-medium text-dark dark:text-white">
              Nelly Miller
            </h6>
            <div className="flex flex-wrap items-end justify-between gap-2">
              <p className="text-sm text-body-color dark:text-dark-6">
                Purchased polo t-shirt for man
              </p>
              <span className="text-xs text-body-color dark:text-dark-6">
                2 min ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
