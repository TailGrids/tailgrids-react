import React from "react";
import FormElement from "./FormElement";

const Preview = () => {
  return (
    <>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <FormElement
              input
              placeholder="Default Input"
              level="Default Input"
            />
            <FormElement
              input
              placeholder="Default Input"
              active
              level="Default Input"
            />
            <FormElement
              input
              placeholder="Default Input"
              disabled
              level="Default Input"
            />
            <FormElement
              textArea
              rows="5"
              defaultValue=""
              placeholder="Default Input"
              level="Default Input"
            />
            <FormElement
              textArea
              rows="5"
              active
              defaultValue=""
              placeholder="Default Input"
              level="Default Input"
            />
            <FormElement
              textArea
              defaultValue=""
              placeholder="Default Input"
              disabled
              level="Default Input"
            />
            <FormElement
              fileInput
              defaultValue=""
              placeholder="Default Input"
              disabled
              level="Default Input"
            />
            <FormElement
              select
              defaultValue=""
              placeholder="Default Input"
              disabled
              level="Default Input"
            >
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </FormElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
