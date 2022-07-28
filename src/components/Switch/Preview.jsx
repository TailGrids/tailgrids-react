import React from "react";
import Switch from "../Switch";
import Checkbox from "./Checkbox";

const Preview = () => {
  return (
    <>
      <div className="container mt-20">
        <div className="grid grid-cols-3 space-y-5">
          <Switch togglePrimary />
          <Switch toggleSecondary />
          <Switch toggleThree />
          <Switch toggleFour />
          <Switch toggleFive />
          <Switch toggleSix />
          <Switch toggleSeven />
          <Switch toggleEight />
          <Switch toggleNine />
          <Checkbox text="checked" checkboxLabelFive />
          <Checkbox text="checked" checkboxLabelOne />
          <Checkbox text="checked" checkboxLabelThree />
          <Checkbox text="checked" checkboxLabelFour />
          <Checkbox text="checked" checkboxLabelTwo />
        </div>
      </div>
    </>
  );
};

export default Preview;
