import React from "react";

const Brand1 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand1;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="h-10 w-full" />
      </a>
    </>
  );
};
