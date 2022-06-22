import React from "react";

const Badges = () => {
  return (
    <>
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container">
          <div className="-mx-2 mb-8 flex flex-wrap items-center">
            <span className="m-2 inline-block rounded-full bg-primary py-1 px-3 text-sm font-semibold text-white">
              Primary
            </span>
            <span className="m-2 inline-block rounded-full bg-secondary py-1 px-3 text-sm font-semibold text-white">
              Secondary
            </span>
            <span className="m-2 inline-block rounded-full bg-black py-1 px-3 text-sm font-semibold text-white">
              Dark
            </span>
            <span className="m-2 inline-block rounded-full bg-body-color py-1 px-3 text-sm font-semibold text-white">
              Gray
            </span>
            <span className="m-2 inline-block rounded-full bg-light py-1 px-3 text-sm font-semibold text-black">
              Light
            </span>
            <span className="m-2 inline-block rounded-full bg-warning py-1 px-3 text-sm font-semibold text-black">
              Warning
            </span>
            <span className="m-2 inline-block rounded-full bg-danger py-1 px-3 text-sm font-semibold text-white">
              Danger
            </span>
            <span className="m-2 inline-block rounded-full bg-success py-1 px-3 text-sm font-semibold text-white">
              Success
            </span>
            <span className="m-2 inline-block rounded-full bg-info py-1 px-3 text-sm font-semibold text-white">
              Info
            </span>
          </div>
          <div className="-mx-2 mb-8 flex flex-wrap items-center">
            <span className="m-2 inline-block rounded-full border border-primary py-1 px-3 text-sm font-semibold text-primary">
              Primary
            </span>
            <span className="m-2 inline-block rounded-full border border-secondary py-1 px-3 text-sm font-semibold text-secondary">
              Secondary
            </span>
            <span className="m-2 inline-block rounded-full border border-black py-1 px-3 text-sm font-semibold text-black">
              Dark
            </span>
            <span className="m-2 inline-block rounded-full border border-body-color py-1 px-3 text-sm font-semibold text-body-color">
              Gray
            </span>
            <span className="m-2 inline-block rounded-full border border-light py-1 px-3 text-sm font-semibold text-black">
              Light
            </span>
            <span className="m-2 inline-block rounded-full border border-warning py-1 px-3 text-sm font-semibold text-warning">
              Warning
            </span>
            <span className="m-2 inline-block rounded-full border border-danger py-1 px-3 text-sm font-semibold text-danger">
              Danger
            </span>
            <span className="m-2 inline-block rounded-full border border-success py-1 px-3 text-sm font-semibold text-success">
              Success
            </span>
            <span className="m-2 inline-block rounded-full border border-info py-1 px-3 text-sm font-semibold text-info">
              Info
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Badges;
