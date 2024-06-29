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
    <div className="w-8 h-8" onClick={() => setDarkMode(!darkMode)}>
      <MoonIcon className="text-white" size={8} />
      <div className="text-blue-500 transform transition-transform duration-300"></div>
      <SunIcon className="text-yellow-500"
      />
    </div>
  );
};

export default ThemeToggle;
