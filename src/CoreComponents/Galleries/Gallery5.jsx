import React, { useState } from "react";

const galleryData = [
  {
    id: 1,
    image: "https://i.ibb.co/YkTJnYK/image-1.jpg",
    thumbnail: "https://i.ibb.co/v1j4xcV/thumbnail-1.jpg",
    alt: "",
  },
  {
    id: 2,
    image: "https://i.ibb.co/XYM59J0/image-2.jpg",
    thumbnail: "https://i.ibb.co/tbpGXLw/thumbnail-2.jpg",
    alt: "",
  },
  {
    id: 3,
    image: "https://i.ibb.co/cgQTyGZ/image-3.jpg",
    thumbnail: "https://i.ibb.co/F87R2Qf/thumbnail-3.jpg",
    alt: "",
  },
  {
    id: 4,
    image: "https://i.ibb.co/gDXg7Jn/image-4.jpg",
    thumbnail: "https://i.ibb.co/Vj08m6n/thumbnail-4.jpg",
    alt: "",
  },
];

export default function Gallery5() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section class="bg-white py-20 dark:bg-dark">
      <div class="container">
        <div>
          <div class="mb-6">
            <div class="overflow-hidden rounded-xl">
              {galleryData.map((item, i) => (
                <img
                  key={i}
                  src={item?.image}
                  alt={item?.alt}
                  class={`w-full object-cover object-center ${
                    activeIndex === item?.id ? "block" : "hidden"
                  }`}
                />
              ))}
            </div>
          </div>
          <div class="flex items-center gap-2 sm:gap-4 md:gap-6">
            {galleryData.map((gallery, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(gallery?.id)}
                className={`${
                  activeIndex === gallery?.id
                    ? "border-primary"
                    : "border-transparent"
                } overflow-hidden rounded-lg border lg:rounded-xl`}
              >
                <img
                  src={gallery?.thumbnail}
                  alt={gallery?.alt}
                  class="w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
