import React from "react";

export default function Select1() {
  return (
    <section className="bg-white py-10 dark:bg-dark">
      <div className="container">
        <div className="w-full max-w-[500px]">
          <div>
            <label
              for="default-select"
              className="mb-2.5 block text-base font-medium text-dark dark:text-white"
            >
              Message
            </label>
            <div className="relative">
              <select
                name="default-select"
                className="w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 pl-5 pr-12 text-dark outline-none focus:border-primary dark:border-dark-3 dark:text-white"
              >
                <option value="Select option 1">Select option 1</option>
                <option value="Select option 2">Select option 2</option>
                <option value="Select option 3">Select option 3</option>
                <option value="Select option 4">Select option 4</option>
              </select>
              <span className="pointer-events-none absolute right-0 top-0 flex h-full w-12 items-center justify-center text-dark-5">
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
    </section>
  );
}
