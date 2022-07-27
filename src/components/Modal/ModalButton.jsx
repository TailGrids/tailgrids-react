import React from "react";

const ModalButton = ({ label, theme, setModalOpen }) => {
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className={`px-6 py-3 text-base font-medium text-white rounded-full bg-${theme}`}
      >
        {label}
      </button>
    </>
  );
};

export default ModalButton;
