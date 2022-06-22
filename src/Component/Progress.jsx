import React from "react";

const Progress = () => {
  return (
    <>
      <>
        {/* ====== Progress-bars Section Start */}
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container">
            <div className="flex flex-wrap justify-between -mx-4">
              <div className="w-full px-4 mb-10 lg:w-5/12">
                <div className="mb-8">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 w-1/2 h-full rounded-2xl bg-primary" />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 h-full w-[75%] rounded-2xl bg-primary" />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 h-full w-[90%] rounded-2xl bg-primary" />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-10 lg:w-5/12">
                <div className="mb-12">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 w-1/2 h-full rounded-2xl bg-primary">
                      <span className="absolute px-2 py-1 mb-2 text-xs font-semibold text-white rounded-sm -right-4 bottom-full bg-primary">
                        <span className="absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary" />
                        50%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-12">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 h-full w-[75%] rounded-2xl bg-primary">
                      <span className="absolute px-2 py-1 mb-2 text-xs font-semibold text-white rounded-sm -right-4 bottom-full bg-primary">
                        <span className="absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary" />
                        75%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-12">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 h-full w-[90%] rounded-2xl bg-primary">
                      <span className="absolute px-2 py-1 mb-2 text-xs font-semibold text-white rounded-sm -right-4 bottom-full bg-primary">
                        <span className="absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary" />
                        90%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-10 lg:w-5/12">
                <div className="mb-8">
                  <div className="relative w-full h-4 rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 flex items-center justify-center w-1/2 h-full text-xs font-semibold text-white rounded-2xl bg-primary">
                      50%
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="relative w-full h-4 rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 flex h-full w-[75%] items-center justify-center rounded-2xl bg-primary text-xs font-semibold text-white">
                      75%
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="relative w-full h-4 rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 flex h-full w-[90%] items-center justify-center rounded-2xl bg-primary text-xs font-semibold text-white">
                      90%
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-10 lg:w-5/12">
                <div className="mb-8">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 w-1/2 h-full rounded-2xl bg-primary" />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 h-full w-[75%] rounded-2xl bg-success" />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 h-full w-[90%] rounded-2xl bg-warning" />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 h-full w-[63%] rounded-2xl bg-danger" />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="relative h-[10px] w-full rounded-2xl bg-light">
                    <div className="absolute top-0 left-0 h-full w-[45%] rounded-2xl bg-info" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Progress-bars Section End */}
      </>
    </>
  );
};

export default Progress;
