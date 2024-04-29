import React from "react";

const OrderedList3 = () => {
  return (
    <div className="w-full">
      <ol className="space-y-5">
        <ListItem count={1} text="It is a long established fact reader" />
        <ListItem count={2} text="It is a long established fact reader" />
        <ListItem count={3} text="The point of using Lorem Ipsum" />
        <ListItem count={4} text="There are many variations of passages" />
        <ListItem count={5} text="If you are going to use a of Lorem" />
      </ol>
    </div>
  );
};

export default OrderedList3;

const ListItem = ({ count, text }) => {
  return (
    <li className="text-body-color dark:text-dark-6 flex text-base">
      <span className="relative z-10 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
        <span className="bg-primary absolute top-0 left-0 z-[-1] h-full w-full -rotate-45 rounded"></span>
        {count}
      </span>
      {text}
    </li>
  );
};
