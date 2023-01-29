import React from "react";
import Image from "next/image";
import githubPic from "../public/GitHub-Mark-32px.png";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex md:items-center md:justify-between">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Mov Blog
        </h1>
        <h4 className="md:text-left text-xl mt-2 md:pl-2">
          Mov instructions building complete systems
        </h4>
      </div>
      <div className="text-right pr-4 md:pr-8">
        <a href="https://github.com/hekar">
          <Image unoptimized src={githubPic} width={32} height={32} />
        </a>
      </div>
    </section>
  );
};

export default Intro;
