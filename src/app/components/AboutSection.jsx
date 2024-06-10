import React from "react";

const AboutSection = () => {
  return (
    <section className="text-white font-body">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"></div>
      <div>
        <h2 className="text-6xl font-extrabold">About Me</h2>
        <p className="text-5xl">
          I'm a Software Developer who loves to learn new things everyday to
          always keep my brain healthy.
          <br></br>
          <br></br>
          Future M.S.E Software Engineer graduate at Arizona State University
          in 2025.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
