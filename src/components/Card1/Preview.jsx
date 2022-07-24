import React from "react";
import Card from "../Card1";

const Preview = () => {
  return (
    <>
      <div className="container grid grid-cols-3 gap-12 mt-12">
        <Card
          image="https://i.ibb.co/r2zns1m/image-01.jpg"
          CartTitle=" Creative Card Component designs graphic elements"
          CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
          Button="View Details"
        />
        <Card
          image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
          CartTitle=" Creative Card Component designs graphic elements"
          CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
          Button="View Details"
        />
        <Card
          image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
          CartTitle=" Creative Card Component designs graphic elements"
          CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
          Button="View Details"
        />
      </div>
    </>
  );
};

export default Preview;
