import React from "react";

const InfoAlert3 = () => {
  return (
    <div className="bg-white py-10 dark:bg-dark">
      <div className="container">
        <div className="flex max-w-[655px] items-center rounded-md border-l-[6px] border-l-cyan-dark bg-white p-5 pl-6 dark:bg-dark-2">
          <div className="mr-5 flex h-[36px] w-full max-w-[36px] items-center justify-center rounded-full bg-cyan-dark text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_961_15681)">
                <path
                  d="M8.99998 0.506256C4.3031 0.506256 0.506226 4.30313 0.506226 9.00001C0.506226 13.6969 4.3031 17.5219 8.99998 17.5219C13.6969 17.5219 17.5219 13.6969 17.5219 9.00001C17.5219 4.30313 13.6969 0.506256 8.99998 0.506256ZM8.99998 16.2563C5.00623 16.2563 1.77185 12.9938 1.77185 9.00001C1.77185 5.00626 5.00623 1.77188 8.99998 1.77188C12.9937 1.77188 16.2562 5.03438 16.2562 9.02813C16.2562 12.9938 12.9937 16.2563 8.99998 16.2563Z"
                  fill="currentColor"
                />
                <path
                  d="M10.125 7.65001H7.87496C7.53746 7.65001 7.22809 7.93126 7.22809 8.29688V13.9219C7.22809 14.2594 7.50934 14.5688 7.87496 14.5688H10.125C10.4625 14.5688 10.7718 14.2875 10.7718 13.9219V8.29688C10.7718 7.93126 10.4625 7.65001 10.125 7.65001ZM9.50621 13.275H8.52184V8.91563H9.50621V13.275Z"
                  fill="currentColor"
                />
                <path
                  d="M8.99996 3.45938C8.04371 3.45938 7.22809 4.24688 7.22809 5.23126C7.22809 6.21563 8.01559 7.00313 8.99996 7.00313C9.98434 7.00313 10.7718 6.21563 10.7718 5.23126C10.7718 4.24688 9.95621 3.45938 8.99996 3.45938ZM8.99996 5.70938C8.71871 5.70938 8.49371 5.48438 8.49371 5.20313C8.49371 4.92188 8.71871 4.69688 8.99996 4.69688C9.28121 4.69688 9.50621 4.92188 9.50621 5.20313C9.50621 5.48438 9.28121 5.70938 8.99996 5.70938Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_961_15681">
                  <rect width="18" height="18" fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="mb-1 text-lg font-medium text-dark dark:text-white">
                Did you know?
              </h3>
              <p className="text-sm text-body-color dark:text-dark-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <button className="text-dark-3 duration-300 hover:text-dark dark:text-dark-4 dark:hover:text-dark-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 10L18.625 2.375C18.9062 2.09375 18.9062 1.65625 18.625 1.375C18.3438 1.09375 17.9062 1.09375 17.625 1.375L10 9L2.375 1.375C2.09375 1.09375 1.65625 1.09375 1.375 1.375C1.09375 1.65625 1.09375 2.09375 1.375 2.375L9 10L1.375 17.625C1.09375 17.9062 1.09375 18.3438 1.375 18.625C1.5 18.75 1.6875 18.8438 1.875 18.8438C2.0625 18.8438 2.25 18.7812 2.375 18.625L10 11L17.625 18.625C17.75 18.75 17.9375 18.8438 18.125 18.8438C18.3125 18.8438 18.5 18.7812 18.625 18.625C18.9062 18.3438 18.9062 17.9062 18.625 17.625L11 10Z"
                    fill="currentColor"
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

export default InfoAlert3;
