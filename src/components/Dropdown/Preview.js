import React from "react";
import Dropdown from ".";
import DropdownItem from "./DropdownItem";

const Preview = () => {
  return (
    <>
      <Dropdown Button="Dropdown Button">
        <DropdownItem href="#" label="Dashboard" />
        <DropdownItem href="#" label="Preview" />
        <DropdownItem href="#" label="Button" />
        <DropdownItem href="#" label="Subscribe" />
      </Dropdown>
      <Dropdown bgColor="warning" dropColor="white" Button="Dropdown Button">
        <DropdownItem href="#" label="Dashboard" />
        <DropdownItem href="#" label="Preview" />
        <DropdownItem href="#" label="Button" />
        <DropdownItem href="#" label="Subscribe" />
      </Dropdown>
    </>
  );
};

export default Preview;
