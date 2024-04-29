import React from "react";

export default function VerificationCodeInput2() {
  return (
    <section className="bg-white py-10 dark:bg-dark">
      <div className="container">
        <div>
          <p className="mb-1.5 text-sm font-medium text-dark dark:text-white">
            Secure code
          </p>
          <div className="flex gap-2">
            <div
              contentEditable
              className="shadow-xs flex min-w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
            >
              0
            </div>
            <div
              contentEditable
              className="shadow-xs flex min-w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
            >
              0
            </div>
            <div
              contentEditable
              className="shadow-xs flex min-w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
            >
              0
            </div>
            <div
              contentEditable
              className="shadow-xs flex min-w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
            >
              0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
