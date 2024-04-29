import React from "react";

const UnOrderedList1 = () => {
  return (
    <div className="w-full">
      <ul className="space-y-3">
        <ListItem text="It is a long established fact reader" />
        <ListItem text="It is a long established fact reader" />
        <ListItem text="The point of using Lorem Ipsum" />
        <ListItem text="There are many variations of passages" />
        <ListItem text="If you are going to use a of Lorem" />
      </ul>
    </div>
  );
};

export default UnOrderedList1;

const ListItem = ({ text }) => {
  return (
    <li className="text-body-color dark:text-dark-6 flex text-base">
      <span className="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
      {text}
    </li>
  );
};
