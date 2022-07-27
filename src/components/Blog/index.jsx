import React from "react";

const Blog = ({ children }) => {
  return (
    <>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">{children}</div>
        </div>
      </section>
    </>
  );
};

export default Blog;
