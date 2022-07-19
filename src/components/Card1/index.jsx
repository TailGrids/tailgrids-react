import React from "react";

const Card = ({ image, Button, CardDiscription, CartTitle }) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden bg-white rounded-lg">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href="/#"
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CartTitle}
            </a>
          </h3>
          <p className="text-base leading-relaxed mb-7 text-body-color">
            {CardDiscription}
          </p>

          {Button && (
            <a
              href="/#"
              className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Card;
