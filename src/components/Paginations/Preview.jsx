import React from "react";
import Paginations from ".";
import Page from "./Page";

const Preview = () => {
  let totalPage = 35;

  return (
    <>
      <Paginations color="primary">
        <Page color="primary" count="1" pageSrc="/#" />
        <Page color="primary" count="2" pageSrc="/#" />
        <Page color="primary" count="3" pageSrc="/#" />
        <Page color="primary" count="4" pageSrc="/#" />
        <Page color="primary" count="5" pageSrc="/#" />
        <Page color="primary" count="6" pageSrc="/#" />
      </Paginations>
    </>
  );
};

export default Preview;
