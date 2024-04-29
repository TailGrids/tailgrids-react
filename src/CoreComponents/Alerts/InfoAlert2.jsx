import React from "react";

const InfoAlert2 = () => {
  return (
    <div className="py-10 bg-white dark:bg-dark">
      <div className="container">
        <div className="border-cyan-dark flex w-full rounded-lg border-l-[6px] bg-[#E9F9FF] px-7 py-8 md:p-9">
          <div className="bg-cyan-dark mr-5 flex h-[34px] w-full max-w-[34px] items-center justify-center rounded-md text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            </svg>
          </div>
          <div className="w-full">
            <h5 className="mb-3 text-lg font-semibold text-cyan-dark">
              Attention needed
            </h5>
            <p className="text-base leading-relaxed text-body-color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAlert2;
