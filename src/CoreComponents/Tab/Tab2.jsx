import React, { useState } from "react";

const Tab2 = () => {
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
                  className={`border-b-2 py-4 px-6 text-sm font-medium md:text-base lg:py-5 lg:px-12 ${
                    open === "home"
                      ? "border-primary text-primary bg-[#EDF1FF]"
                      : "border-[#F1F2F4] text-body-color hover:border-primary hover:text-primary hover:bg-[#EDF1FF]"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleTabOpen("about")}
                  className={`border-b-2 py-4 px-6 text-sm font-medium md:text-base lg:py-5 lg:px-12 ${
                    open === "about"
                      ? "border-primary text-primary bg-[#EDF1FF]"
                      : "border-[#F1F2F4] text-body-color hover:border-primary hover:text-primary hover:bg-[#EDF1FF]"
                  }`}
                >
                  About Us
                </button>
                <button
                  onClick={() => handleTabOpen("team")}
                  className={`border-b-2 py-4 px-6 text-sm font-medium md:text-base lg:py-5 lg:px-12 ${
                    open === "team"
                      ? "border-primary text-primary bg-[#EDF1FF]"
                      : "border-[#F1F2F4] text-body-color hover:border-primary hover:text-primary hover:bg-[#EDF1FF]"
                  }`}
                >
                  Our Team
                </button>
                <button
                  onClick={() => handleTabOpen("company")}
                  className={`border-b-2 py-4 px-6 text-sm font-medium md:text-base lg:py-5 lg:px-12 ${
                    open === "company"
                      ? "border-primary text-primary bg-[#EDF1FF]"
                      : "border-[#F1F2F4] text-body-color hover:border-primary hover:text-primary hover:bg-[#EDF1FF]"
                  }`}
                >
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

export default Tab2;

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
