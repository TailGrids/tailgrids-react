import React from "react";

const index = ({
  children,
  roundedFull,
  roundedLg,
  roundedNone,
  roundedSm,
  roundedMd,
  secondary,
  gray,
  dark,
  warning,
  danger,
  success,
  info,
  rotate,
  basic,
  OkaySign,
  crossIcon,
  arrow,
  star,
  count,
}) => {
  return (
    <>
      <div className="w-full">
        <ol>
          <li className="flex  text-base text-body-color">
            {basic && (
              <span
                className={`mr-2 flex h-6 w-full max-w-[24px] items-center justify-center bg-primary   ${
                  (roundedLg && "rounded-lg") ||
                  (roundedFull && "rounded-full") ||
                  (roundedSm && "rounded-sm") ||
                  (roundedNone && "rounded-none") ||
                  (roundedMd && "rounded-md")
                }  ${
                  (danger &&
                    `border-danger bg-danger hover:border-danger hover:bg-danger`) ||
                  (warning &&
                    `border-warning bg-warning hover:border-warning hover:bg-warning`) ||
                  (success &&
                    `border-success bg-success hover:border-success hover:bg-success`) ||
                  (info &&
                    `border-info bg-info hover:border-info hover:bg-info`) ||
                  (dark &&
                    `border-dark bg-dark hover:border-dark hover:bg-dark`) ||
                  (secondary &&
                    `border-secondary bg-secondary hover:border-secondary hover:bg-secondary`) ||
                  (gray &&
                    `border-body-color bg-body-color hover:border-body-color hover:bg-body-color`)
                }  text-base text-white`}
              >
                {count}
              </span>
            )}
            {rotate && (
              <span className="relative z-10 mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded text-base text-white">
                <span
                  className={`absolute top-0 left-0 z-[-1] h-full w-full -rotate-45 rounded ${
                    (roundedLg && "rounded-lg") ||
                    (roundedFull && "rounded-full") ||
                    (roundedSm && "rounded-sm") ||
                    (roundedNone && "rounded-none") ||
                    (roundedMd && "rounded-md")
                  }  ${
                    (danger &&
                      `border-danger bg-danger hover:border-danger hover:bg-danger`) ||
                    (warning &&
                      `border-warning bg-warning hover:border-warning hover:bg-warning`) ||
                    (success &&
                      `border-success bg-success hover:border-success hover:bg-success`) ||
                    (info &&
                      `border-info bg-info hover:border-info hover:bg-info`) ||
                    (dark &&
                      `border-dark bg-dark hover:border-dark hover:bg-dark`) ||
                    (secondary &&
                      `border-secondary bg-secondary hover:border-secondary hover:bg-secondary`) ||
                    (gray &&
                      `border-body-color bg-body-color hover:border-body-color hover:bg-body-color`)
                  }`}
                />
                {count}
              </span>
            )}

            {OkaySign && (
              <span
                className={`mr-2 text-base  ${
                  (roundedLg && "rounded-lg") ||
                  (roundedFull && "rounded-full") ||
                  (roundedSm && "rounded-sm") ||
                  (roundedNone && "rounded-none") ||
                  (roundedMd && "rounded-md")
                }  ${
                  (danger && `text-danger`) ||
                  (warning && `text-warning`) ||
                  (success && `text-success`) ||
                  (info && `text-info`) ||
                  (dark && `text-dark`) ||
                  (secondary && `text-secondary`) ||
                  (gray && `text-body-color`)
                }`}
              >
                {crossIcon ? (
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    className="fill-current"
                  >
                    <path d="M10 0.40625C4.6875 0.40625 0.40625 4.6875 0.40625 10C0.40625 15.3125 4.6875 19.625 10 19.625C15.3125 19.625 19.625 15.3125 19.625 10C19.625 4.6875 15.3125 0.40625 10 0.40625ZM10 18.5312C5.3125 18.5312 1.5 14.6875 1.5 10C1.5 5.3125 5.3125 1.5 10 1.5C14.6875 1.5 18.5312 5.3125 18.5312 10C18.5312 14.6875 14.6875 18.5312 10 18.5312Z" />
                    <path d="M12.875 7.125C12.6563 6.90625 12.3125 6.90625 12.0938 7.125L10 9.21875L7.90625 7.125C7.6875 6.90625 7.34375 6.90625 7.125 7.125C6.90625 7.34375 6.90625 7.6875 7.125 7.90625L9.21875 10L7.125 12.0937C6.90625 12.3125 6.90625 12.6562 7.125 12.875C7.21875 12.9687 7.375 13.0312 7.5 13.0312C7.625 13.0312 7.78125 12.9687 7.875 12.875L9.96875 10.7812L12.0625 12.875C12.1563 12.9687 12.3125 13.0312 12.4375 13.0312C12.5625 13.0312 12.7188 12.9687 12.8125 12.875C13.0313 12.6562 13.0313 12.3125 12.8125 12.0937L10.7813 10L12.875 7.90625C13.0625 7.6875 13.0625 7.34375 12.875 7.125Z" />
                  </svg>
                ) : (
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    className="fill-current"
                  >
                    <path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z" />
                    <path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z" />
                  </svg>
                )}
              </span>
            )}

            {arrow && (
              <span
                className={`flex items-center mr-2 text-base rounded-full ${
                  (roundedLg && "rounded-lg") ||
                  (roundedFull && "rounded-full") ||
                  (roundedSm && "rounded-sm") ||
                  (roundedNone && "rounded-none") ||
                  (roundedMd && "rounded-md")
                }  ${
                  (danger && `text-danger`) ||
                  (warning && `text-warning`) ||
                  (success && `text-success`) ||
                  (info && `text-info`) ||
                  (dark && `text-dark`) ||
                  (secondary && `text-secondary`) ||
                  (gray && `text-body-color`)
                }`}
              >
                <svg
                  width={20}
                  height={8}
                  viewBox="0 0 20 8"
                  className="fill-current"
                >
                  <path d="M19.2188 2.90626L17.0625 0.343758C16.875 0.125008 16.5312 0.0937583 16.2812 0.281258C16.0625 0.468758 16.0312 0.812508 16.2188 1.06251L18.25 3.46876H0.9375C0.625 3.46876 0.375 3.71876 0.375 4.03126C0.375 4.34376 0.625 4.59376 0.9375 4.59376H18.25L16.2188 7.00001C16.0312 7.21876 16.0625 7.56251 16.2812 7.78126C16.375 7.87501 16.5 7.90626 16.625 7.90626C16.7812 7.90626 16.9375 7.84376 17.0312 7.71876L19.1875 5.15626C19.75 4.46876 19.75 3.53126 19.2188 2.90626Z" />
                </svg>
              </span>
            )}

            {star && (
              <span
                className={`flex items-center mr-2 text-base ${
                  (roundedLg && "rounded-lg") ||
                  (roundedFull && "rounded-full") ||
                  (roundedSm && "rounded-sm") ||
                  (roundedNone && "rounded-none") ||
                  (roundedMd && "rounded-md")
                }  ${
                  (danger && `text-danger`) ||
                  (warning && `text-warning`) ||
                  (success && `text-success`) ||
                  (info && `text-info`) ||
                  (dark && `text-dark`) ||
                  (secondary && `text-secondary`) ||
                  (gray && `text-body-color`)
                }`}
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  className="fill-current"
                >
                  <path d="M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z" />
                </svg>
              </span>
            )}

            {children}
          </li>
        </ol>
      </div>
    </>
  );
};

export default index;
