import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import Path from "./Path";

const Preview = () => {
  return (
    <div className="space-y-6">
      <Breadcrumbs round="lg">
        <div className="flex">
          <Path path="Home" arrow hover="dark" />
          <Path path="Project" arrow color="body-color" />
          <Path path="Marketing" color="body-color" />
        </div>
      </Breadcrumbs>
      <Breadcrumbs>
        <div className="flex">
          <Path icons path="Home" arrow hover="primary" />
          <Path path="Project" arrow color="body-color" hover="primary" />
          <Path path="Marketing" color="body-color" hover="primary" />
        </div>
      </Breadcrumbs>
      <Breadcrumbs>
        <div className="flex">
          <Path path="Home" slash />
          <Path path="Project" slash color="body-color" />
          <Path path="Marketing" color="body-color" />
        </div>
      </Breadcrumbs>
      <Breadcrumbs>
        <div className="flex">
          <Path icons path="Home" slash />
          <Path path="Project" slash color="body-color" />
          <Path path="Marketing" color="body-color" />
        </div>
      </Breadcrumbs>
      <Breadcrumbs>
        <div className="flex">
          <Path path="Home" arrow1 />
          <Path path="Project" arrow1 color="body-color" />
          <Path path="Marketing" color="primary" />
        </div>
      </Breadcrumbs>
      <Breadcrumbs>
        <div className="flex">
          <Path icons path="Home" arrow1 />
          <Path path="Project" arrow1 color="body-color" />
          <Path path="Marketing" color="primary" />
        </div>
      </Breadcrumbs>
      <Breadcrumbs theme="primary" round="lg">
        <div className="flex">
          <Path icons iconsColor="white" path="Home" color="white" arrow1 />
          <Path iconsColor="white" color="white" path="Project" arrow1 />
          <Path path="Marketing" color="white" />
        </div>
      </Breadcrumbs>
      <Breadcrumbs theme="dark" round="lg">
        <div className="flex">
          <Path icons iconsColor="white" path="Home" color="white" arrow1 />
          <Path iconsColor="white" color="white" path="Project" arrow1 />
          <Path path="Marketing" color="white" />
        </div>
      </Breadcrumbs>
      <Breadcrumbs>
        <div className="flex items-center justify-center">
          <Path icons path="Home" arrow1 />
          <Path path="Project" arrow1 color="body-color" />
          <Path path="Marketing" color="primary" />
        </div>
      </Breadcrumbs>
    </div>
  );
};

export default Preview;
