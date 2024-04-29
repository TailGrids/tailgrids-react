import React, { useState } from "react";

const Tab10 = () => {
  const [open, setOpen] = useState("profile");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  return (
    <section className="py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="rounded-[10px] bg-white p-6 shadow-card">
              <div className="border-b border-stroke">
                <div className="-mx-5 flex flex-col md:flex-row">
                  <div className="px-5">
                    <button
                      onClick={() => handleTabOpen("profile")}
                      className={`-mb-[1px] w-full border-b-2 py-2 text-base font-medium text-black hover:border-primary hover:text-primary ${
                        open === "profile"
                          ? "text-primary border-primary"
                          : "border-stroke md:border-transparent"
                      }`}
                    >
                      Profile
                    </button>
                  </div>
                  <div className="px-5">
                    <button
                      onClick={() => handleTabOpen("password")}
                      className={`-mb-[1px] w-full border-b-2 py-2 text-base font-medium text-black hover:border-primary hover:text-primary ${
                        open === "password"
                          ? "text-primary border-primary"
                          : "border-stroke md:border-transparent"
                      }`}
                    >
                      Password
                    </button>
                  </div>
                  <div className="px-5">
                    <button
                      onClick={() => handleTabOpen("team")}
                      className={`-mb-[1px] w-full border-b-2 py-2 text-base font-medium text-black hover:border-primary hover:text-primary ${
                        open === "team"
                          ? "text-primary border-primary"
                          : "border-stroke md:border-transparent"
                      }`}
                    >
                      Team
                    </button>
                  </div>
                  <div className="px-5">
                    <button
                      onClick={() => handleTabOpen("notification")}
                      className={`-mb-[1px] w-full border-b-2 py-2 text-base font-medium text-black hover:border-primary hover:text-primary ${
                        open === "notification"
                          ? "text-primary border-primary"
                          : "border-stroke md:border-transparent"
                      }`}
                    >
                      Notification
                    </button>
                  </div>
                  <div className="px-5">
                    <button
                      onClick={() => handleTabOpen("integration")}
                      className={`-mb-[1px] w-full border-b-2 py-2 text-base font-medium text-black hover:border-primary hover:text-primary ${
                        open === "integration"
                          ? "text-primary border-primary"
                          : "border-stroke md:border-transparent"
                      }`}
                    >
                      Integration
                    </button>
                  </div>
                  <div className="px-5">
                    <button
                      onClick={() => handleTabOpen("license")}
                      className={`-mb-[1px] w-full border-b-2 py-2 text-base font-medium text-black hover:border-primary hover:text-primary ${
                        open === "license"
                          ? "text-primary border-primary"
                          : "border-stroke md:border-transparent"
                      }`}
                    >
                      License
                    </button>
                  </div>
                </div>
              </div>
              <TabContent
                details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
                tabCategory="profile"
                open={open}
              />
              <TabContent
                details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! "
                tabCategory="password"
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
                tabCategory="notification"
                open={open}
              />
              <TabContent
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
                tabCategory="integration"
                open={open}
              />
              <TabContent
                details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
                tabCategory="license"
                open={open}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab10;

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
