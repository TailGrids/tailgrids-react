import React from "react";
import Forms from "../Forms";
import InputBox from "./InputBox";

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
        <InputBox
          type="text"
          placeholder="Email"
          name="email"
          defaultValue=""
        />
        <InputBox
          type="password"
          placeholder="password"
          name="password"
          defaultValue=""
        />
        <InputBox
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
