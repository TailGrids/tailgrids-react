import React from "react";
import BreadcrumbLink from "./BreadcrumbLink";
import Breadcrumb from "./index";

const Preview = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb round="lg">
        <BreadcrumbLink path="Home" arrow hover="dark" />
        <BreadcrumbLink path="Project" arrow color="body-color" />
        <BreadcrumbLink path="Marketing" color="body-color" />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink homeIcon path="Home" arrow hover="primary" />
        <BreadcrumbLink
          path="Project"
          arrow
          color="body-color"
          hover="primary"
        />
        <BreadcrumbLink path="Marketing" color="body-color" hover="primary" />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink path="Home" slash />
        <BreadcrumbLink path="Project" slash color="body-color" />
        <BreadcrumbLink path="Marketing" color="body-color" />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink homeIcon path="Home" slash />
        <BreadcrumbLink path="Project" slash color="body-color" />
        <BreadcrumbLink path="Marketing" color="body-color" />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink path="Home" arrow1 />
        <BreadcrumbLink path="Project" arrow1 color="body-color" />
        <BreadcrumbLink path="Marketing" color="primary" />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink homeIcon path="Home" arrow1 />
        <BreadcrumbLink path="Project" arrow1 color="body-color" />
        <BreadcrumbLink path="Marketing" color="primary" />
      </Breadcrumb>
      <Breadcrumb theme="primary" round="lg">
        <BreadcrumbLink
          homeIcon
          iconsColor="white"
          path="Home"
          color="white"
          arrow1
        />
        <BreadcrumbLink
          iconsColor="white"
          color="white"
          path="Project"
          arrow1
        />
        <BreadcrumbLink path="Marketing" color="white" />
      </Breadcrumb>
      <Breadcrumb theme="dark" round="lg">
        <BreadcrumbLink
          homeIcon
          iconsColor="white"
          path="Home"
          color="white"
          arrow1
        />
        <BreadcrumbLink
          iconsColor="white"
          color="white"
          path="Project"
          arrow1
        />
        <BreadcrumbLink path="Marketing" color="white" />
      </Breadcrumb>
      <Breadcrumb center>
        <BreadcrumbLink homeIcon path="Home" arrow1 />
        <BreadcrumbLink path="Project" arrow1 color="body-color" />
        <BreadcrumbLink path="Marketing" color="primary" />
      </Breadcrumb>
    </div>
  );
};

export default Preview;
