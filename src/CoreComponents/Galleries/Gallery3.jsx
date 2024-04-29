import React from "react";

export default function Gallery3() {
  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container">
        <div className="break-inside-avoid gap-8 md:columns-2">
          <div className="mb-8 overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/JdQMcQL/image-1.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="mb-8 overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/QCGsX6f/image-2.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="mb-8 overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/QMBSTSC/image-3.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="mb-8 overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/yPB7cw4/image-4.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="mb-8 overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/qnG1YZp/image-5.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="mb-8 overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/w7qyhF1/image-6.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
