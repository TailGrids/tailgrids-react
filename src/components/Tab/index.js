import React from "react";

const Tab = ({ children, open, handleTabOpen }) => {
  return (
    <>
      {/* <!-- ====== Tab Section Start --> */}

      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="w-full mb-14">
            <div className="flex flex-wrap rounded-lg border border-[#E4E4E4] py-3 px-4 space-x-2">
              <a
                onClick={() => handleTabOpen("home")}
                className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500 transition-all delay-75 cursor-pointer ${
                  open === "home"
                    ? "activeClasses bg-primary text-white"
                    : "inactiveClasses"
                }`}
              >
                Home
              </a>
              <a
                onClick={() => handleTabOpen("about")}
                className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500 transition-all delay-75 cursor-pointer ${
                  open === "about"
                    ? "activeClasses bg-primary text-white"
                    : "inactiveClasses"
                }`}
              >
                About Us
              </a>
              <a
                onClick={() => handleTabOpen("team")}
                className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500 transition-all delay-75 cursor-pointer ${
                  open === "team"
                    ? "activeClasses bg-primary text-white"
                    : "inactiveClasses"
                }`}
              >
                Our Team
              </a>
              <a
                onClick={() => handleTabOpen("company")}
                className={`rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6 hover:bg-blue-500 transition-all delay-75 cursor-pointer ${
                  open === "company"
                    ? "activeClasses bg-primary text-white"
                    : "inactiveClasses"
                }`}
              >
                Company Details
              </a>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>

      {/* <!-- ====== Tab Section End -->    */}
    </>
  );
};

export default Tab;
