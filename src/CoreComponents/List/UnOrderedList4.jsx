import React from "react";

const UnOrderedList4 = () => {
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

export default UnOrderedList4;

const ListItem = ({ text }) => {
  return (
    <li className="text-body-color dark:text-dark-6 flex text-base">
      <span className="text-red mr-2.5 flex items-center text-base">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_980_24913)">
            <path
              d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
              fill="currentColor"
            />
            <path
              d="M12.875 7.09375C12.5938 6.8125 12.1563 6.8125 11.875 7.09375L10 9L8.09375 7.09375C7.8125 6.8125 7.375 6.8125 7.09375 7.09375C6.8125 7.375 6.8125 7.8125 7.09375 8.09375L9 10L7.09375 11.9062C6.8125 12.1875 6.8125 12.625 7.09375 12.9062C7.21875 13.0312 7.40625 13.125 7.59375 13.125C7.78125 13.125 7.96875 13.0625 8.09375 12.9062L10 11L11.9062 12.9062C12.0312 13.0312 12.2188 13.125 12.4063 13.125C12.5938 13.125 12.7812 13.0625 12.9062 12.9062C13.1875 12.625 13.1875 12.1875 12.9062 11.9062L11 10L12.9062 8.09375C13.1562 7.8125 13.1563 7.375 12.875 7.09375Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_980_24913">
              <rect width={20} height={20} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      {text}
    </li>
  );
};
