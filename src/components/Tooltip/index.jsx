import React from "react";

const Tooltip = ({
  children,
  tooltipsText,
  secondary,
  gray,
  dark,
  warning,
  danger,
  success,
  info,
}) => {
  console.log(tooltipsText);

  return (
    <>
      <div className="relative inline-block group">
        <button
          className={`inline-flex rounded bg-primary ${
            (secondary && `bg-secondary`) ||
            (gray && `bg-body-color`) ||
            (dark && `bg-dark`) ||
            (warning && `bg-warning`) ||
            (danger && `bg-danger`) ||
            (success && `bg-success`) ||
            (info && `bg-info`)
          }  py-2 px-[18px] text-base font-semibold text-white`}
        >
          {children}
        </button>
        <div
          className={`absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-primary ${
            (secondary && `bg-secondary`) ||
            (gray && `bg-body-color`) ||
            (dark && `bg-dark`) ||
            (warning && `bg-warning`) ||
            (danger && `bg-danger`) ||
            (success && `bg-success`) ||
            (info && `bg-info`)
          } py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`}
        >
          <span
            className={`absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-primary ${
              (secondary && `bg-secondary`) ||
              (gray && `bg-body-color`) ||
              (dark && `bg-dark`) ||
              (warning && `bg-warning`) ||
              (danger && `bg-danger`) ||
              (success && `bg-success`) ||
              (info && `bg-info`)
            }`}
          />
          {tooltipsText}
        </div>
      </div>
    </>
  );
};

export default Tooltip;
