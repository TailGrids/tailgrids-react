import React from "react";
import FormsInputBox from "./FormsInputBox";
import Forms from "./index";

const Preview = () => {
  return (
    <>
      <Forms
        facebookSrc="/#"
        TwitterSrc="/#"
        GoogleSrc="/#"
        SignUp="/signup"
        logoHref="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg"
      >
        <FormsInputBox
          type="text"
          placeholder="Email"
          name="email"
          defaultValue=""
        />
        <FormsInputBox
          type="password"
          placeholder="password"
          name="password"
          defaultValue=""
        />
        <FormsInputBox
          bgColor="primary"
          type="submit"
          placeholder="password"
          name="password"
          defaultValue="Login "
        />
      </Forms>
    </>
  );
};

export default Preview;
