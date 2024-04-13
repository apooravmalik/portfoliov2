import React from "react";
import { Fade } from "react-awesome-reveal";
import HeroImg from "../assets//HeroImg.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row lg:items-center lg:mb-6">
      <div className="lg:w-1/2">
        <Fade triggerOnce>
          <h1 className="text-4xl hover:text-green-500 hover:scale-125xl lg:text-7xl font-semibold px-10">
            Nice to meet you👋
          </h1>
        </Fade>
        <br />{" "}
        <Fade triggerOnce className="px-10">
          <span className="text-4xl lg:text-6xl font-extrabold py-10 underline underline-offset-8 decoration-green-500 ">
            <Typewriter
              options={{
                strings: ["I'm a Web Developer.", "I'm a Student.", "I'm a ⚽ lover.", "I'm Apoorav."],
                autoStart: true,
                loop: true,
                cursor: "",
                delay: 50,
                deleteSpeed : 50
              }}
            />
            {/* {"I'm Apoorav."} */}
          </span>
        </Fade>
        <br />
        <Fade triggerOnce>
          <div className="px-10">
            <a href="https://drive.google.com/file/d/1mlGP9l2pIBKgfqohbZd1GtMS20iXNYyT/view?usp=sharing">
              <button class=" before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                <span relative="relative z-10">Resume</span>
              </button>
            </a>
          </div>
        </Fade>
      </div>
      <div className="lg:w-1/2">
        <Fade triggerOnce>
          <img
            src={HeroImg}
            alt="HeroImg"
            className="h-80 w-80 ml-8 mt-4 rounded-full bg-cover bg-center border-4 border-green-300 animate-morph sm:ml-10 sm:max-w-none sm:mt-4 sm:mr-0 sm:w-auto sm:h-auto sm:rounded-none lg:ml-24"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
