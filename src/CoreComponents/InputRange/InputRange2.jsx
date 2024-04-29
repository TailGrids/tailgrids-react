import React, { useState } from "react";

function InputRange2() {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(7000);
  const min = 100;
  const max = 10000;
  const [minThumb, setMinThumb] = useState(0);
  const [maxThumb, setMaxThumb] = useState(0);

  const minTrigger = () => {
    const newMinValue = Math.min(minValue, maxValue - 500);
    setMinValue(newMinValue);
    setMinThumb(((newMinValue - min) / (max - min)) * 100);
  };

  const maxTrigger = () => {
    const newMaxValue = Math.max(maxValue, minValue + 500);
    setMaxValue(newMaxValue);
    setMaxThumb(100 - ((newMaxValue - min) / (max - min)) * 100);
  };

  return (
    <div className="mx-auto w-full max-w-[570px] py-20">
      <div className="relative w-full max-w-xl">
        <div>
          <input
            type="range"
            step="100"
            min={min}
            max={max}
            onInput={minTrigger}
            value={minValue}
            className="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
          />

          <input
            type="range"
            step="100"
            min={min}
            max={max}
            onInput={maxTrigger}
            value={maxValue}
            className="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
          />

          <div className="relative z-10 h-2">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-md bg-gray-3 dark:bg-dark-2"></div>

            <div
              className="absolute bottom-0 top-0 z-20 rounded-md bg-primary"
              style={{ right: maxThumb + "%", left: minThumb + "%" }}
            ></div>

            <div
              className="absolute left-0 top-0 z-30 -ml-1 -mt-2 h-6 w-6 rounded-full border-2 border-primary bg-white"
              style={{ left: minThumb + "%" }}
            ></div>

            <div
              className="absolute right-0 top-0 z-30 -mr-3 -mt-2 h-6 w-6 rounded-full border-2 border-primary bg-white"
              style={{ right: maxThumb + "%" }}
            ></div>
          </div>

          <div className="flex items-center justify-between py-5">
            <div>
              <span
                className="absolute -bottom-5 ml-1 -translate-x-1/2 rounded bg-white px-3 py-2 text-center text-dark shadow-lg dark:bg-dark-3 dark:text-white"
                style={{ left: minThumb + "%" }}
              >
                {minValue}
              </span>
            </div>
            <div>
              <span
                className="absolute -bottom-5 mr-1 translate-x-1/2 rounded bg-white px-3 py-2 text-center text-dark shadow-lg dark:bg-dark-3 dark:text-white"
                style={{ right: maxThumb + "%" }}
              >
                {maxValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputRange2;
