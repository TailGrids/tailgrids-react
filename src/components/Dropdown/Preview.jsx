import React from "react";
import Dropdown from ".";
import SubMenu from "./SubMenu";

const Preview = () => {
  return (
    <>
      <Dropdown Button="Dropdown Button">
        <SubMenu menu="Dashboad" />
        <SubMenu menu="Preview" />
        <SubMenu menu="Button" />
        <SubMenu menu="Subscribe" />
      </Dropdown>
      <Dropdown bgColor="warning" dropColor="white" Button="Dropdown Button">
        <SubMenu menu="Dashboad" />
        <SubMenu menu="Preview" />
        <SubMenu menu="Button" />
        <SubMenu menu="Subscribe" />
      </Dropdown>
    </>
  );
};

export default Preview;
