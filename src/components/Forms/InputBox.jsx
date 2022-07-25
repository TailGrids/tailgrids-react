import React from "react";

const InputBox = ({
  type,
  placeholder,
  name,
  defaultValue,
  bgColor = "primary",
}) => {
  return (
    <>
      {type === "submit" ? (
        <div className="mb-10">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={defaultValue}
            className={`w-full px-5 py-3 text-base text-white transition border rounded-md cursor-pointer bordder-primary bg-${bgColor} hover:bg-opacity-90`}
          />
        </div>
      ) : (
        <div className="mb-6">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={defaultValue}
            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
          />
        </div>
      )}
    </>
  );
};

export default InputBox;
