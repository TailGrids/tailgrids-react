import React from "react";

export default function Skeleton2() {
  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container">
        <div className="mx-auto w-full max-w-[370px]">
          <div className="mb-7 flex h-[200px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-gray-1 to-gray-4 text-secondary-color dark:from-dark-4 dark:to-dark-5">
            <svg
              width="28"
              height="31"
              viewBox="0 0 28 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8 15.4209C20.15 15.4209 22.1 13.5209 22.1 11.1209C22.1 8.72086 20.2 6.82086 17.8 6.82086C15.4 6.82086 13.5 8.82086 13.5 11.1709C13.5 13.5209 15.45 15.4209 17.8 15.4209ZM17.8 9.12086C18.9 9.12086 19.85 10.0209 19.85 11.1709C19.85 12.3209 18.95 13.2209 17.8 13.2209C16.65 13.2209 15.75 12.3209 15.75 11.1709C15.75 10.0209 16.65 9.12086 17.8 9.12086Z"
                fill="currentColor"
              />
              <path
                d="M24.3501 0.470856H3.65005C1.95005 0.470856 0.550049 1.87086 0.550049 3.57086V27.5709C0.550049 29.2709 1.95005 30.7209 3.70005 30.7209H24.3501C26.0501 30.7209 27.5001 29.3209 27.5001 27.5709V3.57086C27.4501 1.87086 26.0501 0.470856 24.3501 0.470856ZM3.65005 2.72086H24.3001C24.8001 2.72086 25.2001 3.12086 25.2001 3.62086V21.0709L21.5501 18.0709C20.5001 17.2209 19.0001 17.2709 18.0501 18.2209L13.9501 22.2709L8.70005 17.5709C7.70005 16.6709 6.20005 16.6709 5.20005 17.5709L2.80005 19.7209V3.57086C2.80005 3.07086 3.20005 2.72086 3.65005 2.72086ZM24.3501 28.4709H3.65005C3.15005 28.4709 2.75005 28.0709 2.75005 27.5709V22.7209L6.65005 19.1709C6.80005 19.0209 7.00005 19.0209 7.15005 19.1709L13.2 24.5709C13.4 24.7709 13.7001 24.8709 13.9501 24.8709C14.2501 24.8709 14.5001 24.7709 14.7501 24.5209L19.6001 19.7209C19.7501 19.5709 19.9501 19.5709 20.1001 19.7209L25.1501 23.9209V27.5709C25.2001 28.0709 24.8001 28.4709 24.3501 28.4709Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="space-y-4">
            <div className="h-3 w-full rounded-full bg-gradient-to-r from-gray-1 to-gray-4 dark:from-dark-4 dark:to-dark-5"></div>
            <div className="h-3 w-4/6 rounded-full bg-gradient-to-r from-gray-1 to-gray-4 dark:from-dark-4 dark:to-dark-5"></div>
            <div className="h-3 w-5/6 rounded-full bg-gradient-to-r from-gray-1 to-gray-4 dark:from-dark-4 dark:to-dark-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
