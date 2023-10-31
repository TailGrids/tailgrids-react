import React from "react";

const SuccessAlert3 = () => {
  return (
    <div className="bg-white py-10 dark:bg-dark">
      <div className="container">
        <div className="inline-flex rounded-lg bg-green-light-6 px-[18px] py-4">
          <p className="flex items-center text-sm font-medium text-[#004434]">
            <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_961_15641)">
                  <path
                    d="M6.00002 0.337494C2.86877 0.337494 0.337524 2.86874 0.337524 5.99999C0.337524 9.13124 2.86877 11.6812 6.00002 11.6812C9.13128 11.6812 11.6813 9.13124 11.6813 5.99999C11.6813 2.86874 9.13128 0.337494 6.00002 0.337494ZM6.00002 10.8375C3.33752 10.8375 1.18127 8.66249 1.18127 5.99999C1.18127 3.33749 3.33752 1.18124 6.00002 1.18124C8.66252 1.18124 10.8375 3.35624 10.8375 6.01874C10.8375 8.66249 8.66252 10.8375 6.00002 10.8375Z"
                    fill="white"
                  />
                  <path
                    d="M7.61255 4.25624L5.3813 6.43124L4.3688 5.43749C4.20005 5.26874 3.93755 5.28749 3.7688 5.43749C3.60005 5.60624 3.6188 5.86874 3.7688 6.03749L4.9688 7.19999C5.0813 7.31249 5.2313 7.36874 5.3813 7.36874C5.5313 7.36874 5.6813 7.31249 5.7938 7.19999L8.21255 4.87499C8.3813 4.70624 8.3813 4.44374 8.21255 4.27499C8.0438 4.10624 7.7813 4.10624 7.61255 4.25624Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_961_15641">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Your item has been added successfully
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert3;
