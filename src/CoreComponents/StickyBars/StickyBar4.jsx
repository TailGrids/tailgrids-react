import React from "react";

export default function StickyBar4() {
  return (
    <section className="bg-primary px-6 py-3">
      <div className="relative pr-6">
        <div className="flex flex-wrap items-center justify-center gap-5 text-center">
          <p className="inline-flex text-sm font-medium text-white lg:text-base">
            Flat 70% Discount, Hurry Up to Grab the Deal! Sale ends in
          </p>
          <div className="inline-flex items-center gap-1.5 text-lg font-medium text-white">
            <span className="rounded-lg bg-white/10 px-4 py-2"> 3 </span>
            <span> : </span>
            <span className="rounded-lg bg-white/10 px-4 py-2"> 12 </span>
            <span> : </span>
            <span className="rounded-lg bg-white/10 px-4 py-2"> 49 </span>
            <span> : </span>
            <span className="rounded-lg bg-white/10 px-4 py-2"> 54 </span>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-white underline lg:text-base"
          >
            Get it now→
          </a>
        </div>
        <button className="absolute right-0 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-white/50 duration-200 hover:text-white">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2390_1135)">
              <path
                d="M1.14288 1.14285L8.00003 8M8.00003 8L14.8572 14.8571M8.00003 8L14.8572 1.14285M8.00003 8L1.14288 14.8571"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2390_1135">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
}
