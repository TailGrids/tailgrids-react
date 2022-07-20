import React, { useState } from "react";
import ModalBody from "./ModalBody";

const Modal = ({
  button,
  ModalViewDetails,
  modalClose,
  modalBody,
  modalTitle,
  viewDetailsSrc,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* <!-- ====== Modal Section Start --> */}
      <div className="container ">
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 text-base font-medium text-white rounded-full bg-primary"
        >
          {button}
        </button>
      </div>

      {modalOpen && (
        <ModalBody
          setModalOpen={setModalOpen}
          ModalViewDetails={ModalViewDetails}
          modalClose={modalClose}
          modalBody={modalBody}
          modalTitle={modalTitle}
          viewDetailsSrc={viewDetailsSrc}
        ></ModalBody>
      )}
    </>
  );
};

export default Modal;
