import React from "react";
import List from "./index";

const Preview = () => {
  return (
    <>
      <div className="container py-12 space-y-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 ">
          {/*  */}
          <div className=" space-y-5  ">
            <List basic success roundedFull count="1">
              Lorem ipsum dolor sit amet
            </List>
            <List basic danger roundedFull count="2">
              Lorem ipsum dolor sit amet
            </List>
            <List basic info roundedFull count="3">
              Lorem ipsum dolor sit amet
            </List>
            <List basic warning roundedFull count="4">
              Lorem ipsum dolor sit amet
            </List>
            <List basic dark roundedFull count="5">
              Lorem ipsum dolor sit amet
            </List>
          </div>

          {/*  */}
          <div className=" space-y-5  ">
            <List basic success roundedMd count="1">
              Lorem ipsum dolor sit amet
            </List>
            <List basic danger roundedMd count="2">
              Lorem ipsum dolor sit amet
            </List>
            <List basic info roundedMd count="3">
              Lorem ipsum dolor sit amet
            </List>
            <List basic warning roundedMd count="4">
              Lorem ipsum dolor sit amet
            </List>
            <List basic dark roundedMd count="5">
              Lorem ipsum dolor sit amet
            </List>
          </div>

          {/*  */}
          <div className=" space-y-5  ">
            <List rotate success roundedMd count="1">
              Lorem ipsum dolor sit amet
            </List>
            <List rotate danger roundedMd count="2">
              Lorem ipsum dolor sit amet
            </List>
            <List rotate info roundedMd count="3">
              Lorem ipsum dolor sit amet
            </List>
            <List rotate warning roundedMd count="4">
              Lorem ipsum dolor sit amet
            </List>
            <List rotate dark roundedMd count="5">
              Lorem ipsum dolor sit amet
            </List>
          </div>
          {/*  */}

          <div className=" space-y-5  ">
            <List OkaySign success roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List OkaySign danger roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List OkaySign info roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List OkaySign warning roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List OkaySign dark roundedMd>
              Lorem ipsum dolor sit amet
            </List>
          </div>

          {/*  */}
          <div className=" space-y-5  ">
            <List OkaySign crossIcon success roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List OkaySign crossIcon danger roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List OkaySign crossIcon info roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List OkaySign crossIcon warning roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List OkaySign crossIcon dark roundedMd>
              Lorem ipsum dolor sit amet
            </List>
          </div>

          {/*  */}
          <div className=" space-y-5  ">
            <List arrow crossIcon success roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List arrow crossIcon danger roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List arrow crossIcon info roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List arrow crossIcon warning roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List arrow crossIcon dark roundedMd>
              Lorem ipsum dolor sit amet
            </List>
          </div>

          {/*  */}
          <div className=" space-y-5  ">
            <List star crossIcon success roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List star crossIcon danger roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List star crossIcon info roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List star crossIcon warning roundedMd>
              Lorem ipsum dolor sit amet
            </List>
            <List star crossIcon dark roundedMd>
              Lorem ipsum dolor sit amet
            </List>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Preview;
