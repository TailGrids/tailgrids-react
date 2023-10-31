import React from "react";

const OrderedList1 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <h3 className="mb-10 text-[26px] font-semibold text-dark dark:text-white">
          Order list
        </h3>

        <ol className="space-y-3">
          <ListItem count={1} text="It is a long established fact reader" />
          <ListItem count={2} text="It is a long established fact reader" />
          <ListItem count={3} text="The point of using Lorem Ipsum" />
          <ListItem count={4} text="There are many variations of passages" />
          <ListItem count={5} text="If you are going to use a of Lorem" />
        </ol>
      </div>
    </section>
  );
};

export default OrderedList1;

const ListItem = ({ count, text }) => {
  return (
    <li className="flex text-base text-body-color dark:text-dark-6">
      <span className="mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded-full bg-primary text-base text-white">
        {count}
      </span>
      {text}
    </li>
  );
};
