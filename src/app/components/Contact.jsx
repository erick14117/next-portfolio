import React from "react";
import Image from "next/image";
import LinkedinIcon from "../../../public/images/linkedin.svg";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="text-center justify-center mt-24">
      <div className="bg-gradient-to-b from-white from-0% to-transparent to-25% p-px rounded-3xl">
        <div className="items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 bg-[#222831] rounded-3xl">
          <div className="font-body">
            <h2 className="text-center text-3xl sm:text-5xl sm:mb-14 lg:text-6xl font-extrabold text-[#F05454]">
              Contact
            </h2>
            <h5 className="font-bold text-white text-xl sm:text-2xl lg:text-3xl my-2 mb-0">
              Hello there!
            </h5>
            <p className="text-[#FFFFFF]  text-xl sm:text-2xl lg:text-3xl text-justify py-20">
              I&apos;m always looking for new opportunities, you can message me
              on my LinkedIn inbox. If you have a question or just want to say
              hi, I&apos;ll be in touch.
            </p>
            <br></br>
            <br></br>

            <div className="flex justify-center ">
              <div>
                <div className="justify-center">
                <div>
                  <p className="text-[#FFFFFF] ">
                    Send me a message here:
                  </p>
                </div>
                <div className="text-center flex justify-center">
                  <Link href="https://www.linkedin.com/in/erickgodinez/">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
