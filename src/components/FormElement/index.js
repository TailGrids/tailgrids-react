import React from "react";

const FormElement = ({
  level,
  active,
  disabled,
  theme = "primary",
  placeholder,
  defaultValue,
  input,
  textArea,
  fileInput,
  Options,
  rows = "5",
  children,
}) => {
  return (
    <>
      {input && (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-12">
            <label
              htmlFor=""
              className="block mb-3 text-base font-medium text-black"
            >
              {level}
            </label>

            {disabled ? (
              <input
                type="text"
                disabled
                placeholder={placeholder}
                className={`w-full rounded-lg border-[1.5px] py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary ${
                  active && " border-primary"
                } disabled:cursor-default disabled:bg-[#F5F7FD]`}
              />
            ) : (
              <input
                type="text"
                placeholder={placeholder}
                className={`w-full rounded-lg border-[1.5px] py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-${theme} active:border-${theme} ${
                  active && ` border-${theme}`
                } disabled:cursor-default disabled:bg-[#F5F7FD]`}
              />
            )}
          </div>
        </div>
      )}

      {textArea && (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-12">
            <label
              htmlFor=""
              className="block mb-3 text-base font-medium text-black"
            >
              {level}
            </label>
            {disabled ? (
              <textarea
                rows={rows}
                disabled
                placeholder={placeholder}
                className={`w-full rounded-lg border-[1.5px] border-${theme} py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-${theme} ${
                  active && ` border-${theme}`
                } disabled:cursor-default disabled:bg-[#F5F7FD] `}
                defaultValue={defaultValue}
              />
            ) : (
              <textarea
                rows={rows}
                placeholder={placeholder}
                className={`w-full rounded-lg border-[1.5px]  py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-${theme} ${
                  active && ` border-${theme}`
                } disabled:cursor-default disabled:bg-[#F5F7FD] `}
                defaultValue={defaultValue}
              />
            )}
          </div>
        </div>
      )}

      {fileInput && (
        <div className="w-full px-4 lg:w-5/12">
          <div className="mb-12">
            <label
              htmlFor=""
              className="block mb-3 text-base font-medium text-black"
            >
              {level}
            </label>
            <input
              type="file"
              className={`w-full cursor-pointer rounded-lg border-[1.5px] border-form-stroke font-medium text-body-color placeholder-body-color outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-form-stroke file:bg-${theme} file:py-3 file:px-5 file:text-body-color file:hover:bg-${theme} file:hover:bg-opacity-10 focus:border-${theme} active:border-prima${theme}ry disabled:cursor-default disabled:bg-[#F5F7FD]`}
            />
          </div>
        </div>
      )}

      {Options && (
        <div className="w-full px-4 lg:w-5/12">
          <div className="mb-12">
            <label
              htmlFor=""
              className="block mb-3 text-base font-medium text-black"
            >
              {level}
            </label>
            <div className="relative">
              <select
                className={`w-full appearance-none rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color outline-none transition focus:border-${theme} active:border-${theme} disabled:cursor-default disabled:bg-[#F5F7FD]`}
              >
                {children}
              </select>
              <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormElement;
