import React from "react";

export default function FileUpload4() {
  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container">
        <div className="relative mx-auto w-full max-w-[650px] rounded-xl bg-white shadow-lg dark:bg-dark-2">
          <div className="px-7 py-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-dark dark:text-white">
                Upload Files
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                You can only upload file at a time. File limit is 20 MB.
              </p>
            </div>
            <div className="mb-6">
              <label
                for=""
                className="flex min-h-[260px] items-center justify-center rounded-lg border border-dashed border-dark-6 bg-gray-1 p-10 dark:border-dark-3 dark:bg-white/5"
              >
                <div>
                  <div className="mx-auto mb-5 flex aspect-square w-[68px] items-center justify-center rounded-full bg-gray-3 text-dark dark:bg-white/5 dark:text-white">
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
                        d="M14.7003 10.675C14.3065 10.2812 13.694 10.2812 13.3003 10.675L9.49404 14.4375C9.10029 14.8312 9.10029 15.4437 9.49404 15.8375C9.88779 16.2312 10.5003 16.2312 10.894 15.8375L13.0378 13.7375V20.125C13.0378 20.65 13.4753 21.1312 14.044 21.1312C14.6128 21.1312 15.0065 20.6937 15.0065 20.125V13.6937L17.194 15.8375C17.369 16.0125 17.6315 16.1 17.894 16.1C18.1565 16.1 18.419 16.0125 18.594 15.7937C18.9878 15.4 18.9878 14.7875 18.594 14.3937L14.7003 10.675Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-center text-base text-dark-4 dark:text-dark-6">
                      Drag and drop your files here or
                      <button className="font-medium text-primary">
                        Browse
                      </button>
                    </p>
                    <p className="text-center text-sm text-dark-4 dark:text-dark-6">
                      Max 10 MB files are allowed
                    </p>
                  </div>
                </div>
              </label>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                Uploads:
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between overflow-hidden rounded-lg border border-stroke p-3 pr-5 dark:border-dark-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[52px] w-[50px] items-center justify-center rounded-md bg-primary text-white">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5624 0.674988H5.4374C4.1624 0.674988 3.1499 1.68749 3.1499 2.96249V15C3.1499 15.5625 3.3749 16.0875 3.7874 16.4625L10.5374 22.8375C10.9124 23.2125 11.3999 23.4 11.9249 23.4H18.5249C19.7999 23.4 20.8124 22.3875 20.8124 21.1125V2.96249C20.8499 1.68749 19.7999 0.674988 18.5624 0.674988ZM6.0749 16.275H10.4624C10.6499 16.275 10.7999 16.425 10.7999 16.575V20.7L6.0749 16.275ZM19.1624 21.0375C19.1624 21.375 18.8999 21.6375 18.5624 21.6375H12.4874V16.575C12.4874 15.4875 11.5874 14.5875 10.4624 14.5875H4.8374V2.96249C4.8374 2.62499 5.0999 2.36249 5.4374 2.36249H18.5249C18.8624 2.36249 19.1249 2.62499 19.1249 2.96249V21.0375H19.1624Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base text-dark dark:text-white">
                        randomfile.pdf
                      </p>
                      <p className="text-base text-body-color dark:text-dark-6">
                        20.5 KB
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="flex items-center justify-center gap-2 rounded-lg border border-stroke px-3 py-2 text-sm font-medium text-dark-4 duration-200 hover:bg-dark hover:text-white dark:border-dark-3 dark:text-dark-6">
                      Remove upload
                      <span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_2330_10311)">
                            <path
                              d="M6.5998 5.99999L11.1748 1.42499C11.3436 1.25624 11.3436 0.993738 11.1748 0.824988C11.0061 0.656238 10.7436 0.656238 10.5748 0.824988L5.9998 5.39999L1.4248 0.824988C1.25605 0.656238 0.993555 0.656238 0.824805 0.824988C0.656055 0.993738 0.656055 1.25624 0.824805 1.42499L5.3998 5.99999L0.824805 10.575C0.656055 10.7437 0.656055 11.0062 0.824805 11.175C0.899805 11.25 1.0123 11.3062 1.1248 11.3062C1.2373 11.3062 1.3498 11.2687 1.4248 11.175L5.9998 6.59999L10.5748 11.175C10.6498 11.25 10.7623 11.3062 10.8748 11.3062C10.9873 11.3062 11.0998 11.2687 11.1748 11.175C11.3436 11.0062 11.3436 10.7437 11.1748 10.575L6.5998 5.99999Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2330_10311">
                              <rect width="12" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="relative flex items-center justify-between overflow-hidden rounded-lg border border-stroke p-3 pr-5 dark:border-dark-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[52px] w-[50px] items-center justify-center rounded-md bg-primary text-white">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5624 0.674988H5.4374C4.1624 0.674988 3.1499 1.68749 3.1499 2.96249V15C3.1499 15.5625 3.3749 16.0875 3.7874 16.4625L10.5374 22.8375C10.9124 23.2125 11.3999 23.4 11.9249 23.4H18.5249C19.7999 23.4 20.8124 22.3875 20.8124 21.1125V2.96249C20.8499 1.68749 19.7999 0.674988 18.5624 0.674988ZM6.0749 16.275H10.4624C10.6499 16.275 10.7999 16.425 10.7999 16.575V20.7L6.0749 16.275ZM19.1624 21.0375C19.1624 21.375 18.8999 21.6375 18.5624 21.6375H12.4874V16.575C12.4874 15.4875 11.5874 14.5875 10.4624 14.5875H4.8374V2.96249C4.8374 2.62499 5.0999 2.36249 5.4374 2.36249H18.5249C18.8624 2.36249 19.1249 2.62499 19.1249 2.96249V21.0375H19.1624Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base text-dark dark:text-white">
                        screenshort.jpg
                      </p>
                      <p className="text-base text-body-color dark:text-dark-6">
                        uploading...
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="flex items-center justify-center gap-2 rounded-lg border border-stroke px-3 py-2 text-sm font-medium text-dark-4 duration-200 hover:bg-dark hover:text-white dark:border-dark-3 dark:text-dark-6">
                      Remove upload
                      <span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_2330_10311)">
                            <path
                              d="M6.5998 5.99999L11.1748 1.42499C11.3436 1.25624 11.3436 0.993738 11.1748 0.824988C11.0061 0.656238 10.7436 0.656238 10.5748 0.824988L5.9998 5.39999L1.4248 0.824988C1.25605 0.656238 0.993555 0.656238 0.824805 0.824988C0.656055 0.993738 0.656055 1.25624 0.824805 1.42499L5.3998 5.99999L0.824805 10.575C0.656055 10.7437 0.656055 11.0062 0.824805 11.175C0.899805 11.25 1.0123 11.3062 1.1248 11.3062C1.2373 11.3062 1.3498 11.2687 1.4248 11.175L5.9998 6.59999L10.5748 11.175C10.6498 11.25 10.7623 11.3062 10.8748 11.3062C10.9873 11.3062 11.0998 11.2687 11.1748 11.175C11.3436 11.0062 11.3436 10.7437 11.1748 10.575L6.5998 5.99999Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2330_10311">
                              <rect width="12" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-primary"></div>
                </div>
                <div className="flex items-center justify-between overflow-hidden rounded-lg border border-stroke p-3 pr-5 dark:border-dark-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[52px] w-[50px] items-center justify-center rounded-md bg-primary text-white">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5624 0.674988H5.4374C4.1624 0.674988 3.1499 1.68749 3.1499 2.96249V15C3.1499 15.5625 3.3749 16.0875 3.7874 16.4625L10.5374 22.8375C10.9124 23.2125 11.3999 23.4 11.9249 23.4H18.5249C19.7999 23.4 20.8124 22.3875 20.8124 21.1125V2.96249C20.8499 1.68749 19.7999 0.674988 18.5624 0.674988ZM6.0749 16.275H10.4624C10.6499 16.275 10.7999 16.425 10.7999 16.575V20.7L6.0749 16.275ZM19.1624 21.0375C19.1624 21.375 18.8999 21.6375 18.5624 21.6375H12.4874V16.575C12.4874 15.4875 11.5874 14.5875 10.4624 14.5875H4.8374V2.96249C4.8374 2.62499 5.0999 2.36249 5.4374 2.36249H18.5249C18.8624 2.36249 19.1249 2.62499 19.1249 2.96249V21.0375H19.1624Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base text-dark dark:text-white">
                        text-file.pdf
                      </p>
                      <p className="text-base text-body-color dark:text-dark-6">
                        14.5 KB
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="flex items-center justify-center gap-2 rounded-lg border border-stroke px-3 py-2 text-sm font-medium text-dark-4 duration-200 hover:bg-dark hover:text-white dark:border-dark-3 dark:text-dark-6">
                      Remove upload
                      <span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_2330_10311)">
                            <path
                              d="M6.5998 5.99999L11.1748 1.42499C11.3436 1.25624 11.3436 0.993738 11.1748 0.824988C11.0061 0.656238 10.7436 0.656238 10.5748 0.824988L5.9998 5.39999L1.4248 0.824988C1.25605 0.656238 0.993555 0.656238 0.824805 0.824988C0.656055 0.993738 0.656055 1.25624 0.824805 1.42499L5.3998 5.99999L0.824805 10.575C0.656055 10.7437 0.656055 11.0062 0.824805 11.175C0.899805 11.25 1.0123 11.3062 1.1248 11.3062C1.2373 11.3062 1.3498 11.2687 1.4248 11.175L5.9998 6.59999L10.5748 11.175C10.6498 11.25 10.7623 11.3062 10.8748 11.3062C10.9873 11.3062 11.0998 11.2687 11.1748 11.175C11.3436 11.0062 11.3436 10.7437 11.1748 10.575L6.5998 5.99999Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2330_10311">
                              <rect width="12" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 border-t border-stroke px-7 py-5 dark:border-dark-3">
            <button className="flex h-12 items-center justify-center rounded-lg border border-stroke bg-transparent px-6 py-3 font-medium text-dark duration-200 hover:border-dark hover:bg-dark hover:text-white dark:border-dark-3 dark:text-dark-7 dark:hover:border-dark dark:hover:text-white">
              Cancel
            </button>
            <button className="flex h-12 items-center justify-center rounded-lg border border-transparent bg-primary px-6 py-3 font-medium text-white duration-200 hover:bg-primary/90">
              Upload Files
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
