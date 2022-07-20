import React from "react";

const Page = ({ pageSrc, count }) => {
  return (
    <>
      <li className="px-[6px]">
        <a
          href={pageSrc}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:border-primary hover:bg-primary hover:text-white"
        >
          {count}
        </a>
      </li>
    </>
  );
};

export default Page;
