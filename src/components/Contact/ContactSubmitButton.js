import React from "react";

const ContactSubmitButton = ({ type, children }) => {
  return (
    <>
      <div>
        <button
          type={type}
          className="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default ContactSubmitButton;
