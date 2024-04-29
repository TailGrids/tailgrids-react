import React, { useState } from "react";

const Tab7 = () => {
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
              <div className="rounded-[10px] border border-stroke bg-white p-3 pb-0">
                <div className="-mx-[6px] flex flex-col flex-wrap sm:flex-row">
                  <div className="px-[6px] pb-3">
                    <button
                      onClick={() => handleTabOpen("home")}
                      className={`w-full rounded border py-2 px-5 text-base font-medium text-black bg-gray border-stroke hover:bg-primary hover:text-white ${
                        open === "home"
                          ? "bg-primary text-white border-primary"
                          : ""
                      }`}
                    >
                      Home
                    </button>
                  </div>
                  <div className="px-[6px] pb-3">
                    <button
                      onClick={() => handleTabOpen("about")}
                      className={`w-full rounded border py-2 px-5 text-base font-medium text-black bg-gray border-stroke hover:bg-primary hover:text-white ${
                        open === "about"
                          ? "bg-primary text-white border-primary"
                          : ""
                      }`}
                    >
                      About Us
                    </button>
                  </div>
                  <div className="px-[6px] pb-3">
                    <button
                      onClick={() => handleTabOpen("team")}
                      className={`w-full rounded border py-2 px-5 text-base font-medium text-black bg-gray border-stroke hover:bg-primary hover:text-white ${
                        open === "team"
                          ? "bg-primary text-white border-primary"
                          : ""
                      }`}
                    >
                      Our Team
                    </button>
                  </div>
                  <div className="px-[6px] pb-3">
                    <button
                      onClick={() => handleTabOpen("company")}
                      className={`w-full rounded border py-2 px-5 text-base font-medium text-black bg-gray border-stroke hover:bg-primary hover:text-white ${
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

export default Tab7;

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
