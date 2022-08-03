import React, { useEffect, useRef, useState } from "react";

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
// Handler hook for when Outside click dropdown close End Code====>>

const Dropdown = ({
  Button,
  children,
  bgColor = "primary",
  dropColor = "white",
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <>
      {/* <!-- ====== Dropdowns Section Start --> */}
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          {/* one */}
          <div ref={domNode} className="w-full px-4 sm:w-1/2 lg:w-1/4">
            <div className="py-8 text-center">
              <div className="relative inline-block mb-8 text-left">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center px-5 py-3 text-base font-semibold text-white rounded bg-${bgColor}`}
                >
                  {Button}
                  <span className="pl-2">
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      className="fill-current"
                    >
                      <path d="M0.564864 0.879232C0.564864 0.808624 0.600168 0.720364 0.653125 0.667408C0.776689 0.543843 0.970861 0.543844 1.09443 0.649756L5.82517 5.09807C5.91343 5.18633 6.07229 5.18633 6.17821 5.09807L10.9089 0.649756C11.0325 0.526192 11.2267 0.543844 11.3502 0.667408C11.4738 0.790972 11.4562 0.985145 11.3326 1.10871L6.60185 5.55702C6.26647 5.85711 5.73691 5.85711 5.41917 5.55702L0.670776 1.10871C0.600168 1.0381 0.564864 0.967492 0.564864 0.879232Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.4719 0.229332L6.00169 4.48868L10.5171 0.24288C10.9015 -0.133119 11.4504 -0.0312785 11.7497 0.267983C12.1344 0.652758 12.0332 1.2069 11.732 1.50812L11.7197 1.52041L6.97862 5.9781C6.43509 6.46442 5.57339 6.47872 5.03222 5.96853C5.03192 5.96825 5.03252 5.96881 5.03222 5.96853L0.271144 1.50833C0.123314 1.3605 -5.04223e-08 1.15353 -3.84322e-08 0.879226C-2.88721e-08 0.660517 0.0936127 0.428074 0.253705 0.267982C0.593641 -0.0719548 1.12269 -0.0699964 1.46204 0.220873L1.4719 0.229332ZM5.41917 5.55702C5.73691 5.85711 6.26647 5.85711 6.60185 5.55702L11.3326 1.10871C11.4562 0.985145 11.4738 0.790972 11.3502 0.667408C11.2267 0.543844 11.0325 0.526192 10.9089 0.649756L6.17821 5.09807C6.07229 5.18633 5.91343 5.18633 5.82517 5.09807L1.09443 0.649756C0.970861 0.543844 0.776689 0.543843 0.653125 0.667408C0.600168 0.720364 0.564864 0.808624 0.564864 0.879232C0.564864 0.967492 0.600168 1.0381 0.670776 1.10871L5.41917 5.55702Z"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`absolute left-0 z-40 mt-2 w-full rounded border-[.5px] border-light bg-${dropColor} py-5 shadow-card transition-all ${
                    dropdownOpen
                      ? "top-full opacity-100 visible"
                      : "top-[110%] invisible opacity-0"
                  }`}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
          {/* End */}
        </div>
      </div>
      {/* <!-- ====== Dropdowns Section End -->    */}
    </>
  );
};

export default Dropdown;
