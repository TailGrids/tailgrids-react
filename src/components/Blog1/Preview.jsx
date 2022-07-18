import React from "react";
import Blogs from "../Blog1";
import BlogCard from "./BlogCard";

const Preview = () => {
  return (
    <>
      <Blogs
        subtitle="Our Blogs"
        title=" Our Recent News"
        blogDescription="There are many variations of passages of Lorem Ipsum available
         but the majority have suffered alteration in some form."
      >
        <BlogCard
          date="Dec 22, 2023"
          CardTitle="Meet AutoManage, the best AI management tools"
          CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
        />
        <BlogCard
          date="Dec 22, 2023"
          CardTitle="Meet AutoManage, the best AI management tools"
          CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          image="https://i.ibb.co/Y23YC07/image-02.jpg"
        />
        <BlogCard
          date="Dec 22, 2023"
          CardTitle="Meet AutoManage, the best AI management tools"
          CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          image="https://i.ibb.co/7jdcnwn/image-03.jpg"
        />
      </Blogs>
    </>
  );
};

export default Preview;
