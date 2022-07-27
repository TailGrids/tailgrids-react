import React from "react";
import Contact from "../Contact";

import { InputBox, SubmitButton, TextArea } from "./contact";
import Content from "./Content";

const Preview = () => {
  return (
    <>
      <section class="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <Content
              subtitle="Contact Us"
              title="GET IN TOUCH WITH US"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore e dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco"
              addressTitle="Our Location"
              address="99 S.t Jomblo Park Pekanbaru 28292. Indonesia"
              phone=" Phone Number"
              number="(+62)81 414 257 9980"
              email="Email Address"
              emailAddress="info@yourdomain.com"
            />
            <Contact>
              <InputBox type="text" name="name" placeholder="Your Name" />
              <InputBox type="text" name="email" placeholder="Your Email" />
              <InputBox type="text" name="phone" placeholder="Your Phone" />
              <TextArea
                row="6"
                placeholder="Your Message"
                name="details"
                defaultValue=""
              />
              <SubmitButton type="submit">Send Message</SubmitButton>
            </Contact>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
