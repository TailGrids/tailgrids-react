import React, { useState } from "react";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* <!-- ====== Modal Section Start --> */}
      <section x-data="{modalOpen: false}">
        <div className="container py-20">
          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3 text-base font-medium text-white rounded-full bg-primary"
          >
            Open Modal
          </button>
        </div>

        {modalOpen && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full min-h-screen px-4 py-5 bg-black bg-opacity-90">
            <div
              //   @click.outside="modalOpen = false"
              className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
            >
              <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
                Your Message Sent Successfully
              </h3>
              <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"></span>
              <p className="mb-10 text-base leading-relaxed text-body-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since
              </p>
              <div className="flex flex-wrap -mx-3">
                <div className="w-1/2 px-3">
                  <button
                    // @click="modalOpen = false"
                    onClick={() => setModalOpen(false)}
                    className="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
                <div className="w-1/2 px-3">
                  <button className="block w-full p-3 text-base font-medium text-center text-white transition border rounded-lg border-primary bg-primary hover:bg-opacity-90">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* <!-- ====== Modal Section End -->    */}
    </>
  );
};

export default Modal;
