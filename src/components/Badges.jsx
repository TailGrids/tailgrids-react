import React from "react";

const Badges = () => {
  return (
    <>
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap items-center mb-8 -mx-2">
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-white rounded-full bg-primary">
              Primary
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-white rounded-full bg-secondary">
              Secondary
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-white bg-black rounded-full">
              Dark
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-white rounded-full bg-body-color">
              Gray
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-black rounded-full bg-light">
              Light
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-black rounded-full bg-warning">
              Warning
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-white rounded-full bg-danger">
              Danger
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-white rounded-full bg-success">
              Success
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-white rounded-full bg-info">
              Info
            </span>
          </div>
          <div className="flex flex-wrap items-center mb-8 -mx-2">
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold border rounded-full border-primary text-primary">
              Primary
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold border rounded-full border-secondary text-secondary">
              Secondary
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-black border border-black rounded-full">
              Dark
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold border rounded-full border-body-color text-body-color">
              Gray
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold text-black border rounded-full border-light">
              Light
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold border rounded-full border-warning text-warning">
              Warning
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold border rounded-full border-danger text-danger">
              Danger
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold border rounded-full border-success text-success">
              Success
            </span>
            <span className="inline-block px-3 py-1 m-2 text-sm font-semibold border rounded-full border-info text-info">
              Info
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Badges;
