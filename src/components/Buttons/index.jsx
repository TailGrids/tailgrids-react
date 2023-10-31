import React from "react";

const Button = ({
  roundedFull,
  roundedLg,
  roundedNone,
  roundedSm,
  roundedMd,
  label,
  color = "primary",
  secondary,
  gray,
  dark,
  warning,
  danger,
  success,
  info,
  outline,
}) => {
  return (
    <>
      <a
        href="/#"
        className={` inline-flex items-center justify-center px-7 py-4 text-center text-base ${
          outline ? `bg-none  ` : `bg-${color} text-white `
        } font-normal hover:bg-opacity-90  ${
          (roundedLg && "rounded-lg") ||
          (roundedFull && "rounded-full") ||
          (roundedSm && "rounded-sm") ||
          (roundedNone && "rounded-none") ||
          (roundedMd && "rounded-md")
        } border ${
          (danger &&
            outline &&
            `border-danger  hover:border-danger text-danger hover:border-opacity-90`) ||
          (warning &&
            outline &&
            `border-warning  hover:border-warning  text-warning hover:border-opacity-90`) ||
          (success &&
            outline &&
            `border-success  text-success  hover:border-success hover:border-opacity-90`) ||
          (info &&
            outline &&
            `border-info  hover:border-info  text-info hover:border-opacity-90`) ||
          (dark &&
            outline &&
            `border-dark  text-dark  hover:border-dark hover:border-opacity-90`) ||
          (secondary &&
            outline &&
            `border-secondary  text-secondary  hover:border-secondary hover:border-opacity-90`) ||
          (gray &&
            outline &&
            `border-body-color  text-body-color  hover:border-body-color hover:border-opacity-90`)
        }`}
      >
        {label}
      </a>
    </>
  );
};

export default Button;
