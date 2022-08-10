import React from "react";

const Tab = ({ children }) => {
  return (
    <>
      {/* <!-- ====== Tab Section Start --> */}

      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="w-full mb-14">
            <div>{children}</div>
          </div>
        </div>
      </div>

      {/* <!-- ====== Tab Section End -->    */}
    </>
  );
};

export default Tab;
