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
    <nav className="fixed mx-auto  top-0 left-0 right-0 z-10 bg-[#EFEFEF] dark:bg-[#525252]">
      <div className="flex container  flex-wrap items-center justify-between mx-auto 
      sm:px-2 sm:py-1 
      md:px-4 md:py-2 
      lg:py-4">
            <Link
              href={"/"}
              className=" font-semibold font-body 
              sm:text-md  
              md:text-xl 
              lg:text-2xl
              xl:text-3xl"
            >
              <div className="flex flex-wrap justify-items-center">
                <p className="text-[#F05454]">&#123;Super</p>
                <p className="text-[#525252] dark:text-[#FFFFFF]">Nova&#125;</p>
                {/*Only way to render the curly braces as a text is with the respective HTML character code*/}
              </div>
            </Link>
        <div className="flex flex-row items-center">
          <div className="mr-4">
            <ThemeToggle />
          </div>

          <div className="mobile-menu xl:hidden flex">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border round border-[#525252] text-[#525252] hover:text-[#0BAEEA]  hover:border-[#0BAEEA]
              dark:text-[#FFFFFF] dark:border-white dark:hover:text-[#0BAEEA]  dark:hover:border-[#0BAEEA]"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border round border-[#525252] text-[#525252] hover:text-[#0BAEEA]  hover:border-[#0BAEEA]
               dark:text-[#FFFFFF] dark:border-white dark:hover:text-[#0BAEEA]  dark:hover:border-[#0BAEEA]"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="menu hidden xl:block xl:w-auto" id="navbar">
            <ul className="flex p-4 xl:p-0 xl:flex-row xl:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
