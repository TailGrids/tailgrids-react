import React from "react";

import Error from "./index";

const Preview = () => {
  return (
    <>
      <Error
        button="Go to Home"
        buttonHref="/#"
        title=" Oops! That page can't be found"
        details="The page you are looking for it maybe deleted"
      />
    </>
  );
};

export default Preview;
