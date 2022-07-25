import React from "react";
import Modal from "./Index";

const Preview = () => {
  return (
    <>
      <Modal
        theme="primary"
        button="Open Modal"
        modalTitle="Your Message Sent Successfully"
        modalBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        modalClose="Close"
        ModalViewDetails="View Details"
        viewDetailsSrc="https://www.google.com/"
      />
    </>
  );
};

export default Preview;
