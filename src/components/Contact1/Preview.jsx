import React from "react";
import Contact from "../Contact1";
import { InputBox, SubmitButton, TextArea } from "./contact";

const Preview = () => {
  return (
    <>
      <Contact
        subtitle="Contact Us"
        title="GET IN TOUCH WITH US"
        discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore e dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco"
        addressTitle="Our Location"
        address="99 S.t Jomblo Park Pekanbaru 28292. Indonesia"
        phone=" Phone Number"
        number="(+62)81 414 257 9980"
        email="Email Address"
        emailAddress="info@yourdomain.com"
      >
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
    </>
  );
};

export default Preview;
