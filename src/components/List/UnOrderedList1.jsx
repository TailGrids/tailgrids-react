import React from "react";

const UnOrderedList1 = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <h3 className="mb-10 text-[26px] font-semibold text-dark dark:text-white">
          UnOrder list
        </h3>
        <ul className="space-y-3">
          <ListItem text="It is a long established fact reader" />
          <ListItem text="It is a long established fact reader" />
          <ListItem text="The point of using Lorem Ipsum" />
          <ListItem text="There are many variations of passages" />
          <ListItem text="If you are going to use a of Lorem" />
        </ul>
      </div>
    </section>
  );
};

export default UnOrderedList1;

const ListItem = ({ text }) => {
  return (
    <li className="flex text-base text-body-color dark:text-dark-6">
      <span className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-primary text-base"></span>
      {text}
    </li>
  );
};
