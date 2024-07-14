import React from "react";
import Image from "next/image";
import LinkedinIcon from "../../../public/images/linkedin.svg";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="text-center justify-center mt-24">
      <div className="bg-gradient-to-b from-white from-0% to-transparent to-25% p-px rounded-3xl
      dark:from-[#525252] dark:from-0% dark:to-transparent dark:to-25% dark:p-px dark:rounded-3xl">
        <div className="items-center py-8 px-4 xl:gap-16 sm:py-10 xl:px-16 bg-[#222831] rounded-3xl
    
        dark:bg-[#EFEFEF] dark:rounded-3xl">
          <div className="font-body">
            <h2 className="text-center  font-extrabold text-[#F05454]
            sm:text-2xl sm:mb-10 
             lg:text-3xl  lg:mb-20
             2xl:text-4xl
             3xl:text-5xl">
              Contact
            </h2>
            <h3 className="font-bold text-[#FFFFFF]  my-2 mb-4
            dark:text-[#525252]
            md:text-xl
            3xl:text-2xl">
              Hello there!
            </h3>
            <p className="text-[#FFFFFF]  text-justify 
            dark:text-[#525252]
             sm:text-md sm:mb-10
             md:text-lg
            lg:text-xl
            3xl:text-2xl
            ">
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
                  <p className="text-[#FFFFFF] 
                  dark:text-[#525252]
                  2xl:text-xl">
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
