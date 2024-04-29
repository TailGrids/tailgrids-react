import React from "react";

export default function Select3() {
  return (
    <section className="bg-white py-10 dark:bg-dark">
      <div className="container">
        <div className="w-full max-w-[500px]">
          <div>
            <label
              for="multiselect-dropdown"
              className="mb-2.5 block text-base font-medium text-dark dark:text-white"
            >
              Multiselect Dropdown
            </label>
            <div className="relative flex flex-wrap items-center gap-2 rounded-lg border border-stroke bg-transparent px-4 py-3 dark:border-dark-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-stroke py-1 pl-3 pr-2 hover:bg-gray-2 dark:border-dark-3 dark:text-white dark:hover:bg-white/5">
                Design
                <span className="cursor-pointer text-dark-5 hover:text-dark dark:hover:text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2469_15115)">
                      <path
                        d="M8.00001 0.450012C3.82501 0.450012 0.450012 3.82501 0.450012 8.00001C0.450012 12.175 3.82501 15.575 8.00001 15.575C12.175 15.575 15.575 12.175 15.575 8.00001C15.575 3.82501 12.175 0.450012 8.00001 0.450012ZM8.00001 14.45C4.45001 14.45 1.57501 11.55 1.57501 8.00001C1.57501 4.45001 4.45001 1.57501 8.00001 1.57501C11.55 1.57501 14.45 4.47501 14.45 8.02501C14.45 11.55 11.55 14.45 8.00001 14.45Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.3 5.67501C10.075 5.45001 9.72501 5.45001 9.50001 5.67501L8.00001 7.20001L6.47501 5.67501C6.25001 5.45001 5.90001 5.45001 5.67501 5.67501C5.45001 5.90001 5.45001 6.25001 5.67501 6.47501L7.20001 8.00001L5.67501 9.52501C5.45001 9.75001 5.45001 10.1 5.67501 10.325C5.77501 10.425 5.92501 10.5 6.07501 10.5C6.22501 10.5 6.37501 10.45 6.47501 10.325L8.00001 8.80001L9.52501 10.325C9.62501 10.425 9.77501 10.5 9.92501 10.5C10.075 10.5 10.225 10.45 10.325 10.325C10.55 10.1 10.55 9.75001 10.325 9.52501L8.80001 8.00001L10.325 6.47501C10.525 6.25001 10.525 5.90001 10.3 5.67501Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2469_15115">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-stroke py-1 pl-3 pr-2 hover:bg-gray-2 dark:border-dark-3 dark:text-white dark:hover:bg-white/5">
                Development
                <span className="cursor-pointer text-dark-5 hover:text-dark dark:hover:text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2469_15115)">
                      <path
                        d="M8.00001 0.450012C3.82501 0.450012 0.450012 3.82501 0.450012 8.00001C0.450012 12.175 3.82501 15.575 8.00001 15.575C12.175 15.575 15.575 12.175 15.575 8.00001C15.575 3.82501 12.175 0.450012 8.00001 0.450012ZM8.00001 14.45C4.45001 14.45 1.57501 11.55 1.57501 8.00001C1.57501 4.45001 4.45001 1.57501 8.00001 1.57501C11.55 1.57501 14.45 4.47501 14.45 8.02501C14.45 11.55 11.55 14.45 8.00001 14.45Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.3 5.67501C10.075 5.45001 9.72501 5.45001 9.50001 5.67501L8.00001 7.20001L6.47501 5.67501C6.25001 5.45001 5.90001 5.45001 5.67501 5.67501C5.45001 5.90001 5.45001 6.25001 5.67501 6.47501L7.20001 8.00001L5.67501 9.52501C5.45001 9.75001 5.45001 10.1 5.67501 10.325C5.77501 10.425 5.92501 10.5 6.07501 10.5C6.22501 10.5 6.37501 10.45 6.47501 10.325L8.00001 8.80001L9.52501 10.325C9.62501 10.425 9.77501 10.5 9.92501 10.5C10.075 10.5 10.225 10.45 10.325 10.325C10.55 10.1 10.55 9.75001 10.325 9.52501L8.80001 8.00001L10.325 6.47501C10.525 6.25001 10.525 5.90001 10.3 5.67501Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2469_15115">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </span>

              <div className="relative flex-1">
                <select
                  name="multiselect-dropdown"
                  className="appearance-none bg-transparent px-4 text-dark outline-none dark:text-white"
                >
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="BD">BD</option>
                </select>

                <span className="pointer-events-none absolute right-0 top-0 flex h-full items-center justify-center text-dark-5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.29645 5.15354L2.29642 5.15357L2.30065 5.1577L7.65065 10.3827L8.00167 10.7255L8.35105 10.381L13.7011 5.10603L13.7011 5.10604L13.7036 5.10354C13.7221 5.08499 13.7386 5.08124 13.75 5.08124C13.7614 5.08124 13.7779 5.08499 13.7964 5.10354C13.815 5.12209 13.8188 5.13859 13.8188 5.14999C13.8188 5.1612 13.8151 5.17734 13.7974 5.19552L8.04956 10.8433L8.04955 10.8433L8.04645 10.8464C8.01604 10.8768 7.99596 10.8921 7.98519 10.8992C7.97756 10.8983 7.97267 10.8968 7.96862 10.8952C7.96236 10.8929 7.94954 10.887 7.92882 10.8721L2.20263 5.2455C2.18488 5.22733 2.18125 5.2112 2.18125 5.19999C2.18125 5.18859 2.18501 5.17209 2.20355 5.15354C2.2221 5.13499 2.2386 5.13124 2.25 5.13124C2.2614 5.13124 2.2779 5.13499 2.29645 5.15354Z"
                      fill="currentColor"
                      stroke="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
