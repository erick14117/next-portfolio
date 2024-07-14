"use client";
import { useEffect, useState } from "react";
import { SunIcon } from "@heroicons/react/16/solid";
import { MoonIcon } from "@heroicons/react/16/solid";

import React from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="relative sm:w-9 sm:h-5 md:w-16 md:h-8 flex items-center cursor-pointer 
    dark:bg-[#FBE9B4] bg-[#062E3F]
    rounded-full p-1 " 
    onClick={() => setDarkMode(!darkMode)}>
      <SunIcon className="text-[#062E3F] dark:text-[#FFFFFF] z-10" size={18} />
      <div className="absolute bg-[#0BAEEA]
      dark:bg-[#F4C248] sm:w-4 sm:h-4 md:w-7 md:h-7 rounded-full shadow-md 
      transform transition-transform duration-300"
      style={darkMode ? {left: "4px"}:{right: "4px"}}
      ></div>
      <MoonIcon className="text-[#FFFFFF] dark:text-[#FBE9B4]  z-10" size={18}
      />
    </div>
  );
};

export default ThemeToggle;
