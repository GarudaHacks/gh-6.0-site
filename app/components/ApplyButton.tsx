import React from 'react'

function ApplyButton() {
    // change to true when applications open
    const openApplications = false
    const buttonLabel = openApplications ? "Apply" : "Applications closed" 

    return (
        <button 
        disabled={!openApplications}
        className={
            openApplications 
                ? "rounded-full px-6 py-2 border-red-400 border-[1px] bg-gradient-to-tr from-red-400 to-red-600 font-bold font-sans text-white hover:opacity-80"
                : "rounded-full px-6 py-2 border-gray-500 border-[1px] bg-gradient-to-br from-gray-400 to-gray-600 cursor-not-allowed font-bold font-sans text-white hover:opacity-80"}>
            {buttonLabel}
        </button>
    )
}

export default ApplyButton