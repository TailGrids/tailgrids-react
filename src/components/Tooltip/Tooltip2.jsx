import React from "react";

const ToolTip2 = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="-mx-4 flex flex-wrap justify-center">
        <TooltipItem position="top" tooltipsText="ToolTip Text">
          ToolTip On Top
        </TooltipItem>

        <TooltipItem position="bottom" tooltipsText="ToolTip Text">
          ToolTip On Bottom
        </TooltipItem>

        <TooltipItem position="right" tooltipsText="ToolTip Text">
          ToolTip On Right
        </TooltipItem>

        <TooltipItem position="left" tooltipsText="ToolTip Text">
          ToolTip On Left
        </TooltipItem>
      </div>
    </div>
  );
};

export default ToolTip2;

const TooltipItem = ({ children, tooltipsText, position }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
      <div className="mb-14">
        <div className="group relative inline-block">
          <button className="inline-flex rounded bg-primary px-[18px] py-2 text-base font-semibold text-white">
            {children}
          </button>
          <div
            className={` ${
              (position === "right" &&
                `absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded border border-light bg-white px-4 py-[6px] text-sm font-semibold text-body-color opacity-0 group-hover:opacity-100`) ||
              (position === "top" &&
                `absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded border border-light bg-white px-4 py-[6px] text-sm font-semibold text-body-color opacity-0 group-hover:opacity-100`) ||
              (position === "left" &&
                `absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded border border-light bg-white px-4 py-[6px] text-sm font-semibold text-body-color opacity-0 group-hover:opacity-100`) ||
              (position === "bottom" &&
                `absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded border border-light bg-white px-4 py-[6px] text-sm font-semibold text-body-color opacity-0 group-hover:opacity-100`)
            }`}
          >
            <span
              className={` ${
                (position === "right" &&
                  `absolute -left-1 top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-r-sm border-b border-l border-light bg-white`) ||
                (position === "top" &&
                  `absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-l-sm border-b border-r border-light bg-white`) ||
                (position === "left" &&
                  `absolute -right-1 top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm border-r border-t border-light bg-white`) ||
                (position === "bottom" &&
                  `absolute -top-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-light bg-white`)
              } `}
            ></span>
            {tooltipsText}
          </div>
        </div>
      </div>
    </div>
  );
};
