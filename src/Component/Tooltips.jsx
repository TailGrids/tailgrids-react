import React from "react";

const Tooltips = () => {
  return (
    <>
      <>
        {/* ====== Tooltips Section Start */}
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container py-12">
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-primary py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on top
                    </button>
                    <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-primary py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on right
                    </button>
                    <div className="absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-primary py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on bottom
                    </button>
                    <div className="absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="text-right mb-14 sm:text-left">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-primary py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on left
                    </button>
                    <div className="absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-12">
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-primary py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on top
                    </button>
                    <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded border border-light bg-white py-[6px] px-4 text-sm font-semibold text-body-color opacity-0 group-hover:opacity-100">
                      <span className="absolute w-2 h-2 rotate-45 -translate-x-1/2 bg-white border-b border-r rounded-l-sm -bottom-1 left-1/2 -z-10 border-light" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-primary py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on right
                    </button>
                    <div className="absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded border border-light bg-white py-[6px] px-4 text-sm font-semibold text-body-color opacity-0 group-hover:opacity-100">
                      <span className="absolute w-2 h-2 rotate-45 -translate-y-1/2 bg-white border-b border-l rounded-r-sm -left-1 top-1/2 -z-10 border-light" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-primary py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on bottom
                    </button>
                    <div className="absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded border border-light bg-white py-[6px] px-4 text-sm font-semibold text-body-color opacity-0 group-hover:opacity-100">
                      <span className="absolute w-2 h-2 rotate-45 -translate-x-1/2 bg-white border-t border-l rounded-sm -top-1 left-1/2 -z-10 border-light" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="text-right mb-14 sm:text-left">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-primary py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on left
                    </button>
                    <div className="absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded border border-light bg-white py-[6px] px-4 text-sm font-semibold text-body-color opacity-0 group-hover:opacity-100">
                      <span className="absolute w-2 h-2 rotate-45 -translate-y-1/2 bg-white border-t border-r rounded-sm -right-1 top-1/2 -z-10 border-light" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-12">
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-black py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on top
                    </button>
                    <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-primary py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-black py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on right
                    </button>
                    <div className="absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-primary py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-primary" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="mb-14">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-black py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on bottom
                    </button>
                    <div className="absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-primary py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="text-right mb-14 sm:text-left">
                  <div className="relative inline-block group">
                    <button className="inline-flex rounded bg-black py-2 px-[18px] text-base font-semibold text-white">
                      Tooltip on left
                    </button>
                    <div className="absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded bg-primary py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-primary" />
                      Tooltip Text
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Tooltips Section End */}
      </>
    </>
  );
};

export default Tooltips;
