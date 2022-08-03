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
        class={` py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-base ${
          outline
            ? `bg-none hover:bg-${color} text-white  `
            : `bg-${color} text-white `
        } hover:bg-opacity-90 font-normal  ${
          (roundedLg && "rounded-lg") ||
          (roundedFull && "rounded-full") ||
          (roundedSm && "rounded-sm") ||
          (roundedNone && "rounded-none") ||
          (roundedMd && "rounded-md")
        } border ${
          (danger &&
            outline &&
            `border-danger  hover:border-danger hover:border-opacity-90 text-danger`) ||
          (warning &&
            outline &&
            `border-warning  hover:border-warning  hover:border-opacity-90 text-warning`) ||
          (success &&
            outline &&
            `border-success  hover:border-success  hover:border-opacity-90 text-success`) ||
          (info &&
            outline &&
            `border-info  hover:border-info  hover:border-opacity-90 text-info`) ||
          (dark &&
            outline &&
            `border-dark  hover:border-dark  hover:border-opacity-90 text-dark`) ||
          (secondary &&
            outline &&
            `border-secondary  hover:border-secondary  hover:border-opacity-90 text-secondary`) ||
          (gray &&
            outline &&
            `border-body-color  hover:border-body-color  hover:border-opacity-90 text-body-color`)
        }`}
      >
        {label}
      </a>
    </>
  );
};

export default Button;
