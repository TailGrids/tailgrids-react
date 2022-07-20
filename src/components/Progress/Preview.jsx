import React from "react";
import Progress from "./Progress";

const Preview = () => {
  return (
    <>
      <Progress />
      <Progress warning />
      <Progress danger />
      <Progress success />
      <Progress ShowValue />
      <Progress danger ShowValue />
      <Progress warning ShowValue />
      <Progress success ShowValue />
      <Progress warning ShowValueInside />
      <Progress success ShowValueInside />
      <Progress danger ShowValueInside />
      <Progress primary ShowValueInside />
    </>
  );
};

export default Preview;
