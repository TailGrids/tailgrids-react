import React from "react";
import Switch from "../Switch";

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
          <Switch checkboxLabelFive />
          <Switch checkboxLabelOne />
          <Switch checkboxLabelThree />
          <Switch checkboxLabelFour />
          <Switch checkboxLabelTwo />
          <Switch checkboxLabelFour />
        </div>
      </div>
    </>
  );
};

export default Preview;
