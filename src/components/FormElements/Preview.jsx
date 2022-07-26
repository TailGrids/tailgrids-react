import React from "react";
import FormElements from "../FormElements";
import Elements from "./Elements";

const Preview = () => {
  return (
    <>
      <FormElements>
        <Elements input placeholder="Default Input" level="Default Input" />
        <Elements
          input
          placeholder="Default Input"
          active
          level="Default Input"
        />
        <Elements
          input
          placeholder="Default Input"
          disabled
          level="Default Input"
        />
        <Elements
          textArea
          rows="5"
          defaultValue=""
          placeholder="Default Input"
          level="Default Input"
        />
        <Elements
          textArea
          rows="5"
          active
          defaultValue=""
          placeholder="Default Input"
          level="Default Input"
        />
        <Elements
          textArea
          defaultValue=""
          placeholder="Default Input"
          disabled
          level="Default Input"
        />
        <Elements
          fileInput
          defaultValue=""
          placeholder="Default Input"
          disabled
          level="Default Input"
        />
        <Elements
          Options
          defaultValue=""
          placeholder="Default Input"
          disabled
          level="Default Input"
        >
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </Elements>
      </FormElements>
    </>
  );
};

export default Preview;
