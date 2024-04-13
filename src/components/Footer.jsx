import React from "react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mt-10 footer">
      <h1 class="text-white mb-10 underline underline-offset-8 decoration-green-500 flex justify-center font-Glimer-Heavy font-extrabold sm:text-[3rem] md:text-[3.4rem] lg:text-[4.9rem] xl:text-[6.1rem] 1/2xl:text-[6.2rem] 2xl:text-[6rem] text-[2.9rem] leading-[3.5rem] sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[6.5rem] 2xl:leading-[7rem]  cursor-default">
        Let's Get in Touch!
      </h1>
      <a href="https://drive.google.com/file/d/1mlGP9l2pIBKgfqohbZd1GtMS20iXNYyT/view?usp=sharing" className="flex justify-center m-8">
        <button class=" before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
          <span relative="relative z-10">Resume</span>
        </button>
      </a>
      <div class="flex flex-col py-2 mb-5 w-full space-y-6 items-center justify-center">
      <div className="divide-x divide-solid divide-white/50 grid grid-cols-3 w-full">
        <a
          href="https://www.linkedin.com/in/apooravmalik/"
          className="flex items-center justify-center flex-col text-lg text-white "
        >
        <SiLinkedin class="h-8 w-8 text-white transition ease-in-out hover:text-green-500 hover:scale-125" />
        </a>
        <a
          href="https://github.com/apooravmalik"
          className="flex items-center justify-center flex-col text-lg text-white"
        >
        <SiGithub class="h-8 w-8 text-white transition ease-in-out hover:text-green-500 hover:scale-125" />
        </a>
        <a
          href="https://www.instagram.com/iamapoorav/"
          className="flex items-center justify-center flex-col text-lg text-white"
        >
        <SiInstagram class="h-8 w-8 text-white transition ease-in-out hover:text-green-500 hover:scale-125" />
        </a>

      </div>
        
      </div>
    </div>
  );
};

export default Footer;
