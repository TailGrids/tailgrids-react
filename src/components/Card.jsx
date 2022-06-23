import React from "react";

const Card = () => {
  return (
    <>
      <>
        {/* ====== Cards Section Start */}
        <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden bg-white rounded-lg">
                  <img
                    src="https://i.ibb.co/r2zns1m/image-01.jpg"
                    alt=""
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="/#"
                        className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        50+ Best creative website themes &amp; templates
                      </a>
                    </h3>
                    <p className="text-base leading-relaxed mb-7 text-body-color">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="/#"
                      className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden bg-white rounded-lg">
                  <img
                    src="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
                    alt=""
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="/#"
                        className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        The ultimate UX and UI guide to card design
                      </a>
                    </h3>
                    <p className="text-base leading-relaxed mb-7 text-body-color">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="/#"
                      className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden bg-white rounded-lg">
                  <img
                    src="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
                    alt=""
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="/#"
                        className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        Creative Card Component designs graphic elements
                      </a>
                    </h3>
                    <p className="text-base leading-relaxed mb-7 text-body-color">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="/#"
                      className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Cards Section End */}
      </>
    </>
  );
};

export default Card;
