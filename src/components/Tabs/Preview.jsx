import React, { useState } from "react";
import Tabs from "../Tabs";
import TabContent from "./TabContent";

const Preview = () => {
  const [open, setOpen] = useState("home");

  const handleTabOpen = (tabNumber) => {
    setOpen(tabNumber);
  };

  return (
    <>
      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <Tabs open={open} setOpen={setOpen} handleTabOpen={handleTabOpen}>
            <TabContent
              details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
              tabCatagory="home"
              open={open}
            />
            <TabContent
              details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! "
              tabCatagory="about"
              open={open}
            />
            <TabContent
              details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?"
              tabCatagory="team"
              open={open}
            />
            <TabContent
              details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
              tabCatagory="company"
              open={open}
            />
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Preview;
