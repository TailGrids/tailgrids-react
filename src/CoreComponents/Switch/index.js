import React from "react";

const Switch = ({
  togglePrimary,
  toggleSecondary,
  toggleThree,
  toggleFour,
  toggleFive,
  toggleSix,
  toggleSeven,
  toggleEight,
  toggleNine,
}) => {
  return (
    <>
      {/* ====== Switch Start */}

      {togglePrimary && (
        <div className=" w-fit">
          <label
            htmlFor="toggleTwo"
            className="flex items-center cursor-pointer select-none"
          >
            <div className="relative">
              <input type="checkbox" id="toggleTwo" className="sr-only" />
              <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]" />
              <div className="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1" />
            </div>
          </label>
        </div>
      )}
      {toggleSecondary && (
        <div className="w-fit">
          <label
            htmlFor="toogleTwo"
            className="flex items-center cursor-pointer select-none"
          >
            <div className="relative">
              <input id="toogleTwo" type="checkbox" className="sr-only" />
              <div className="h-5 w-14 rounded-full bg-[#E5E7EB] shadow-inner" />
              <div className="absolute left-0 transition bg-white rounded-full dot -top-1 h-7 w-7 shadow-switch-1" />
            </div>
          </label>
        </div>
      )}
      {toggleThree && (
        <div className="w-fit">
          <label
            htmlFor="toggleThree"
            className="flex items-center cursor-pointer select-none"
          >
            <div className="relative">
              <input type="checkbox" id="toggleThree" className="sr-only" />
              <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]" />
              <div className="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1">
                <span className="hidden active">
                  <svg
                    width={11}
                    height={8}
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.4"
                    />
                  </svg>
                </span>
                <span className="inactive text-body-color">
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </label>
        </div>
      )}
      {toggleFour && (
        <div className="w-fit">
          <label
            htmlFor="toggleFour"
            className="flex items-center cursor-pointer select-none"
          >
            <div className="relative">
              <input type="checkbox" id="toggleFour" className="sr-only" />
              <div className="block h-8 rounded-full box w-14 bg-dark" />
              <div className="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1" />
            </div>
          </label>
        </div>
      )}
      {toggleFive && (
        <div className="w-fit">
          <label
            htmlFor="toggleFive"
            className="flex items-center cursor-pointer select-none"
          >
            <div className="relative">
              <input id="toggleFive" type="checkbox" className="sr-only" />
              <div className="h-5 w-14 rounded-full bg-[#E5E7EB] shadow-inner" />
              <div className="absolute left-0 flex items-center justify-center transition bg-white rounded-full dot -top-1 h-7 w-7 shadow-switch-1">
                <span className="active h-4 w-4 rounded-full bg-[#E5E7EB]" />
              </div>
            </div>
          </label>
        </div>
      )}
      {toggleSix && (
        <div className="w-fit">
          <label
            htmlFor="toggleSix"
            className="flex items-center cursor-pointer select-none"
          >
            <div className="relative">
              <input type="checkbox" id="toggleSix" className="sr-only" />
              <div className="block h-8 rounded-full box w-14 bg-primary" />
              <div className="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1" />
            </div>
          </label>
        </div>
      )}
      {toggleSeven && (
        <div className="w-fit">
          <label
            htmlFor="toggleSeven"
            className="flex items-center cursor-pointer select-none"
          >
            <div className="relative">
              <input type="checkbox" id="toggleSeven" className="sr-only" />
              <div className="block h-8 w-14 rounded-full border border-[#BFCEFF] bg-[#EAEEFB]" />
              <div className="absolute w-6 h-6 transition rounded-full dot left-1 top-1 bg-primary" />
            </div>
          </label>
        </div>
      )}
      {toggleEight && (
        <div className="w-fit">
          <label
            htmlFor="toggleEight"
            className="flex items-center cursor-pointer select-none"
          >
            <div className="relative">
              <input id="toggleEight" type="checkbox" className="sr-only" />
              <div className="h-5 transition rounded-full shadow-inner box w-14 bg-dark" />
              <div className="absolute left-0 flex items-center justify-center transition bg-white rounded-full dot -top-1 h-7 w-7 shadow-switch-1">
                <span className="w-4 h-4 bg-white border rounded-full active border-dark" />
              </div>
            </div>
          </label>
        </div>
      )}
      {toggleNine && (
        <div className="w-fit">
          <label
            htmlFor="toggleNine"
            className="flex items-center cursor-pointer select-none"
          >
            <div className="relative">
              <input type="checkbox" id="toggleNine" className="sr-only" />
              <div className="block h-8 w-14 rounded-full bg-[#EAEEFB]" />
              <div className="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1">
                <span className="w-3 h-3 rounded-full bg-primary" />
              </div>
            </div>
          </label>
        </div>
      )}

      {/*  */}
    </>
  );
};

export default Switch;
