import React from "react";

export default function Clipboard4() {
  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container">
        <div className="mx-auto w-full max-w-[500px]">
          <div className="relative">
            <textarea
              rows="6"
              value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              eius atque sint totam minus voluptatum quibusdam pariatur ut
              perferendis commodi eos vero ipsum, nostrum doloribus quae.
              Dolores incidunt earum ad."
              className="w-full rounded-lg border border-stroke bg-gray-1 p-5 leading-relaxed text-body-color outline-none duration-200 focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6"
            />
            <button className="absolute right-5 top-5 inline-flex h-8 items-center justify-center gap-1 rounded-md border border-stroke bg-white px-2.5 py-1.5 text-sm font-medium text-dark duration-200 hover:bg-dark hover:text-white dark:border-dark-3">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.15 3.29999L11.525 0.699988C11.35 0.524988 11.1 0.424988 10.85 0.424988H6.30004C5.57504 0.424988 4.97504 1.02499 4.97504 1.74999V10.875C4.97504 11.6 5.57504 12.2 6.30004 12.2H13.1C13.825 12.2 14.425 11.6 14.425 10.875V3.97499C14.425 3.72499 14.325 3.47499 14.15 3.29999ZM11.575 2.34999L12.525 3.29999H11.575V2.34999ZM13.1 11.075H6.30004C6.20004 11.075 6.10004 10.975 6.10004 10.875V1.74999C6.10004 1.64999 6.20004 1.54999 6.30004 1.54999H10.45V3.84999C10.45 4.14999 10.7 4.42499 11.025 4.42499H13.3V10.9C13.3 11 13.2 11.075 13.1 11.075Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.025 5.625H7.72502C7.42502 5.625 7.15002 5.875 7.15002 6.2C7.15002 6.525 7.40002 6.775 7.72502 6.775H11.025C11.325 6.775 11.6 6.525 11.6 6.2C11.6 5.875 11.325 5.625 11.025 5.625Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.025 7.72498H7.72502C7.42502 7.72498 7.15002 7.97498 7.15002 8.29998C7.15002 8.59998 7.40002 8.87498 7.72502 8.87498H11.025C11.325 8.87498 11.6 8.62498 11.6 8.29998C11.575 7.97498 11.325 7.72498 11.025 7.72498Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.45 13C10.15 13 9.87501 13.25 9.87501 13.575V14.25C9.87501 14.35 9.77501 14.45 9.67501 14.45H2.90001C2.80001 14.45 2.70001 14.35 2.70001 14.25V5.1C2.70001 5 2.80001 4.9 2.90001 4.9H3.75001C4.05001 4.9 4.32501 4.65 4.32501 4.325C4.32501 4 4.07501 3.75 3.75001 3.75H2.90001C2.17501 3.75 1.57501 4.35 1.57501 5.075V14.25C1.57501 14.975 2.17501 15.575 2.90001 15.575H9.70001C10.425 15.575 11.025 14.975 11.025 14.25V13.575C11.025 13.25 10.775 13 10.45 13Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
