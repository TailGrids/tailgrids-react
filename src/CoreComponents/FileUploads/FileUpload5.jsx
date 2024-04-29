import React from "react";

export default function FileUpload5() {
  return (
    <section className="bg-dark py-20">
      <div className="container">
        <div className="relative mx-auto w-full max-w-[570px] rounded-[20px] bg-white/10 p-4 shadow-lg">
          <div className="relative z-10 flex min-h-[328px] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-dark-6 bg-white/10 p-6 md:p-10">
            <label for="">
              <input type="file" className="sr-only" />
              <div className="mx-auto mb-5 flex aspect-square w-[68px] items-center justify-center rounded-full bg-gray-3 text-dark">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5438 4.85623H14.4376L13.5188 3.10623C13.0376 2.23123 12.1626 1.66248 11.1563 1.66248H3.45635C1.96885 1.66248 0.787598 2.84373 0.787598 4.33123V23.6687C0.787598 25.1562 1.96885 26.3375 3.45635 26.3375H24.5876C26.0751 26.3375 27.2563 25.1562 27.2563 23.6687V7.52498C27.2563 6.03748 26.0313 4.85623 24.5438 4.85623ZM25.2876 23.6687C25.2876 24.0625 24.9813 24.3687 24.5876 24.3687H3.45635C3.0626 24.3687 2.75635 24.0625 2.75635 23.6687V4.33123C2.75635 3.93748 3.0626 3.63123 3.45635 3.63123H11.1563C11.4188 3.63123 11.6376 3.76248 11.7688 4.02498L12.9938 6.29998C13.1688 6.60623 13.5188 6.82498 13.8688 6.82498H24.5876C24.9813 6.82498 25.2876 7.13123 25.2876 7.52498V23.6687Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.7 10.675C14.3063 10.2812 13.6938 10.2812 13.3 10.675L9.4938 14.4375C9.10005 14.8312 9.10005 15.4437 9.4938 15.8375C9.88755 16.2312 10.5 16.2312 10.8938 15.8375L13.0375 13.7375V20.125C13.0375 20.65 13.475 21.1312 14.0438 21.1312C14.6125 21.1312 15.0063 20.6937 15.0063 20.125V13.6937L17.1938 15.8375C17.3688 16.0125 17.6313 16.1 17.8938 16.1C18.1563 16.1 18.4188 16.0125 18.5938 15.7937C18.9875 15.4 18.9875 14.7875 18.5938 14.3937L14.7 10.675Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="mx-auto w-full max-w-[290px] text-center">
                <h3 className="mb-3 text-xl font-bold text-white">
                  Drop File Here
                </h3>
                <p className="mb-5 text-base text-dark-6">
                  Drag and drop your PNG, JPG, WebP, SVG images here or browse
                </p>
                <div className="mx-auto my-5 flex w-full max-w-[210px] items-center justify-center gap-2.5">
                  <div className="block h-px w-full bg-white/10"></div>
                  <span className="text-base text-dark-6"> OR </span>
                  <div className="block h-px w-full bg-white/10"></div>
                </div>
                <button className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-200 hover:bg-primary/90">
                  Browse File
                </button>
              </div>
            </label>
            <div className="absolute -top-7 left-1/2 -z-10 -translate-x-1/2 dark:opacity-20">
              <img
                src="https://cdn.tailgrids.com/2.2/assets/core-components/images/file-upload/grid-shape-1.svg"
                alt="grid-shape-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
