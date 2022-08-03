import React from "react";
import Contact from "./Contact";

import ContactContent from "./ContactContent";

import ContactInputBox from "./ContactInputBox";
import ContactSubmitButton from "./ContactSubmitButton";
import ContactTextArea from "./ContactTextArea";

const Preview = () => {
  return (
    <>
      <section class="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <ContactContent
              subtitle="Contact Us"
              title="GET IN TOUCH WITH US"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore e dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco"
              address="99 S.t Jomblo Park Pekanbaru 28292. Indonesia"
              number="(+62)81 414 257 9980"
              emailAddress="info@yourdomain.com"
            />
            <Contact>
              <ContactInputBox
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <ContactInputBox
                type="text"
                name="email"
                placeholder="Your Email"
              />
              <ContactInputBox
                type="text"
                name="phone"
                placeholder="Your Phone"
              />
              <ContactTextArea
                row="6"
                placeholder="Your Message"
                name="details"
                defaultValue=""
              />
              <ContactSubmitButton type="submit">
                Send Message
              </ContactSubmitButton>
            </Contact>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
