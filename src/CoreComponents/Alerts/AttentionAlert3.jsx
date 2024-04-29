import React from "react";

const AttentionAlert3 = () => {
  return (
    <div className="py-10 bg-white dark:bg-dark">
      <div className="container">
        <div className="border-l-yellow dark:bg-dark-2 flex max-w-[655px] items-center rounded-md border-l-[6px] bg-white p-5 pl-6">
          <div className="bg-yellow mr-5 flex h-[36px] w-full max-w-[36px] items-center justify-center rounded-full">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0156 11.6156L10.9969 1.93125C10.5188 1.28437 9.78752 0.918747 9.00002 0.918747C8.18439 0.918747 7.45314 1.28437 7.00314 1.93125L0.984395 11.6156C0.421895 12.375 0.33752 13.3594 0.759395 14.2031C1.18127 15.0469 2.02502 15.5812 2.98127 15.5812H15.0188C15.975 15.5812 16.8188 15.0469 17.2406 14.2031C17.6625 13.3875 17.5781 12.375 17.0156 11.6156ZM16.1156 13.6406C15.8906 14.0625 15.4969 14.3156 15.0188 14.3156H2.98127C2.50315 14.3156 2.10939 14.0625 1.88439 13.6406C1.68752 13.2187 1.71564 12.7406 1.99689 12.375L8.01564 2.69062C8.24064 2.38125 8.60627 2.18437 9.00002 2.18437C9.39377 2.18437 9.75939 2.35312 9.9844 2.69062L16.0031 12.375C16.2844 12.7406 16.3125 13.2187 16.1156 13.6406Z"
                fill="white"
              />
              <path
                d="M8.9999 6.15001C8.6624 6.15001 8.35303 6.43126 8.35303 6.79688V9.86251C8.35303 10.2 8.63428 10.5094 8.9999 10.5094C9.36553 10.5094 9.64678 10.2281 9.64678 9.86251V6.76876C9.64678 6.43126 9.3374 6.15001 8.9999 6.15001Z"
                fill="white"
              />
              <path
                d="M8.9999 11.25C8.6624 11.25 8.35303 11.5313 8.35303 11.8969V12.0375C8.35303 12.375 8.63428 12.6844 8.9999 12.6844C9.36553 12.6844 9.64678 12.4031 9.64678 12.0375V11.8688C9.64678 11.5313 9.3374 11.25 8.9999 11.25Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between w-full">
            <div>
              <h3 className="mb-1 text-lg font-medium text-black dark:text-white">
                Opps! something went wrong
              </h3>
              <p className="text-sm text-body-color dark:text-dark-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <button className="duration-300 text-dark-3 hover:text-dark dark:text-dark-4 dark:hover:text-dark-6">
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

export default AttentionAlert3;
