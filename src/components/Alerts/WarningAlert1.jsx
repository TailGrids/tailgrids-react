import React from "react";

const WarningAlert1 = () => {
  return (
    <div className="bg-white py-10 dark:bg-dark">
      <div className="container">
        <div className="flex w-full rounded-lg border-l-[6px] border-transparent bg-white px-7 py-8 shadow-1 dark:bg-dark-2 md:p-9">
          <div className="mr-5 flex h-[34px] w-full max-w-[34px] items-center justify-center rounded-lg bg-red-light-5 text-red-dark dark:bg-red-dark dark:text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_961_15645)">
                <path
                  d="M9 0.506256C4.30313 0.506256 0.50625 4.30313 0.50625 9.00001C0.50625 13.6969 4.30313 17.5219 9 17.5219C13.6969 17.5219 17.5219 13.6969 17.5219 9.00001C17.5219 4.30313 13.6969 0.506256 9 0.506256ZM9 16.2563C5.00625 16.2563 1.77188 12.9938 1.77188 9.00001C1.77188 5.00626 5.00625 1.77188 9 1.77188C12.9938 1.77188 16.2563 5.03438 16.2563 9.02813C16.2563 12.9938 12.9938 16.2563 9 16.2563Z"
                  fill="currentColor"
                />
                <path
                  d="M11.5875 6.38438C11.3344 6.13125 10.9406 6.13125 10.6875 6.38438L9 8.1L7.28438 6.38438C7.03125 6.13125 6.6375 6.13125 6.38438 6.38438C6.13125 6.6375 6.13125 7.03125 6.38438 7.28438L8.1 9L6.38438 10.7156C6.13125 10.9688 6.13125 11.3625 6.38438 11.6156C6.49688 11.7281 6.66563 11.8125 6.83438 11.8125C7.00313 11.8125 7.17188 11.7563 7.28438 11.6156L9 9.9L10.7156 11.6156C10.8281 11.7281 10.9969 11.8125 11.1656 11.8125C11.3344 11.8125 11.5031 11.7563 11.6156 11.6156C11.8688 11.3625 11.8688 10.9688 11.6156 10.7156L9.9 9L11.6156 7.28438C11.8406 7.03125 11.8406 6.6375 11.5875 6.38438Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_961_15645">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-full">
            <h5 className="mb-3 text-base font-semibold text-[#BC1C21]">
              There were 2 errors with your submission
            </h5>
            <ul className="list-inside list-disc">
              <li className="text-base leading-relaxed text-red-light">
                Lorem Ipsum is simply dummy text of the printing
              </li>

              <li className="text-base leading-relaxed text-red-light">
                Industry's standard dummy text ever since the 1500s, when
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningAlert1;
