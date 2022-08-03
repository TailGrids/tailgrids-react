import React, { useState } from "react";
import ModalBody from "./ModalBody";

const Preview = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ModalBody
        theme="primary"
        modalTitle="Your Message Sent Successfully"
        modalBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
        modalClose="Caancel"
        ModalViewDetails="View Details"
        viewDetailsSrc="#"
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />

      <button
        onClick={() => setModalOpen(true)}
        className={`px-6 py-3 text-base font-medium text-white rounded-full bg-primary`}
      >
        Open Modal
      </button>
    </>
  );
};

export default Preview;
