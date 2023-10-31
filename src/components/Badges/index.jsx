import React from "react";

const Badges = ({
  primary,
  secondary,
  gray,
  dark,
  light,
  warning,
  danger,
  success,
  info,
  outline,
  roundedFull,
  roundedLg,
  roundedNone,
  roundedSm,
  roundedMd,
  label,
  bgOpacity,
}) => {
  return (
    <>
      <span
        className={`inline-block px-3 py-1 text-sm font-semibold  ${
          (primary &&
            `${
              outline
                ? `border ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`) ||
                    (bgOpacity && `bg-opacity-5`)
                  } border-primary text-primary`
                : `bg-primary ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`) ||
                    (bgOpacity && `bg-opacity-5`)
                  } text-white`
            }`) ||
          (secondary &&
            `${
              outline
                ? `border ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } border-secondary text-secondary`
                : `bg-secondary ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } text-white`
            }`) ||
          (dark &&
            `${
              outline
                ? `border ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } border-black text-black`
                : `bg-black ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } text-white`
            }`) ||
          (gray &&
            `${
              outline
                ? `border ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } border-body-color text-body-color`
                : `bg-body-color ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } text-white`
            }`) ||
          (light &&
            `${
              outline
                ? `border ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } border-light text-black`
                : `bg-light ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } text-black`
            }`) ||
          (warning &&
            `${
              outline
                ? `border ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } border-warning text-warning`
                : `bg-warning ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } text-black`
            }`) ||
          (danger &&
            `${
              outline
                ? `border ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } border-danger text-danger`
                : `bg-danger ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } text-white`
            }`) ||
          (success &&
            `${
              outline
                ? `border ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } border-success text-success`
                : `bg-success ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } text-white`
            }`) ||
          (info &&
            `${
              outline
                ? `border ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } border-info text-info`
                : `bg-info ${
                    (roundedFull && `rounded-full`) ||
                    (roundedLg && `rounded-lg`) ||
                    (roundedNone && `rounded-none`) ||
                    (roundedSm && `rounded-sm`) ||
                    (roundedMd && `rounded-md`)
                  } text-white`
            }`)
        }`}
      >
        {label}
      </span>
    </>
  )
};

export default Badges;
