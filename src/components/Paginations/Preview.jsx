import React from "react";
import Paginations from ".";
import Page from "./Page";

const Preview = () => {
  return (
    <>
      <Paginations>
        <Page count="1" pageSrc="/#" />
        <Page count="2" pageSrc="/#" />
        <Page count="3" pageSrc="/#" />
        <Page count="4" pageSrc="/#" />
        <Page count="5" pageSrc="/#" />
        <Page count="6" pageSrc="/#" />
      </Paginations>
    </>
  );
};

export default Preview;
