"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#FFFFFF] top-0 left-0 right-0 z-10 bg-[#222831] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto  px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-[#DDDDDD] font-semibold font-body"
        >
          <div className="flex flex-wrap justify-items-center">
            <p className="text-[#F05454]">&#123;Super</p>
            <p className="text-[#FFFFFF]">Nova&#125;</p>
            {/*Only way to render the curly braces as a text is with the respective HTML character code*/}
          </div>
          <div>
            <ThemeToggle />
          </div>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border round border-white hover:text-[#5D8BF4] text-white hover:border-[#5D8BF4]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border round border-white hover:text-[#5D8BF4] text-white hover:border-[#5D8BF4]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
