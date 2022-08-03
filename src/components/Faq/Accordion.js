import React, { useState } from "react";

const Accordion = ({ description, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div class=" single-faq h-auto w-full bg-white border border-[#F3F4FE] rounded-lg p-4 sm:p-8 lg:px-6 xl:px-8 mb-8 ">
        <button
          onClick={() => setOpen(!open)}
          class="faq-btn flex w-full text-left"
        >
          <div class=" w-full max-w-[40px] h-10 flex items-center justify-center rounded-lg bg-primary text-primary bg-opacity-5 mr-5 ">
            <svg
              width="17"
              height="10"
              viewBox="0 0 17 10"
              class="fill-current icon"
            >
              <path
                d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                fill="#3056D3"
                stroke="#3056D3"
              />
            </svg>
          </div>
          <div class="w-full">
            <h4 class="text-lg font-semibold text-black">{title}</h4>
          </div>
        </button>

        {open && (
          <div class="faq-content pl-[62px]">
            <p class="text-base text-body-color leading-relaxed py-3">
              {description}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
