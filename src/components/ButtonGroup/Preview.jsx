import React from "react";
import ButtonGroup from "../ButtonGroup";

const Preview = () => {
  return (
    <>
      <ButtonGroup />
      <ButtonGroup roundedFull />
      <ButtonGroup roundedFull success />
      <ButtonGroup roundedFull warning />
      <ButtonGroup roundedFull danger />
      <ButtonGroup roundedFull info />
      {/*  */}
      <ButtonGroup withIcon />
      <ButtonGroup withIcon roundedLg />
      <ButtonGroup withIcon roundedLg info />
      <ButtonGroup withIcon roundedLg danger />
      <ButtonGroup withIcon roundedLg success />
      <ButtonGroup withIcon roundedLg warning />
    </>
  );
};

export default Preview;
