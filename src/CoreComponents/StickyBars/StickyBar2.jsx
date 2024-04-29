import React from "react";

export default function StickyBar2() {
  return (
    <section className="border-b border-stroke bg-white dark:border-dark-3 dark:bg-dark">
      <div className="py-4 pl-7 pr-5">
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-5 md:flex-nowrap">
            <a href="#">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                alt="logo"
                className="dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:inline-block"
              />
            </a>
            <span className="hidden h-8 w-px bg-stroke md:inline-block dark:bg-white/10"></span>
            <p className="text-base font-medium text-body-color dark:text-dark-6">
              500+ Tailwind CSS UI Components, Blocks and Templates Collections
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-5 py-2 font-medium text-white duration-200 hover:bg-primary/90"
            >
              Sign up
            </a>
            <button className="flex h-10 w-[40px] items-center justify-center rounded-lg bg-gray-2 text-dark-6 duration-200 hover:bg-gray-3 hover:text-dark dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2386_77)">
                  <path
                    d="M1.14288 1.14285L8.00003 8M8.00003 8L14.8572 14.8571M8.00003 8L14.8572 1.14285M8.00003 8L1.14288 14.8571"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2386_77">
                    <rect width="16" height="16" fill="white" />
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
