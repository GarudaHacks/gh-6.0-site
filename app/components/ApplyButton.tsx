import React from "react";

function ApplyButton() {
  // change to true when applications open
  const openApplications = false;
  const buttonLabel = openApplications
    ? "Apply"
    : "Application is not yet open";

  return (
    <button
      disabled={!openApplications}
      className={
        openApplications
          ? "rounded-md px-6 py-2 border-red-400 border-[1px] bg-gradient-to-tr from-red-400 to-red-600 font-bold font-sans text-white hover:opacity-80"
          : "rounded-md px-6 py-2 border-gray-500 border-[1px] bg-gradient-to-br from-gray-500 to-gray-600 cursor-not-allowed font-bold font-sans text-white hover:opacity-80"
      }
    >
      {buttonLabel}
    </button>
  );
}

export default ApplyButton;
