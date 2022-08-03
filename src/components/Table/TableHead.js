import React from "react";

const TableHead = ({ children }) => {
  return (
    <>
      <thead className="text-center bg-primary">{children}</thead>
    </>
  );
};

export default TableHead;
