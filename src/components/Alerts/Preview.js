import React from "react";
import Alerts from "../Alerts";

const Preview = () => {
  return (
    <>
      <div className="space-y-6">
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
          dismissible
          title="Attention needed"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
        />

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
          dismissible
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
        />

        {/* success alert with border right and background  */}
        <Alerts
          type="success"
          background
          borderRight
          title="Attention needed"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
        />
      </div>
    </>
  );
};

export default Preview;
