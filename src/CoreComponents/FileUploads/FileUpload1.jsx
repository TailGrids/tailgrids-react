import React from "react";

export default function FileUpload1() {
  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container">
        <div className="w-full max-w-[400px]">
          <label className="mb-2.5 block text-base font-medium text-dark dark:text-white">
            Upload a File:
          </label>
          <div className="relative">
            <input
              type="file"
              className="w-full rounded-lg border border-stroke p-3 text-body-color outline-none duration-200 file:mr-4 file:rounded file:border-[.5px] file:border-stroke file:bg-gray-3 file:px-3 file:py-1 file:text-base file:text-dark focus:border-primary active:border-primary dark:border-dark-3 dark:text-dark-6 dark:file:border-dark-3 dark:file:bg-dark-3 dark:file:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
