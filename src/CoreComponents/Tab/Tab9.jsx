import React, { useState } from "react";

const Tab9 = () => {
  const [open, setOpen] = useState("home");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  return (
    <section className="py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="rounded-[10px] bg-white p-6 shadow-card">
              <div className="border-stroke md:border-b">
                <div className="-mx-[6px] flex flex-col md:flex-row">
                  <div className="px-[6px]">
                    <button
                      onClick={() => handleTabOpen("home")}
                      className={`mb-1 w-full rounded border py-2 px-5 text-base font-medium md:mb-0 md:rounded-t md:rounded-b-none md:border-b-0 text-black bg-gray border-stroke hover:bg-primary hover:text-white ${
                        open === "home"
                          ? "bg-primary text-white border-primary"
                          : ""
                      }`}
                    >
                      Home
                    </button>
                  </div>
                  <div className="px-[6px]">
                    <button
                      onClick={() => handleTabOpen("about")}
                      className={`mb-1 w-full rounded border py-2 px-5 text-base font-medium md:mb-0 md:rounded-t md:rounded-b-none md:border-b-0 text-black bg-gray border-stroke hover:bg-primary hover:text-white ${
                        open === "about"
                          ? "bg-primary text-white border-primary"
                          : ""
                      }`}
                    >
                      About Us
                    </button>
                  </div>
                  <div className="px-[6px]">
                    <button
                      onClick={() => handleTabOpen("team")}
                      className={`mb-1 w-full rounded border py-2 px-5 text-base font-medium md:mb-0 md:rounded-t md:rounded-b-none md:border-b-0 text-black bg-gray border-stroke hover:bg-primary hover:text-white ${
                        open === "team"
                          ? "bg-primary text-white border-primary"
                          : ""
                      }`}
                    >
                      Our Team
                    </button>
                  </div>
                  <div className="px-[6px]">
                    <button
                      onClick={() => handleTabOpen("company")}
                      className={`mb-1 w-full rounded border py-2 px-5 text-base font-medium md:mb-0 md:rounded-t md:rounded-b-none md:border-b-0 text-black bg-gray border-stroke hover:bg-primary hover:text-white ${
                        open === "company"
                          ? "bg-primary text-white border-primary"
                          : ""
                      }`}
                    >
                      Company Details
                    </button>
                  </div>
                </div>
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

export default Tab9;

const TabContent = ({ open, tabCategory, details }) => {
  return (
    <div>
      <div
        className={`mt-8 text-base text-body-color ${
          open === tabCategory ? "block" : "hidden"
        } `}
      >
        {details}
      </div>
    </div>
  );
};
