import React from "react";
import FormElements from "../FormElements";
import Element from "./Element";

const Preview = () => {
  return (
    <>
      <FormElements>
        <Element input placeholder="Default Input" level="Default Input" />
        <Element
          input
          placeholder="Default Input"
          active
          level="Default Input"
        />
        <Element
          input
          placeholder="Default Input"
          disabled
          level="Default Input"
        />
        <Element
          textArea
          rows="5"
          defaultValue=""
          placeholder="Default Input"
          level="Default Input"
        />
        <Element
          textArea
          rows="5"
          active
          defaultValue=""
          placeholder="Default Input"
          level="Default Input"
        />
        <Element
          textArea
          defaultValue=""
          placeholder="Default Input"
          disabled
          level="Default Input"
        />
        <Element
          fileInput
          defaultValue=""
          placeholder="Default Input"
          disabled
          level="Default Input"
        />
        <Element
          Options
          defaultValue=""
          placeholder="Default Input"
          disabled
          level="Default Input"
        >
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </Element>
      </FormElements>
    </>
  );
};

export default Preview;
