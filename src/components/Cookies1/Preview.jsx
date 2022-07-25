import React from "react";
import Cookies from "../Cookies1";
import Button from "./Button";

const Preview = () => {
  return (
    <>
      <Cookies
        title="We use cookies"
        details="Please, accept these sweeties to continue enjoying our site!"
      >
        <Button>Accept</Button>
        <Button textColor="black" color="white">
          Close
        </Button>
      </Cookies>
    </>
  );
};

export default Preview;
