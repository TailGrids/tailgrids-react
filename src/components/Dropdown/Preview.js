import React from "react";
import Dropdown from ".";
import DropdownItem from "./DropdownItem";

const Preview = () => {
  return (
    <>
      <Dropdown Button="Dropdown Button">
        <DropdownItem menu="Dashboard" />
        <DropdownItem menu="Preview" />
        <DropdownItem menu="Button" />
        <DropdownItem menu="Subscribe" />
      </Dropdown>
      <Dropdown bgColor="warning" dropColor="white" Button="Dropdown Button">
        <DropdownItem menu="Dashboard" />
        <DropdownItem menu="Preview" />
        <DropdownItem menu="Button" />
        <DropdownItem menu="Subscribe" />
      </Dropdown>
    </>
  );
};

export default Preview;
