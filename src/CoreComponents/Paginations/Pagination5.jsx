import React from "react";

export default function Pagination5() {
  return (
    <div className="bg-white py-10 text-center dark:bg-dark">
      <div>
        <ul className="mx-auto flex w-full max-w-[415px] items-center justify-between">
          <li>
            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-base font-medium text-dark hover:bg-gray-2 dark:text-white dark:hover:bg-white/5">
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.325 14.825C11.175 14.825 11.025 14.775 10.925 14.65L5.27495 8.90002C5.04995 8.67502 5.04995 8.32503 5.27495 8.10002L10.925 2.35002C11.15 2.12502 11.5 2.12502 11.725 2.35002C11.95 2.57502 11.95 2.92502 11.725 3.15002L6.47495 8.50003L11.75 13.85C11.975 14.075 11.975 14.425 11.75 14.65C11.6 14.75 11.475 14.825 11.325 14.825Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="max-sm:hidden"> Previous </span>
            </button>
          </li>
          <p className="text-base font-medium text-dark dark:text-white">
            Page 1 to 10
          </p>
          <li>
            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-base font-medium text-dark hover:bg-gray-2 dark:text-white dark:hover:bg-white/5">
              <span className="max-sm:hidden"> Next </span>
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.67495 14.825C5.52495 14.825 5.39995 14.775 5.27495 14.675C5.04995 14.45 5.04995 14.1 5.27495 13.875L10.525 8.50003L5.27495 3.15002C5.04995 2.92502 5.04995 2.57502 5.27495 2.35002C5.49995 2.12502 5.84995 2.12502 6.07495 2.35002L11.725 8.10002C11.95 8.32503 11.95 8.67502 11.725 8.90002L6.07495 14.65C5.97495 14.75 5.82495 14.825 5.67495 14.825Z"
                    fill="currentCOlor"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
