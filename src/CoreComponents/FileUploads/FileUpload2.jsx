import React from "react";

export default function FileUpload2() {
  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container">
        <div className="w-full max-w-[400px]">
          <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
            Default file input
          </label>
          <input
            type="file"
            className="w-full cursor-pointer rounded-lg border border-stroke text-dark-6 outline-none duration-200 file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:bg-dark-2 file:px-4 file:py-3 file:text-white file:hover:bg-dark/90 dark:border-dark-3 dark:file:bg-white/5 dark:file:hover:bg-white/10"
          />
        </div>
      </div>
    </section>
  );
}
