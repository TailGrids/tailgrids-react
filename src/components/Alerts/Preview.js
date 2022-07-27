import React from "react";
import Alerts from "../Alerts";
import Button from "./Button";

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
          title="Attention needed"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
        >
          <div className="flex mt-6">
            <Button label="View Content" color="warning" href="/#" />
            <Button label="Dismiss" href="/#" />
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
            <Button label="View Content" color="black" href="/#" />
            <Button label="Dismiss" href="/#" />
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
      </div>
    </>
  );
};

export default Preview;
