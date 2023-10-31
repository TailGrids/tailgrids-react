import React, { useState } from "react";

const Cookies2 = () => {
  const [open, setOpen] = useState(true);

  const handleHide = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        {open && (
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between rounded-lg bg-primary px-6 py-8 xs:px-10 md:px-8 lg:px-10">
              <div className="w-full md:w-7/12 lg:w-2/3">
                <div className="mb-6 items-center sm:flex md:mb-0">
                  <div className="mb-3 mr-5 sm:mb-0">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.9 33C47.7 31.8 44.4 28.5 43.3 24.2L43 23L41.7 22.7C37.4 21.6 34 18.2 32.9 13.9L32.6 12.7L22 9.39999L21.3 9.69999C16.5 11.4 12.2 14.5 9 18.6C1.4 28.4 1.5 42.5 9.3 52.1C14.2 58.2 21.2 61.8 29 62.2C29.5 62.2 30 62.2 30.4 62.2C37.6 62.2 44.5 59.3 49.6 54.3C52.4 51.5 54.6 48.1 55.9 44.3L56.1 43.6L53.3 33H51.9ZM46.5 51.1C42 55.7 35.7 58 29.3 57.7C22.8 57.4 17 54.4 12.9 49.3C6.4 41.3 6.3 29.5 12.6 21.4C15.1 18.2 18.4 15.7 22.1 14.2L28.8 16.2C30.5 21.1 34.4 25 39.3 26.7C41 31.6 44.8 35.4 49.7 37.1L51.5 43.5C50.4 46.4 48.7 48.9 46.5 51.1Z"
                        fill="white"
                      />
                      <path
                        d="M19.4 28.7C17.4 28.7 15.8 30.3 15.8 32.3C15.8 34.3 17.4 35.9 19.4 35.9C21.4 35.9 23 34.3 23 32.3C23 30.3 21.4 28.7 19.4 28.7Z"
                        fill="white"
                      />
                      <path
                        d="M37.4 40.1C36.2 40.1 35.2 41.1 35.2 42.3C35.2 43.5 36.2 44.5 37.4 44.5C38.6 44.5 39.6 43.5 39.6 42.3C39.6 41.1 38.6 40.1 37.4 40.1Z"
                        fill="white"
                      />
                      <path
                        d="M40.1 9.29999C41.6 9.29999 42.8 8.09999 42.8 6.59999C42.8 5.09999 41.6 3.89999 40.1 3.89999C38.6 3.89999 37.4 5.09999 37.4 6.59999C37.4 8.09999 38.6 9.29999 40.1 9.29999Z"
                        fill="white"
                      />
                      <path
                        d="M53 27.8C54.5 27.8 55.7 26.6 55.7 25.1C55.7 23.6 54.5 22.4 53 22.4C51.5 22.4 50.3 23.6 50.3 25.1C50.4 26.6 51.6 27.8 53 27.8Z"
                        fill="white"
                      />
                      <path
                        d="M55.7 7.39999C54.2 7.39999 53 8.59999 53 9.99999C53 11.5 54.2 12.7 55.7 12.7C57.2 12.7 58.4 11.5 58.4 9.99999C58.3 8.59999 57.1 7.39999 55.7 7.39999Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-semibold text-white xs:text-2xl md:text-xl lg:text-2xl">
                      We use cookies
                    </h4>
                    <p className="text-base text-white">
                      This website uses cookies to ensure you get the best
                      experience on our website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-5/12 lg:w-1/3">
                <div className="flex items-center space-x-3 md:justify-end">
                  <button className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-center text-base font-medium text-body-color shadow-1 hover:bg-gray-2 hover:text-primary dark:bg-dark-2 dark:text-dark-6 dark:shadow-none">
                    Accept
                  </button>
                  <button
                    onClick={handleHide}
                    className="inline-flex h-12 w-12 items-center justify-center rounded bg-white/10 text-center  text-base font-semibold text-white shadow-card hover:bg-opacity-10"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 10L18.625 2.375C18.9062 2.09375 18.9062 1.65625 18.625 1.375C18.3438 1.09375 17.9062 1.09375 17.625 1.375L10 9L2.375 1.375C2.09375 1.09375 1.65625 1.09375 1.375 1.375C1.09375 1.65625 1.09375 2.09375 1.375 2.375L9 10L1.375 17.625C1.09375 17.9062 1.09375 18.3438 1.375 18.625C1.5 18.75 1.6875 18.8438 1.875 18.8438C2.0625 18.8438 2.25 18.7812 2.375 18.625L10 11L17.625 18.625C17.75 18.75 17.9375 18.8438 18.125 18.8438C18.3125 18.8438 18.5 18.7812 18.625 18.625C18.9062 18.3438 18.9062 17.9062 18.625 17.625L11 10Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cookies2;
