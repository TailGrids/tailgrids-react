import React from "react";

const Avatar2 = () => {
  return (
    <section className="bg-white py-[75px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="flex items-end justify-center space-x-2 sm:space-x-5">
          <AvatarItem
            img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-01.jpg"
            size="6"
          />
          <AvatarItem
            img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-02.jpg"
            size="[38px]"
          />
          <AvatarItem
            img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-03.jpg"
            size="[42px]"
          />
          <AvatarItem
            img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-04.jpg"
            size="[52px]"
          />
          <AvatarItem
            img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-05.jpg"
            size="20"
          />
        </div>
      </div>
    </section>
  );
};

export default Avatar2;

const AvatarItem = ({ img, size }) => {
  return (
    <div className={`h-${size} w-${size}`}>
      <img
        src={img}
        alt="avatar"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};
