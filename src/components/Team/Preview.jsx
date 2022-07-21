import React from "react";
import Team from "../Team";
import TeamCard from "./TeamCard";

const Preview = () => {
  return (
    <>
      <Team
        subtitle="Our Team"
        title="Our Awesome Team"
        discription="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
      >
        <TeamCard
          name="Coriss Ambady"
          profession="Web Developer"
          imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
        />
        <TeamCard
          name="Coriss Ambady"
          profession="Web Developer"
          imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
        />
        <TeamCard
          name="Coriss Ambady"
          profession="Web Developer"
          imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
        />
        <TeamCard
          name="Coriss Ambady"
          profession="Web Developer"
          imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
        />
      </Team>
    </>
  );
};

export default Preview;
