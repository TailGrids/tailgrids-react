import React from "react";

const SuccessAlert4 = () => {
  return (
    <div className="py-10 bg-white dark:bg-dark">
      <div className="container">
        <div className="border-stroke dark:border-dark-3 mb-11 flex items-center rounded-md border border-l-[8px] border-l-[#00B078] bg-white dark:bg-dark-2 p-5 pl-8">
          <div className="mr-5 flex h-[36px] w-full max-w-[36px] items-center justify-center rounded-full bg-[#00B078]">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4038 4.22274C17.883 4.70202 17.883 5.47909 17.4038 5.95837L8.40377 14.9584C7.92449 15.4376 7.14742 15.4376 6.66814 14.9584L2.57723 10.8675C2.09795 10.3882 2.09795 9.61111 2.57723 9.13183C3.05651 8.65255 3.83358 8.65255 4.31286 9.13183L7.53595 12.3549L15.6681 4.22274C16.1474 3.74346 16.9245 3.74346 17.4038 4.22274Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="mb-1 text-lg font-medium text-dark dark:text-white">
                Message Sent Successfully
              </h3>
              <p className="text-body-color dark:text-dark-6 text-sm">
                Lorem Ipsum is simply dummy text of the printing and  typesetting industry.
              </p>
            </div>
            <div>
              <button className="hover:text-danger text-[#ACACB0]">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.8839 5.11612C19.372 5.60427 19.372 6.39573 18.8839 6.88388L6.88388 18.8839C6.39573 19.372 5.60427 19.372 5.11612 18.8839C4.62796 18.3957 4.62796 17.6043 5.11612 17.1161L17.1161 5.11612C17.6043 4.62796 18.3957 4.62796 18.8839 5.11612Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.11612 5.11612C5.60427 4.62796 6.39573 4.62796 6.88388 5.11612L18.8839 17.1161C19.372 17.6043 19.372 18.3957 18.8839 18.8839C18.3957 19.372 17.6043 19.372 17.1161 18.8839L5.11612 6.88388C4.62796 6.39573 4.62796 5.60427 5.11612 5.11612Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert4;
