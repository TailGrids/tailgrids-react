import React from "react";

const Tablies = ({ Thead, Tbody }) => {
  return (
    <>
      {/* ====== Table Section Start */}

      <div className="flex flex-wrap -mx-4">
        <div className="w-full ">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              {Thead}

              {Tbody}
            </table>
          </div>
        </div>
      </div>

      {/* ====== Table Section End */}
    </>
  );
};

export default Tablies;
