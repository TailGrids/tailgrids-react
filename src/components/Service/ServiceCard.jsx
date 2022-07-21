import React from "react";

const ServiceCard = ({
  children,
  title,
  details,
  primary,
  secondary,
  warning,
  danger,
  success,
  info,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
          <div
            className={`mb-8 flex h-[70px] w-[70px] p-3 items-center justify-center rounded-2xl ${
              (primary && `bg-primary`) ||
              (secondary && `bg-secondary`) ||
              (danger && `bg-danger`) ||
              (success && `bg-success`) ||
              (info && `bg-info`) ||
              (warning && `bg-warning`)
            }  bg-primary`}
          >
            {children}
          </div>
          <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
          <p className="text-body-color">{details}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
