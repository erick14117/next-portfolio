import React from "react";
import Image from "next/image";
import LinkedinIcon from "../../../public/images/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white font-body
    dark:bg-[#EFEFEF]">
      <div className="container p-12 flex justify-between">
        <span>
          <div className="flex flex-wrap justify-items-center ">
            <p className="text-[#F05454] font-extrabold">&#123;Super</p>
            <p className="text-[#FFFFFF] font-extrabold mr-1 dark:text-[#525252]">Nova&#125;</p>
            {/*Only way to render the curly braces as a text is with the respective HTML character code*/}
            <p className="mr-1 dark:text-[#525252]"> by</p>
            <a
              className="text-[#5D8BF4] font-extrabold"
              href="https://www.linkedin.com/in/erickgodinez/"
            >
              Erick Godinez
            </a>
          </div>

          <div className="flex">
          
          </div>
        </span>
        <p className="text-slate-400
        dark:text-slate-600">2024, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
