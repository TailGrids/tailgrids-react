import React from "react";

const Progress = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="mb-10 w-full px-4 lg:w-5/12">
            <div className="mb-8">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-1/2 rounded-2xl bg-primary"></div>
              </div>
            </div>
            <div className="mb-8">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-[75%] rounded-2xl bg-primary"></div>
              </div>
            </div>
            <div className="mb-8">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-[90%] rounded-2xl bg-primary"></div>
              </div>
            </div>
          </div>

          <div className="mb-10 w-full px-4 lg:w-5/12">
            <div className="mb-12">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-1/2 rounded-2xl bg-primary">
                  <span className="absolute -right-4 bottom-full mb-2 rounded-sm bg-primary px-3.5 py-1 text-sm text-white">
                    <span className="absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary"></span>
                    50%
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-[75%] rounded-2xl bg-primary">
                  <span className="absolute -right-4 bottom-full mb-2 rounded-sm bg-primary px-3.5 py-1 text-sm text-white">
                    <span className="absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary"></span>
                    75%
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-[90%] rounded-2xl bg-primary">
                  <span className="absolute -right-4 bottom-full mb-2 rounded-sm bg-primary px-3.5 py-1 text-sm text-white">
                    <span className="absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary"></span>
                    90%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 w-full px-4 lg:w-5/12">
            <div className="mb-8">
              <div className="relative h-4 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 flex h-full w-1/2 items-center justify-center rounded-2xl bg-primary text-xs font-semibold text-white">
                  50%
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="relative h-4 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 flex h-full w-[75%] items-center justify-center rounded-2xl bg-primary text-xs font-semibold text-white">
                  75%
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="relative h-4 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 flex h-full w-[90%] items-center justify-center rounded-2xl bg-primary text-xs font-semibold text-white">
                  90%
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 w-full px-4 lg:w-5/12">
            <div className="mb-8">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-1/2 rounded-2xl bg-primary"></div>
              </div>
            </div>
            <div className="mb-8">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-[75%] rounded-2xl bg-green"></div>
              </div>
            </div>
            <div className="mb-8">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-[90%] rounded-2xl bg-yellow"></div>
              </div>
            </div>
            <div className="mb-8">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-[63%] rounded-2xl bg-red"></div>
              </div>
            </div>
            <div className="mb-8">
              <div className="relative h-2.5 w-full rounded-2xl bg-stroke dark:bg-dark-3">
                <div className="absolute left-0 top-0 h-full w-[45%] rounded-2xl bg-cyan"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
