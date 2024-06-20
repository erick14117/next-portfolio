import React from "react";
import Image from "next/image";
import LinkedinIcon from "../../../public/images/linkedin.svg";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-center justify-center mt-24"
    >
      
      <div className="font-body">
        <h2 className="text-center text-3xl sm:text-5xl  sm:mb-14 lg:text-6xl font-extrabold text-[#F05454] mb-28">Contact</h2>
        <h5 className="font-bold text-white text-xl sm:text-2xl lg:text-3xl my-2">Hello there!</h5>
        <p className="text-[#FFFFFF] text-start text-xl sm:text-2xl lg:text-3xl">
          
          I&apos;m always looking for new opportunities, You can message me on
          my LinkedIn inbox. If you have a question or just want to say hi, I&apos;ll be
          in touch. 
        </p>
        <br>
        </br>
        <br>
        </br>

        <div className="socials flex flex-row gap-2 justify-center mb-20">
          <Link href="https://www.linkedin.com/in/erickgodinez/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
