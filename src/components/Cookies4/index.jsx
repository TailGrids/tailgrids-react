import React, { useState } from "react";

const Cookies4 = () => {
  const [Open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(false);
  };

  return (
    <section className="bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      {Open && (
        <div className="container">
          <div className="relative ml-auto w-full max-w-[350px] overflow-hidden rounded-lg bg-white px-6 py-10 text-center shadow-1 dark:bg-dark-2 dark:shadow-box-dark xs:px-10">
            <button
              onClick={handleOpen}
              className="absolute right-6 top-6 text-body-color dark:text-dark-6"
            >
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.90001 9L16.7625 2.1375C17.0156 1.88437 17.0156 1.49062 16.7625 1.2375C16.5094 0.984372 16.1156 0.984372 15.8625 1.2375L9.00001 8.1L2.13751 1.2375C1.88439 0.984372 1.49064 0.984372 1.23751 1.2375C0.984387 1.49062 0.984387 1.88437 1.23751 2.1375L8.10001 9L1.23751 15.8625C0.984387 16.1156 0.984387 16.5094 1.23751 16.7625C1.35001 16.875 1.51876 16.9594 1.68751 16.9594C1.85626 16.9594 2.02501 16.9031 2.13751 16.7625L9.00001 9.9L15.8625 16.7625C15.975 16.875 16.1438 16.9594 16.3125 16.9594C16.4813 16.9594 16.65 16.9031 16.7625 16.7625C17.0156 16.5094 17.0156 16.1156 16.7625 15.8625L9.90001 9Z"
                  fill=""
                />
              </svg>
            </button>
            <div className="mx-auto mb-9 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-primary">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.7907 27.8438C40.2469 26.8313 37.4625 24.0469 36.5344 20.4188L36.2813 19.4063L35.1844 19.1531C31.5563 18.225 28.6875 15.3563 27.7594 11.7281L27.5063 10.7156L18.5625 7.93125L17.9719 8.18438C13.9219 9.61875 10.2938 12.2344 7.59378 15.6938C1.18128 23.9625 1.26565 35.8594 7.8469 43.9594C11.9813 49.1062 17.8875 52.1438 24.4688 52.4813C24.8907 52.4813 25.3125 52.4813 25.65 52.4813C31.725 52.4813 37.5469 50.0344 41.85 45.8156C44.2125 43.4531 46.0688 40.5844 47.1657 37.3781L47.3344 36.7875L44.9719 27.8438H43.7907ZM39.2344 43.1156C35.4375 46.9969 30.1219 48.9375 24.7219 48.6844C19.2375 48.4313 14.3438 45.9 10.8844 41.5969C5.40003 34.8469 5.31565 24.8906 10.6313 18.0563C12.7407 15.3563 15.525 13.2469 18.6469 11.9813L24.3 13.6688C25.7344 17.8031 29.025 21.0938 33.1594 22.5281C34.5938 26.6625 37.8 29.8688 41.9344 31.3031L43.4532 36.7031C42.525 39.15 41.0907 41.2594 39.2344 43.1156Z"
                  fill="white"
                />
                <path
                  d="M16.3688 24.2156C14.6813 24.2156 13.3313 25.5656 13.3313 27.2531C13.3313 28.9406 14.6813 30.2906 16.3688 30.2906C18.0563 30.2906 19.4063 28.9406 19.4063 27.2531C19.4063 25.5656 18.0563 24.2156 16.3688 24.2156Z"
                  fill="white"
                />
                <path
                  d="M31.5563 33.8344C30.5438 33.8344 29.7 34.6781 29.7 35.6906C29.7 36.7031 30.5438 37.5469 31.5563 37.5469C32.5688 37.5469 33.4125 36.7031 33.4125 35.6906C33.4125 34.6781 32.5688 33.8344 31.5563 33.8344Z"
                  fill="white"
                />
                <path
                  d="M33.8344 7.84688C35.1 7.84688 36.1125 6.83438 36.1125 5.56875C36.1125 4.30313 35.1 3.29063 33.8344 3.29063C32.5688 3.29063 31.5563 4.30313 31.5563 5.56875C31.5563 6.83438 32.5688 7.84688 33.8344 7.84688Z"
                  fill="white"
                />
                <path
                  d="M44.7188 23.4562C45.9844 23.4562 46.9969 22.4437 46.9969 21.1781C46.9969 19.9125 45.9844 18.9 44.7188 18.9C43.4532 18.9 42.4407 19.9125 42.4407 21.1781C42.525 22.4437 43.5375 23.4562 44.7188 23.4562Z"
                  fill="white"
                />
                <path
                  d="M46.9969 6.24375C45.7313 6.24375 44.7188 7.25625 44.7188 8.4375C44.7188 9.70313 45.7313 10.7156 46.9969 10.7156C48.2625 10.7156 49.275 9.70313 49.275 8.4375C49.1906 7.25625 48.1781 6.24375 46.9969 6.24375Z"
                  fill="white"
                />
              </svg>
            </div>

            <h4 className="lg:leading[35px] mb-4 text-xl font-bold text-dark dark:text-white lg:text-[28px]">
              We use cookies
            </h4>
            <p className="mb-7 text-base text-body-color dark:text-dark-6">
              This website uses cookies to ensure you get the best experience on
              our website.
            </p>
            <div
              onClick={handleOpen}
              className="flex items-center justify-center space-x-4"
            >
              <button className="inline-flex items-center justify-center rounded-md border border-primary px-7 py-[11px] text-center text-base font-medium text-primary hover:bg-primary hover:text-white xs:px-8">
                Exit
              </button>
              <button
                onClick={handleOpen}
                className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-blue-dark"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cookies4;
