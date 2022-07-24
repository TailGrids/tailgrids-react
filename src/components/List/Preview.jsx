import React from "react";
import Lists from "../List";

const Preview = () => {
  return (
    <>
      <div className="container py-12 space-y-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 ">
          {/*  */}
          <div className=" space-y-5  ">
            <Lists basic success roundedFull count="1">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists basic danger roundedFull count="2">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists basic info roundedFull count="3">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists basic warning roundedFull count="4">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists basic dark roundedFull count="5">
              Lorem ipsum dolor sit amet
            </Lists>
          </div>

          {/*  */}
          <div className=" space-y-5  ">
            <Lists basic success roundedMd count="1">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists basic danger roundedMd count="2">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists basic info roundedMd count="3">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists basic warning roundedMd count="4">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists basic dark roundedMd count="5">
              Lorem ipsum dolor sit amet
            </Lists>
          </div>

          {/*  */}
          <div className=" space-y-5  ">
            <Lists rotate success roundedMd count="1">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists rotate danger roundedMd count="2">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists rotate info roundedMd count="3">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists rotate warning roundedMd count="4">
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists rotate dark roundedMd count="5">
              Lorem ipsum dolor sit amet
            </Lists>
          </div>
          {/*  */}

          <div className=" space-y-5  ">
            <Lists OkaySign success roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists OkaySign danger roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists OkaySign info roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists OkaySign warning roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists OkaySign dark roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
          </div>

          {/*  */}
          <div className=" space-y-5  ">
            <Lists OkaySign crossIcon success roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists OkaySign crossIcon danger roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists OkaySign crossIcon info roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists OkaySign crossIcon warning roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists OkaySign crossIcon dark roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
          </div>

          {/*  */}
          <div className=" space-y-5  ">
            <Lists arrow crossIcon success roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists arrow crossIcon danger roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists arrow crossIcon info roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists arrow crossIcon warning roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists arrow crossIcon dark roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
          </div>

          {/*  */}
          <div className=" space-y-5  ">
            <Lists star crossIcon success roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists star crossIcon danger roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists star crossIcon info roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists star crossIcon warning roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
            <Lists star crossIcon dark roundedMd>
              Lorem ipsum dolor sit amet
            </Lists>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Preview;
