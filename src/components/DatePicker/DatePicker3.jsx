import React, { useState, useEffect, useRef } from "react";

export default function DatePicker3() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const daysContainerRef = useRef(null);
  const datepickerContainerRef = useRef(null);

  useEffect(() => {
    if (daysContainerRef.current) {
      renderCalendar();
    }
  }, [currentDate, isCalendarOpen]);

    const renderCalendar = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      const daysContainer = daysContainerRef.current;
      daysContainer.innerHTML = "";

      for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDiv = document.createElement("div");
        daysContainer.appendChild(emptyDiv);
      }

      for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.className =
          "flex items-center justify-center cursor-pointer w-[46px] h-[46px] text-dark-3 dark:text-dark-6 rounded-full hover:bg-primary hover:text-white";
        dayDiv.textContent = i;
        dayDiv.addEventListener("click", () => {
          const selectedDateValue = `${month + 1}/${i}/${year}`;
          setSelectedDate(selectedDateValue);
          daysContainer
            .querySelectorAll("div")
            .forEach((d) =>
              d.classList.remove("bg-primary", "text-white"),
            );
          dayDiv.classList.add("bg-primary", "text-white", "dark:text-white");
        });
        daysContainer.appendChild(dayDiv);
      }
    };

     const handlePrevMonth = () => {
       setCurrentDate(
         (prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() - 1)),
       );
     };

     const handleNextMonth = () => {
       setCurrentDate(
         (prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() + 1)),
       );
     };

     const handleApply = () => {
       if (selectedDate) {
         setIsCalendarOpen(false);
       }
     };

     const handleCancel = () => {
       setSelectedDate(null);
       setIsCalendarOpen(false);
     };

     const handleToggleCalendar = () => {
       setIsCalendarOpen(!isCalendarOpen);
     };

  const handleClickOutside = (event) => {
    if (
      datepickerContainerRef.current &&
      !datepickerContainerRef.current.contains(event.target) &&
      event.target.id !== "datepicker" &&
      event.target.id !== "toggleDatepicker"
    ) {
      setIsCalendarOpen(false);
    }
  };


   useEffect(() => {
     document.addEventListener("click", handleClickOutside);
     return () => {
       document.removeEventListener("click", handleClickOutside);
     };
   }, []);

  return (
    <section className="bg-white py-20 lg:py-[120px] dark:bg-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-12">
              <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
                Datepicker
              </label>

              <div className="relative">
                <div className="relative flex items-center">
                  <span className="absolute left-0 pl-5 text-dark-5">
                    <svg
                      className="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 3.3125H15.8125V2.625C15.8125 2.25 15.5 1.90625 15.0937 1.90625C14.6875 1.90625 14.375 2.21875 14.375 2.625V3.28125H5.59375V2.625C5.59375 2.25 5.28125 1.90625 4.875 1.90625C4.46875 1.90625 4.15625 2.21875 4.15625 2.625V3.28125H2.5C1.4375 3.28125 0.53125 4.15625 0.53125 5.25V16.125C0.53125 17.1875 1.40625 18.0937 2.5 18.0937H17.5C18.5625 18.0937 19.4687 17.2187 19.4687 16.125V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM2.5 4.71875H4.1875V5.34375C4.1875 5.71875 4.5 6.0625 4.90625 6.0625C5.3125 6.0625 5.625 5.75 5.625 5.34375V4.71875H14.4687V5.34375C14.4687 5.71875 14.7812 6.0625 15.1875 6.0625C15.5937 6.0625 15.9062 5.75 15.9062 5.34375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.34375H1.96875V5.28125C1.96875 4.9375 2.1875 4.71875 2.5 4.71875ZM17.5 16.6562H2.5C2.1875 16.6562 1.9375 16.4062 1.9375 16.0937V8.71875H18.0312V16.125C18.0625 16.4375 17.8125 16.6562 17.5 16.6562Z"
                        fill=""
                      />
                      <path
                        d="M9 9.59375H8.3125C8.125 9.59375 8 9.71875 8 9.90625V10.5938C8 10.7813 8.125 10.9062 8.3125 10.9062H9C9.1875 10.9062 9.3125 10.7813 9.3125 10.5938V9.90625C9.3125 9.71875 9.15625 9.59375 9 9.59375Z"
                        fill=""
                      />
                      <path
                        d="M11.8438 9.59375H11.1562C10.9687 9.59375 10.8438 9.71875 10.8438 9.90625V10.5938C10.8438 10.7813 10.9687 10.9062 11.1562 10.9062H11.8438C12.0313 10.9062 12.1562 10.7813 12.1562 10.5938V9.90625C12.1562 9.71875 12.0313 9.59375 11.8438 9.59375Z"
                        fill=""
                      />
                      <path
                        d="M14.6875 9.59375H14C13.8125 9.59375 13.6875 9.71875 13.6875 9.90625V10.5938C13.6875 10.7813 13.8125 10.9062 14 10.9062H14.6875C14.875 10.9062 15 10.7813 15 10.5938V9.90625C15 9.71875 14.875 9.59375 14.6875 9.59375Z"
                        fill=""
                      />
                      <path
                        d="M6 12H5.3125C5.125 12 5 12.125 5 12.3125V13C5 13.1875 5.125 13.3125 5.3125 13.3125H6C6.1875 13.3125 6.3125 13.1875 6.3125 13V12.3125C6.3125 12.125 6.15625 12 6 12Z"
                        fill=""
                      />
                      <path
                        d="M9 12H8.3125C8.125 12 8 12.125 8 12.3125V13C8 13.1875 8.125 13.3125 8.3125 13.3125H9C9.1875 13.3125 9.3125 13.1875 9.3125 13V12.3125C9.3125 12.125 9.15625 12 9 12Z"
                        fill=""
                      />
                      <path
                        d="M11.8438 12H11.1562C10.9687 12 10.8438 12.125 10.8438 12.3125V13C10.8438 13.1875 10.9687 13.3125 11.1562 13.3125H11.8438C12.0313 13.3125 12.1562 13.1875 12.1562 13V12.3125C12.1562 12.125 12.0313 12 11.8438 12Z"
                        fill=""
                      />
                      <path
                        d="M14.6875 12H14C13.8125 12 13.6875 12.125 13.6875 12.3125V13C13.6875 13.1875 13.8125 13.3125 14 13.3125H14.6875C14.875 13.3125 15 13.1875 15 13V12.3125C15 12.125 14.875 12 14.6875 12Z"
                        fill=""
                      />
                      <path
                        d="M6 14.4062H5.3125C5.125 14.4062 5 14.5312 5 14.7187V15.4063C5 15.5938 5.125 15.7187 5.3125 15.7187H6C6.1875 15.7187 6.3125 15.5938 6.3125 15.4063V14.7187C6.3125 14.5312 6.15625 14.4062 6 14.4062Z"
                        fill=""
                      />
                      <path
                        d="M9 14.4062H8.3125C8.125 14.4062 8 14.5312 8 14.7187V15.4063C8 15.5938 8.125 15.7187 8.3125 15.7187H9C9.1875 15.7187 9.3125 15.5938 9.3125 15.4063V14.7187C9.3125 14.5312 9.15625 14.4062 9 14.4062Z"
                        fill=""
                      />
                      <path
                        d="M11.8438 14.4062H11.1562C10.9687 14.4062 10.8438 14.5312 10.8438 14.7187V15.4063C10.8438 15.5938 10.9687 15.7187 11.1562 15.7187H11.8438C12.0313 15.7187 12.1562 15.5938 12.1562 15.4063V14.7187C12.1562 14.5312 12.0313 14.4062 11.8438 14.4062Z"
                        fill=""
                      />
                    </svg>
                  </span>

                  <input
                    id="datepicker"
                    type="text"
                    placeholder="Pick a date"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-[50px] pr-8 text-dark-2 outline-none transition focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary"
                    value={selectedDate || ""}
                    readOnly
                    onClick={handleToggleCalendar}
                  />

                  <span
                    id="toggleDatepicker"
                    className="absolute right-0 cursor-pointer pr-4 text-dark-5"
                    onClick={handleToggleCalendar}
                  >
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

                {isCalendarOpen && (
                  <div
                    ref={datepickerContainerRef}
                    id="datepicker-container"
                    className="shadow-datepicker absolute mt-2 rounded-xl border border-stroke bg-white pt-5 dark:border-dark-3 dark:bg-dark-2"
                  >
                    <div className="flex items-center justify-between px-5">
                      <button
                        id="prevMonth"
                        className="rounded-md px-2 py-2 text-dark hover:bg-gray-2 dark:text-white dark:hover:bg-dark"
                        onClick={handlePrevMonth}
                      >
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5312 17.9062C13.3437 17.9062 13.1562 17.8438 13.0312 17.6875L5.96875 10.5C5.6875 10.2187 5.6875 9.78125 5.96875 9.5L13.0312 2.3125C13.3125 2.03125 13.75 2.03125 14.0312 2.3125C14.3125 2.59375 14.3125 3.03125 14.0312 3.3125L7.46875 10L14.0625 16.6875C14.3438 16.9688 14.3438 17.4062 14.0625 17.6875C13.875 17.8125 13.7187 17.9062 13.5312 17.9062Z"
                            fill=""
                          />
                        </svg>
                      </button>

                      <div
                        id="currentMonth"
                        className="text-lg font-medium text-dark-3 dark:text-white"
                      >
                        {currentDate.toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </div>

                      <button
                        id="nextMonth"
                        className="rounded-md px-2 py-2 text-dark hover:bg-gray-2 dark:text-white dark:hover:bg-dark"
                        onClick={handleNextMonth}
                      >
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.46875 17.9063C6.28125 17.9063 6.125 17.8438 5.96875 17.7188C5.6875 17.4375 5.6875 17 5.96875 16.7188L12.5312 10L5.96875 3.3125C5.6875 3.03125 5.6875 2.59375 5.96875 2.3125C6.25 2.03125 6.6875 2.03125 6.96875 2.3125L14.0313 9.5C14.3125 9.78125 14.3125 10.2187 14.0313 10.5L6.96875 17.6875C6.84375 17.8125 6.65625 17.9063 6.46875 17.9063Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>

                    <div
                      id="days-of-week"
                      className="mb-4 mt-6 grid grid-cols-7 gap-2 px-5"
                    >
                      <div className="text-center text-sm font-medium text-secondary-color">
                        Sun
                      </div>
                      <div className="text-center text-sm font-medium text-secondary-color">
                        Mon
                      </div>
                      <div className="text-center text-sm font-medium text-secondary-color">
                        Tue
                      </div>
                      <div className="text-center text-sm font-medium text-secondary-color">
                        Wed
                      </div>
                      <div className="text-center text-sm font-medium text-secondary-color">
                        Thu
                      </div>
                      <div className="text-center text-sm font-medium text-secondary-color">
                        Fri
                      </div>
                      <div className="text-center text-sm font-medium text-secondary-color">
                        Sat
                      </div>
                    </div>

                    <div
                      ref={daysContainerRef}
                      id="days-container"
                      className="mt-2 grid grid-cols-7 gap-2 px-5"
                    >
                      {/* Days will be rendered here */}
                    </div>

                    <div className="mt-5 flex justify-end space-x-2.5 border-t border-stroke p-5 dark:border-dark-3">
                      <button
                        id="cancelBtn"
                        className="rounded-lg border border-primary px-5 py-2.5 text-base font-medium text-primary hover:bg-blue-light-5"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                      <button
                        id="applyBtn"
                        className="rounded-lg bg-primary px-5 py-2.5 text-base font-medium text-white hover:bg-[#1B44C8]"
                        onClick={handleApply}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

