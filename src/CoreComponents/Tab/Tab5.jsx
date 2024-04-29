import React, { useState } from "react";

const Tab5 = () => {
  const [open, setOpen] = useState("home");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  return (
    <section className="py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="w-full mb-14">
              <div className="flex flex-wrap bg-[#FAFAFA]">
                <button
                  onClick={() => handleTabOpen("home")}
                  className={`group text-body-color hover:border-primary hover:text-primary flex items-center border-b-2 border-[#F1F2F4] py-3 px-6 text-sm font-medium hover:bg-[#EDF1FF] md:text-base lg:py-4 lg:px-12 ${
                    open === "home"
                      ? "border-primary text-primary bg-[#EDF1FF]"
                      : "text-body-color border-[#F1F2F4] hover:border-primary hover:text-primary hover:bg-[#EDF1FF]"
                  }`}
                >
                  <span
                    className={`group-hover:bg-primary mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-full border text-sm group-hover:text-white ${
                      open === "home" ? "bg-primary text-white" : ""
                    }`}
                  >
                    01
                  </span>
                  Home
                </button>
                <button
                  onClick={() => handleTabOpen("about")}
                  className={`group text-body-color hover:border-primary hover:text-primary flex items-center border-b-2 border-[#F1F2F4] py-3 px-6 text-sm font-medium hover:bg-[#EDF1FF] md:text-base lg:py-4 lg:px-12 ${
                    open === "about"
                      ? "border-primary text-primary bg-[#EDF1FF]"
                      : "text-body-color border-[#F1F2F4] hover:border-primary hover:text-primary hover:bg-[#EDF1FF]"
                  }`}
                >
                  <span
                    className={`group-hover:bg-primary mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-full border text-sm group-hover:text-white ${
                      open === "about" ? "bg-primary text-white" : ""
                    }`}
                  >
                    02
                  </span>
                  About Us
                </button>
                <button
                  onClick={() => handleTabOpen("team")}
                  className={`group text-body-color hover:border-primary hover:text-primary flex items-center border-b-2 border-[#F1F2F4] py-3 px-6 text-sm font-medium hover:bg-[#EDF1FF] md:text-base lg:py-4 lg:px-12 ${
                    open === "team"
                      ? "border-primary text-primary bg-[#EDF1FF]"
                      : "text-body-color border-[#F1F2F4] hover:border-primary hover:text-primary hover:bg-[#EDF1FF]"
                  }`}
                >
                  <span
                    className={`group-hover:bg-primary mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-full border text-sm group-hover:text-white ${
                      open === "team" ? "bg-primary text-white" : ""
                    }`}
                  >
                    03
                  </span>
                  Our Team
                </button>
                <button
                  onClick={() => handleTabOpen("company")}
                  className={`group text-body-color hover:border-primary hover:text-primary flex items-center border-b-2 border-[#F1F2F4] py-3 px-6 text-sm font-medium hover:bg-[#EDF1FF] md:text-base lg:py-4 lg:px-12 ${
                    open === "company"
                      ? "border-primary text-primary bg-[#EDF1FF]"
                      : "text-body-color border-[#F1F2F4] hover:border-primary hover:text-primary hover:bg-[#EDF1FF]"
                  }`}
                >
                  <span
                    className={`group-hover:bg-primary mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-full border text-sm group-hover:text-white ${
                      open === "company" ? "bg-primary text-white" : ""
                    }`}
                  >
                    04
                  </span>
                  Company Details
                </button>
              </div>
              <TabContent
                details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
                tabCategory="home"
                open={open}
              />
              <TabContent
                details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! "
                tabCategory="about"
                open={open}
              />
              <TabContent
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?"
                tabCategory="team"
                open={open}
              />
              <TabContent
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
                tabCategory="company"
                open={open}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab5;

const TabContent = ({ open, tabCategory, details }) => {
  return (
    <div>
      <div
        className={`text-body-color p-6 text-base leading-relaxed ${
          open === tabCategory ? "block" : "hidden"
        } `}
      >
        {details}
      </div>
    </div>
  );
};
