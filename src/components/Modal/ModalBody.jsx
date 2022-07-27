import React from "react";

const ModalBody = ({
  setModalOpen,
  ModalViewDetails,
  viewDetailsSrc,
  modalClose,
  modalBody,
  modalTitle,
  theme,
}) => {
  return (
    <>
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full min-h-screen px-4 py-5 bg-black bg-opacity-90">
        <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
          <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
            {modalTitle}
          </h3>
          <span
            className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-${theme}`}
          ></span>
          <p className="mb-10 text-base leading-relaxed text-body-color">
            {modalBody}
          </p>
          <div className="flex flex-wrap -mx-3">
            <div className="w-1/2 px-3">
              <button
                onClick={() => setModalOpen(false)}
                className="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                {modalClose}
              </button>
            </div>
            <div className="w-1/2 px-3">
              <button
                className={`block w-full p-3 text-base font-medium text-center text-white transition border rounded-lg border-${theme} bg-${theme} hover:bg-opacity-90`}
              >
                <a href={`${viewDetailsSrc}`}> {ModalViewDetails}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBody;
