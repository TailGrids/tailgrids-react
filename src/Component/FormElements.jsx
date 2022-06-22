import React from "react";

const FormElements = () => {
  return (
    <>
      <>
        {/* ====== Form Elements Section Start */}
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-12">
                  <label
                    htmlFor=""
                    className="block mb-3 text-base font-medium text-black"
                  >
                    Default Input
                  </label>
                  <input
                    type="text"
                    placeholder="Default Input"
                    className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-12">
                  <label
                    htmlFor=""
                    className="block mb-3 text-base font-medium text-black"
                  >
                    Active Input
                  </label>
                  <input
                    type="text"
                    placeholder="Active Input"
                    className="w-full rounded-lg border-[1.5px] border-primary py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-12">
                  <label
                    htmlFor=""
                    className="block mb-3 text-base font-medium text-black"
                  >
                    Disabled label
                  </label>
                  <input
                    type="text"
                    placeholder="Disabled Input"
                    disabled=""
                    className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-12">
                  <label
                    htmlFor=""
                    className="block mb-3 text-base font-medium text-black"
                  >
                    Default textarea
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Default textarea"
                    className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-12">
                  <label
                    htmlFor=""
                    className="block mb-3 text-base font-medium text-black"
                  >
                    Active textarea
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Active textarea"
                    className="w-full rounded-lg border-[1.5px] border-primary py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-12">
                  <label
                    htmlFor=""
                    className="block mb-3 text-base font-medium text-black"
                  >
                    Disabled textarea
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Disabled textarea"
                    disabled=""
                    className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-5/12">
                <div className="mb-12">
                  <label
                    htmlFor=""
                    className="block mb-3 text-base font-medium text-black"
                  >
                    Default file input
                  </label>
                  <input
                    type="file"
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-form-stroke font-medium text-body-color placeholder-body-color outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-form-stroke file:bg-[#F5F7FD] file:py-3 file:px-5 file:text-body-color file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-5/12">
                <div className="mb-12">
                  <label
                    htmlFor=""
                    className="block mb-3 text-base font-medium text-black"
                  >
                    Default Select
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]">
                      <option value="">Option</option>
                      <option value="">Option</option>
                      <option value="">Option</option>
                    </select>
                    <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Form Elements Section End */}
      </>
    </>
  );
};

export default FormElements;
