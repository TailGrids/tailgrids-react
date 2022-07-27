import React from "react";
import Badges from "../Badges";

const Preview = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-20 mt-36">
          {/* With background */}
          <Badges label="  Primary" primary roundedMd></Badges>
          <Badges secondary label="Secondary" roundedFull></Badges>
          <Badges dark label="Dark" roundedMd></Badges>
          <Badges gray label="Gray" roundedMd></Badges>
          <Badges light label="Light" roundedMd></Badges>
          <Badges warning label="Warning" roundedMd></Badges>
          <Badges danger label="Danger" roundedMd></Badges>
          <Badges success label="Success" roundedMd></Badges>
          <Badges info label="Info" roundedMd></Badges>

          {/* Without background */}
          <Badges primary outline label="Primary" roundedMd></Badges>
          <Badges secondary outline label="Secondary" roundedFull></Badges>
          <Badges dark outline label="Dark" roundedFull></Badges>
          <Badges gray outline label="Gray" roundedFull></Badges>
          <Badges light outline label="Light" roundedFull></Badges>
          <Badges warning outline label="Warning" roundedFull></Badges>
          <Badges danger outline label="Danger" roundedFull></Badges>
          <Badges success outline label="Success" roundedFull></Badges>
          <Badges info outline label="Info" roundedFull></Badges>
        </div>
      </div>
    </>
  );
};

export default Preview;
