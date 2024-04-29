import React from "react";

const TableGrid1 = () => {
  return (
    <section className="bg-white pb-[84px] pt-[120px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="mb-9">
          <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]">
            My Library
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-01.jpg"
            link="/#"
            title="family_photo.jpg"
            size="589KB"
          />
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-02.jpg"
            link="/#"
            title="office_tour.png"
            size="985KB"
          />
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-03.jpg"
            link="/#"
            title="personal_image.jpg"
            size="4MB"
          />
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-04.jpg"
            link="/#"
            title="my_photo.jpg"
            size="993KB"
          />
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-05.jpg"
            link="/#"
            title="mother_image.jpg"
            size="7MB"
          />
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-06.jpg"
            link="/#"
            title="father_image.jpg"
            size="2MB"
          />
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-07.jpg"
            link="/#"
            title="brother_image.jpg"
            size="343KB"
          />
          <TableGridItem
            image="https://cdn.tailgrids.com/2.0/image/application/images/table-grids/table-grid-01/image-08.jpg"
            link="/#"
            title="sister_image.jpg"
            size="5MB"
          />
        </div>
      </div>
    </section>
  );
};

export default TableGrid1;

const TableGridItem = ({ image, link, title, size }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mb-9">
        <div className="mb-[10px] overflow-hidden rounded">
          <img
            src={image}
            alt="table grids"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <a
            href={link}
            className="inline-block text-base font-medium text-dark hover:text-primary dark:text-white"
          >
            {title}
          </a>
          <p className="text-sm text-body-color dark:text-dark-6">{size}</p>
        </div>
      </div>
    </div>
  );
};
