import React from "react";

export default function Gallery2() {
  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/zGVkyNX/image-1.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/Tc5MqBD/image-2.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/qjwc7Qq/image-3.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/tHxwXGT/image-4.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/SrWGCY8/image-5.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/drWGPRt/image-6.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/1rtHscW/image-7.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/H4zC1j4/image-8.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://i.ibb.co/QMB14TC/image-9.jpg"
              alt="gallery image"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
