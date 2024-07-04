import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-white :text-[#DDDDDD]  dark:border-b dark:border-[#525252] dark:text-[#525252]"
    : "text-white dark:text-[#525252]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold  hover:text-[#F05454] hover:border-b hover:border-[#F05454] dark:text-[#525252]
        dark:hover:text-[#F05454] dark:hover:border-b dark:hover:border-[#F05454]  ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};{}
export default TabButton;
