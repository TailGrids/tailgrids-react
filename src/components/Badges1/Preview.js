import React from "react";
import Badges from "../Badges1";

const Preview = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-20 mt-36">
          {/* With background */}
          <Badges primary roundedMd>
            Primary
          </Badges>
          <Badges secondary roundedFull>
            Secondary
          </Badges>
          <Badges dark roundedMd>
            Dark
          </Badges>
          <Badges gray roundedMd>
            Gray
          </Badges>
          <Badges light roundedMd>
            Light
          </Badges>
          <Badges warning roundedMd>
            Warning
          </Badges>
          <Badges danger roundedMd>
            Danger
          </Badges>
          <Badges success roundedMd>
            Success
          </Badges>
          <Badges info roundedMd>
            Info
          </Badges>
          {/* Without background */}

          <Badges primary outline roundedMd>
            Primary
          </Badges>
          <Badges secondary outline roundedFull>
            Secondary
          </Badges>
          <Badges dark outline roundedFull>
            Dark
          </Badges>
          <Badges gray outline roundedFull>
            Gray
          </Badges>
          <Badges light outline roundedFull>
            Light
          </Badges>
          <Badges warning outline roundedFull>
            Warning
          </Badges>
          <Badges danger outline roundedFull>
            Danger
          </Badges>
          <Badges success outline roundedFull>
            Success
          </Badges>
          <Badges info outline roundedFull>
            Info
          </Badges>
        </div>
      </div>
    </>
  );
};

export default Preview;
