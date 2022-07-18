import React from "react";
import Alerts from "../Alerts1";

const Preview = () => {
  return (
    <>
      {/* Warning Type */}
      <Alerts
        type="warning"
        title="Attention needed"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
      />
      <Alerts
        type="warning"
        borderLeft
        background
        title="Attention needed"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
      >
        <div className="flex mt-6">
          <a
            href="/#"
            className="mr-6 inline-block text-sm font-medium text-[#f10e0e]"
          >
            View Details
          </a>
          <button className="text-sm font-medium text-body-color">
            Vinish
          </button>
        </div>
      </Alerts>
      {/* Error Type */}
      <Alerts
        type="error"
        title="Attention needed"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
      />

      {/* Success Type With Children */}
      <Alerts
        type="success"
        title="Attention needed"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
      >
        <div className="flex mt-6">
          <a
            href="/#"
            className="mr-6 inline-block text-sm font-medium text-[#34D399]"
          >
            View Status
          </a>
          <button className="text-sm font-medium text-body-color">
            Dismiss
          </button>
        </div>
      </Alerts>

      {/* success alart with border right and background  */}
      <Alerts
        type="success"
        background
        borderRight
        title="Attention needed"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
      />
    </>
  );
};

export default Preview;
