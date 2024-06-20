import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-white :text-[#DDDDDD]"
    : "text-white";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#F05454] hover:border-b hover:border-[#F05454] ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};{}
export default TabButton;
