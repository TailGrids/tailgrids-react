import React, { useState } from "react";

const Tabs = () => {
  const [open, setOpen] = useState("1");

  return (
    <>
      {/* <!-- ====== Tabs Section Start --> */}
      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="w-full mb-14">
                <div className="flex flex-wrap rounded-lg border border-[#E4E4E4] py-3 px-4">
                  <a
                    href="/#"
                    onClick={() => setOpen("1")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500 transition-all delay-75 ${
                      open === "1" ? "activeClasses" : "inactiveClasses"
                    }`}
                  >
                    Home
                  </a>
                  <a
                    href="/#"
                    onClick={() => setOpen("2")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500 transition-all delay-75 ${
                      open === "2" ? "activeClasses" : "inactiveClasses"
                    }`}
                  >
                    About Us
                  </a>
                  <a
                    href="/#"
                    onClick={() => setOpen("3")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500 transition-all delay-75 ${
                      open === "3" ? "activeClasses" : "inactiveClasses"
                    }`}
                  >
                    Our Team
                  </a>
                  <a
                    href="/#"
                    onClick={() => setOpen("4")}
                    className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500 transition-all delay-75 ${
                      open === "4" ? "activeClasses" : "inactiveClasses"
                    }`}
                  >
                    Company Details
                  </a>
                </div>
                <div>
                  <div
                    className={`p-6 text-base leading-relaxed text-body-color ${
                      open === "1" ? "block" : "hidden"
                    } `}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia nisi, doloribus nulla cumque molestias corporis
                    eaque harum vero! Quas sit odit optio debitis nulla
                    quisquam, dolorum quaerat animi iusto quod.
                  </div>
                  <div
                    className={`p-6 text-base leading-relaxed text-body-color ${
                      open === "2" ? "block" : "hidden"
                    } `}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia nisi, doloribus nulla cumque molestias corporis
                    eaque harum vero! Quas sit odit optio debitis nulla
                    quisquam, dolorum quaerat animi iusto quod. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Unde ex
                    dolorum voluptate cupiditate adipisci doloremque, vel quam
                    praesentium nihil veritatis.
                  </div>
                  <div
                    className={`p-6 text-base leading-relaxed text-body-color ${
                      open === "3" ? "block" : "hidden"
                    } `}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia nisi, doloribus nulla cumque molestias corporis
                    eaque harum vero! Quas sit odit optio debitis nulla
                    quisquam, dolorum quaerat animi iusto quod. <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit mollitia nam eligendi reprehenderit reiciendis
                    saepe laboriosam maiores voluptas. Quo, culpa amet fugiat
                    ipsam sed quod hic, veritatis ducimus recusandae repellat
                    quasi eaque, suscipit praesentium totam?
                  </div>
                  <div
                    className={`p-6 text-base leading-relaxed text-body-color ${
                      open === "4" ? "block" : "hidden"
                    } `}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia nisi, doloribus nulla cumque molestias corporis
                    eaque harum vero! Quas sit odit optio debitis nulla
                    quisquam, dolorum quaerat animi iusto quod.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Tabs Section End -->    */}
    </>
  );
};

export default Tabs;
