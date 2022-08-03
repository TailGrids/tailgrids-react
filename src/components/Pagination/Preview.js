import React from "react";
import Pagination from "./index";
import PageLink from "./PageLink";

const Preview = () => {
  let totalPage = 35;

  return (
    <>
      <Pagination color="primary">
        <PageLink color="primary" count="1" pageSrc="/#" />
        <PageLink color="primary" count="2" pageSrc="/#" />
        <PageLink color="primary" count="3" pageSrc="/#" />
        <PageLink color="primary" count="4" pageSrc="/#" />
        <PageLink color="primary" count="5" pageSrc="/#" />
        <PageLink color="primary" count="6" pageSrc="/#" />
      </Pagination>
    </>
  );
};

export default Preview;
