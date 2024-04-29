import React from "react";

export default function StickyBar1() {
  return (
    <section className="border-b border-stroke bg-gray-1 px-6 py-3 dark:border-dark-3 dark:bg-dark-2">
      <div className="container">
        <div className="relative pr-6 text-center">
          <span className="inline-flex h-6 items-center justify-center rounded bg-primary/10 px-2.5 text-sm font-medium text-primary">
            New
          </span>
          <p className="inline-flex px-3 text-sm font-medium text-dark lg:text-base dark:text-white">
            We have launched Brand new Blocks featuring over 300+ UI Elements!
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary lg:text-base"
          >
            Check Out
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>

          <button className="absolute right-0 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-dark-6 duration-200 hover:text-dark dark:hover:text-white">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2386_67)">
                <path
                  d="M1 1L7 7M7 7L13 13M7 7L13 1M7 7L1 13"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2386_67">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
