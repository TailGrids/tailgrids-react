import React from "react";
import Card from "./index";

const Preview = () => {
  return (
    <>
      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 h-full  bg-[#F3F4F6]">
        <div className="container grid grid-cols-3 gap-12 mt-12 ]">
          <Card
            image="https://i.ibb.co/r2zns1m/image-01.jpg"
            CardTitle=" Creative Card Component designs graphic elements"
            titleHref
            btnHref
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <Card
            image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
            CardTitle=" Creative Card Component designs graphic elements"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <Card
            image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
            CardTitle=" Creative Card Component designs graphic elements"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
        </div>
      </section>
    </>
  );
};

export default Preview;
