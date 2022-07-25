import React, { useState } from "react";
import ModalBody from "./ModalBody";

const Modal = ({
  button,
  ModalViewDetails,
  modalClose,
  modalBody,
  modalTitle,
  viewDetailsSrc,
  theme = "primary",
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* <!-- ====== Modal Section Start --> */}
      <div className="container ">
        <button
          onClick={() => setModalOpen(true)}
          className={`px-6 py-3 text-base font-medium text-white rounded-full bg-${theme}`}
        >
          {button}
        </button>
      </div>

      {modalOpen && (
        <ModalBody
          theme={theme}
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
