import React from "react";

const Stats1 = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-24">
      <div className="mx-auto px-4 sm:container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <StatsItem
            user="5M+"
            title="Customers visit Omega every month to get their service done."
          />
          <StatsItem
            user="92%"
            title="Satisfaction rate comes from our awesome customers."
          />
          <StatsItem
            user="500+"
            title="Average Award we have got all over internet."
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2">
        <img
          src="https://cdn.tailgrids.com/2.0/image/marketing/images/stats/background-shape.svg"
          alt="graphic"
          className="h-full w-full"
        />
      </div>
    </section>
  );
};

export default Stats1;

const StatsItem = ({ user, title }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mx-auto mb-10 max-w-[325px] text-center lg:mb-0">
        <h3 className="mb-4 text-4xl font-bold leading-[1.2] text-white lg:text-5xl">
          {user}
        </h3>
        <p className="text-base text-white sm:text-lg">{title}</p>
      </div>
    </div>
  );
};
