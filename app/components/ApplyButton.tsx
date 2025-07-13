import React from "react";

function ApplyButton() {
  // change to true when applications open
  const openApplications = false;
  const buttonLabel = openApplications
    ? "Apply"
    : "Applications Closed";

  return (
    <a
      href="https://portal.garudahacks.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        disabled={!openApplications}
        className={
          openApplications
            ? "rounded-md px-6 py-3 border-[#FF0068] border-[1px] bg-gradient-to-tr from-[#FF0068] to-[#FF3385] font-bold font-sans text-white hover:opacity-80"
            : "rounded-md px-6 py-3 border-gray-500 border-[1px] bg-gradient-to-br from-gray-500 to-gray-600 cursor-not-allowed font-bold font-sans text-white hover:opacity-80"
        }
      >
        {buttonLabel}
      </button>
    </a>
  );
}

export default ApplyButton;
