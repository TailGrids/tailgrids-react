import React from "react";

const OrderedList2 = () => {
  return (
    <div className="w-full">
      <ol className="space-y-3">
        <ListItem count={1} text="It is a long established fact reader" />
        <ListItem count={2} text="It is a long established fact reader" />
        <ListItem count={3} text="The point of using Lorem Ipsum" />
        <ListItem count={4} text="There are many variations of passages" />
        <ListItem count={5} text="If you are going to use a of Lorem" />
      </ol>
    </div>
  );
};

export default OrderedList2;

const ListItem = ({ count, text }) => {
  return (
    <li className="text-body-color dark:text-dark-6 flex text-base">
      <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
        {count}
      </span>
      {text}
    </li>
  );
};
