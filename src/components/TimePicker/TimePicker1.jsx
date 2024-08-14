import React, { useState, useEffect, useRef } from "react";

  // Function to generate time options
  const generateTimeOptions = (interval) => {
    const options = [];
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0);
    for (let i = 0; i < 24 * 60; i += interval) {
      const time = new Date(startTime.getTime() + i * 60000);
      let hour = time.getHours() % 12 || 12; // Convert to 12-hour format
      const minute = time.getMinutes().toString().padStart(2, "0");
      const period = time.getHours() < 12 ? "AM" : "PM";
      options.push({ hour: hour.toString().padStart(2, "0"), minute, period });
    }
    return options;
  };

export default function TimePicker1() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const timepickerRef = useRef(null);
  const toggleRef = useRef(null);
  const [times] = useState(generateTimeOptions(15));

  // Toggle timepicker visibility
  const toggleTimepickerVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Handle time selection
  const handleTimeSelection = (hour, minute, period) => {
    setSelectedTime(`${hour} ${minute} ${period}`);
    setIsVisible(false);
  };

  // Close timepicker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        timepickerRef.current &&
        !timepickerRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>
        {`
          /* Chrome, Safari and Opera */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>

      <section className="pb-10 pt-20 lg:pb-[120px] lg:pt-[120px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-12">
                <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
                  Timepicker
                </label>

                <div className="relative">
                  {/* Timepicker Input with Icons */}
                  <div className="relative flex items-center">
                    {/* Clock Icon */}
                    <span className="absolute left-0 pl-5 text-dark-5">
                      <svg
                        className="fill-current"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_3185_947)">
                          <path
                            d="M10.4687 10.3125V5.28125C10.4687 4.90625 10.1562 4.59375 9.78125 4.59375C9.40625 4.59375 9.09375 4.90625 9.09375 5.28125V10.5937C9.09375 10.7812 9.15625 10.9687 9.28125 11.0937L12.75 14.625C12.875 14.75 13.0625 14.8437 13.25 14.8437C13.4375 14.8437 13.5937 14.7812 13.75 14.6562C14.0312 14.375 14.0312 13.9375 13.75 13.6562L10.4687 10.3125Z"
                            fill=""
                          />
                          <path
                            d="M10 0.46875C4.78125 0.46875 0.5625 4.75 0.5625 10C0.5625 15.25 4.8125 19.5312 10 19.5312C15.1875 19.5312 19.4375 15.25 19.4375 10C19.4375 4.75 15.2188 0.46875 10 0.46875ZM10 18.125C5.5625 18.125 1.9375 14.4688 1.9375 10C1.9375 5.53125 5.5625 1.875 10 1.875C14.4375 1.875 18.0625 5.53125 18.0625 10C18.0625 14.4688 14.4375 18.125 10 18.125Z"
                            fill=""
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3185_947">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>

                    <input
                      id="timepicker"
                      type="text"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-[50px] pr-8 text-dark-2 outline-none transition focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary"
                      placeholder="Select a time"
                      readOnly
                      value={selectedTime}
                      onClick={toggleTimepickerVisibility}
                    />
                    <span
                      className="absolute right-0 cursor-pointer pr-4 text-dark-5"
                      ref={toggleRef}
                    >
                      {/* Arrow Down Icon */}
                      <svg
                        className="fill-current stroke-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.29635 5.15354L2.29632 5.15357L2.30055 5.1577L7.65055 10.3827L8.00157 10.7255L8.35095 10.381L13.701 5.10603L13.701 5.10604L13.7035 5.10354C13.722 5.08499 13.7385 5.08124 13.7499 5.08124C13.7613 5.08124 13.7778 5.08499 13.7963 5.10354C13.8149 5.12209 13.8187 5.13859 13.8187 5.14999C13.8187 5.1612 13.815 5.17734 13.7973 5.19552L8.04946 10.8433L8.04945 10.8433L8.04635 10.8464C8.01594 10.8768 7.99586 10.8921 7.98509 10.8992C7.97746 10.8983 7.97257 10.8968 7.96852 10.8952C7.96226 10.8929 7.94944 10.887 7.92872 10.8721L2.20253 5.2455C2.18478 5.22733 2.18115 5.2112 2.18115 5.19999C2.18115 5.18859 2.18491 5.17209 2.20346 5.15354C2.222 5.13499 2.2385 5.13124 2.2499 5.13124C2.2613 5.13124 2.2778 5.13499 2.29635 5.15354Z"
                          fill=""
                          stroke=""
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Timepicker Container */}
                  {isVisible && (
                    <div
                      ref={timepickerRef}
                      className="shadow-datepicker no-scrollbar absolute right-0 mt-2 h-[262px] w-[162px] overflow-hidden overflow-y-auto rounded-md border border-stroke bg-white p-2 dark:border-dark-3 dark:bg-dark-2"
                    >
                      {times.map((time, index) => {
                        const timeString = `${time.hour} ${time.minute} ${time.period}`;
                        const isSelected = timeString === selectedTime;
                        return (
                          <div
                            key={index}
                            className={`time-option flex cursor-pointer justify-between gap-1 rounded-md transition ${
                              isSelected ? "selected-time" : ""
                            }`}
                            onClick={() =>
                              handleTimeSelection(
                                time.hour,
                                time.minute,
                                time.period,
                              )
                            }
                          >
                            <div
                              className={`hour flex h-[46px] w-full max-w-[46px] items-center justify-center rounded-md text-sm font-medium ${
                                isSelected
                                  ? "bg-blue-light-5 text-primary"
                                  : "text-dark-3 dark:text-dark-6"
                              }`}
                            >
                              {time.hour}
                            </div>
                            <div
                              className={`minute flex h-[46px] w-full max-w-[46px] items-center justify-center rounded-md text-sm font-medium ${
                                isSelected
                                  ? "bg-blue-light-5 text-primary"
                                  : "text-dark-3 dark:text-dark-6"
                              }`}
                            >
                              {time.minute}
                            </div>
                            <div
                              className={`period flex h-[46px] w-full max-w-[46px] items-center justify-center rounded-md text-sm font-medium ${
                                isSelected
                                  ? "bg-blue-light-5 text-primary"
                                  : "text-dark-3 dark:text-dark-6"
                              }`}
                            >
                              {time.period}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
