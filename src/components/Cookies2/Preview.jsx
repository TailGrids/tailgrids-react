import React from "react";
import Cookies2 from "../Cookies2";
import Button from "./Button";

const Preview = () => {
  return (
    <>
      <Cookies2
        details="This website uses cookies to ensure you get the best experience on our website."
        title="Cookie Policies"
        titleRef="#"
      >
        <Button rounded="rounded-md">Accepts Cookeis</Button>
      </Cookies2>
    </>
  );
};

export default Preview;
