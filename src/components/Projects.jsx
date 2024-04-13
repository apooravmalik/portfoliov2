import React from "react";
import { Fade } from "react-awesome-reveal";
import { SiGithub } from "react-icons/si";
import ChatApp from "../assets/ChatApp-mockup.png";
import CryptoApp from "../assets/CryptoApp-mockup.png";
import TextSumm from "../assets/TextSummarisation-mockup.png";
import Tindog from "../assets/Tindog-mockup.png";
import TRVL from "../assets/TRVL-mockup.png";


const Projects = () => {
  return (
    <>
      <div className="Proj-1">
        <div class="mx-2 my-10 max-w-screen-lg rounded-md text-gray-700 shadow-md md:mx-auto">
        <span class="animate-text pb-10 flex items-center justify-center bg-gradient-to-r from-green-800 via-green-300 to-green-800 bg-clip-text text-transparent text-6xl font-black font-outline-2">Projects</span>
          <div class="flex flex-col md:flex-row">
            <Fade direction="left" triggerOnce>
              <div class="p-5 md:w-1/2 md:p-8">
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  ReactJS
                </span>
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  Tailwind
                </span>
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  Firebase
                </span>
                <p class="mt-2 text-xl text-white font-bold md:mt-6 md:text-4xl">
                  Chat Application
                </p>
                <p class="mt-3 text-slate-500">
                  Allows users to chat with each other in real-time.
                  Authentication provided by Firebase Auth.
                </p>
                <div class="flex flex-row mt-4">
                  <a href="https://main--chat-apoorav.netlify.app/">
                    <button class="mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/apooravmalik/ChatApp"
                    class="my-auto ml-8 transition-all duration-150 ease-out hover:scale-125"
                  >
                    <SiGithub class="h-8 w-8 text-white" />
                  </a>
                </div>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div class="mx-auto hidden items-center px-5 md:flex md:w-1/2 md:p-8">
                <img
                  class="rounded-md shadow-lg"
                  src={ChatApp}
                  alt="Shopimage"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="Proj-2">
        <div class="mx-2 my-10 max-w-screen-lg rounded-md text-gray-700 shadow-md md:mx-auto">
          <div class="flex flex-col md:flex-row">
            <Fade direction="left" triggerOnce>
              <div class="p-5 md:w-1/2 md:p-8">
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  ReactJS
                </span>
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  Tailwind
                </span>
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  Axios
                </span>
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  NodeJS
                </span>
                <p class="mt-2 text-xl text-white font-bold md:mt-6 md:text-4xl">
                  Cryptocurrency Website
                </p>
                <p class="mt-3 text-slate-500">
                  Landing page for a Cryptocurrency Broker. Also gives other
                  information about the cryptocurrency.
                </p>
                <div class="flex flex-row mt-4">
                  <a href="https://coin-ify.vercel.app">
                    <button class="mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/apooravmalik/Coin-ify"
                    class="my-auto ml-8 transition-all duration-150 ease-out hover:scale-125"
                  >
                    <SiGithub class="h-8 w-8 text-white" />
                  </a>
                </div>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div class="mx-auto hidden items-center px-5 md:flex md:w-1/2 md:p-8">
                <img
                  class="rounded-md shadow-lg"
                  src={CryptoApp}
                  alt="Shopimage"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="Proj-3">
        <div class="mx-2 my-10 max-w-screen-lg rounded-md text-gray-700 shadow-md md:mx-auto">
          <div class="flex flex-col md:flex-row">
            <Fade direction="left" triggerOnce>
              <div class="p-5 md:w-1/2 md:p-8">
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  Python
                </span>
                <p class="mt-2 text-xl text-white font-bold md:mt-6 md:text-4xl">
                  Text Summarizer for Books
                </p>
                <p class="mt-3 text-slate-500">
                  Used NLP Techniques to create a Book Summarizer for a research
                  paper.
                </p>
                <div class="flex flex-row mt-4">
                  <a href="https://colab.research.google.com/drive/1FcyhoH7RP2uqPKcqz7udoRirohQQwehs?usp=sharing">
                    <button class="mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/apooravmalik/Text-Summarization"
                    class="my-auto ml-8 transition-all duration-150 ease-out hover:scale-125"
                  >
                    <SiGithub class="h-8 w-8 text-white" />
                  </a>
                </div>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div class="mx-auto hidden items-center px-5 md:flex md:w-1/2 md:p-8">
                <img
                  class="rounded-md shadow-lg"
                  src={TextSumm}
                  alt="Shopimage"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="Proj-4">
        <div class="mx-2 my-10 max-w-screen-lg rounded-md text-gray-700 shadow-md md:mx-auto">
          <div class="flex flex-col md:flex-row">
            <Fade direction="left" triggerOnce>
              <div class="p-5 md:w-1/2 md:p-8">
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  ReactJS
                </span>
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  React DOM
                </span>
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  CSS
                </span>
                <p class="mt-2 text-xl text-white font-bold md:mt-6 md:text-4xl">
                  Travel Website
                </p>
                <p class="mt-3 text-slate-500">
                  A landing page of a Travel Website. First Project made using ReactJs, React DOM, and CSS.
                </p>
                <div class="flex flex-row mt-4">
                  <a href="https://6444286015a26962a7879aeb--incredible-gaufre-7bdf56.netlify.app/">
                    <button class="mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/apooravmalik/Adventure-Site/"
                    class="my-auto ml-8 transition-all duration-150 ease-out hover:scale-125"
                  >
                    <SiGithub class="h-8 w-8 text-white" />
                  </a>
                </div>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div class="mx-auto hidden items-center px-5 md:flex md:w-1/2 md:p-8">
                <img
                  class="rounded-md shadow-lg"
                  src={TRVL}
                  alt="Shopimage"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="Proj-5">
        <div class="mx-2 my-10 max-w-screen-lg rounded-md text-gray-700 shadow-md md:mx-auto">
          <div class="flex flex-col md:flex-row">
            <Fade direction="left" triggerOnce>
              <div class="p-5 md:w-1/2 md:p-8">
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  HTML
                </span>
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  CSS
                </span>
                <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                  Bootstrap
                </span>
                <p class="mt-2 text-xl text-white font-bold md:mt-6 md:text-4xl">
                  Tindog Landing Page
                </p>
                <p class="mt-3 text-slate-500">
                  A landing page of Tinder for dogs. First Project made using HTML, CSS, and Bootstrap.
                </p>
                <div class="flex flex-row mt-4">
                  <a href="https://65ae5e4ee8f5d62dc3594f29--sunny-lolly-3c350c.netlify.app/">
                    <button class="mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/apooravmalik/Tindog"
                    class="my-auto ml-8 transition-all duration-150 ease-out hover:scale-125"
                  >
                    <SiGithub class="h-8 w-8 text-white" />
                  </a>
                </div>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div class="mx-auto hidden items-center px-5 md:flex md:w-1/2 md:p-8">
                <img
                  class="rounded-md shadow-lg"
                  src={Tindog}
                  alt="Shopimage"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* <div class="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto">
        <Fade>
          <div class="flex flex-col md:flex-row">
            <div class="p-5 md:w-1/2 md:p-8">
              <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                ReactJS
              </span>
              <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                Tailwind
              </span>
              <span class="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">
                Firebase
              </span>
              <p class="mt-2 text-xl text-white font-bold md:mt-6 md:text-4xl">
                Chat Application
              </p>
              <p class="mt-3 text-slate-500">
                A cryptocurrency statistic website.
              </p>
              <div class="flex flex-row">
                <button class="mt-4 mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">
                  Read More
                </button>
                <a
                  href="https://github.com/apooravmalik/ChatApp"
                  class="my-auto ml-8 transition-all duration-150 ease-out hover:scale-125"
                >
                  <SiGithub class="h-8 w-8 text-white" />
                </a>
              </div>
            </div>
            <div class="mx-auto hidden items-center px-5 md:flex md:w-1/2 md:p-8">
              <img
                class="rounded-md shadow-lg"
                src={reactjs}
                alt="Shop image"
              />
            </div>
          </div>
        </Fade>
      </div> */}
    </>
  );
};

export default Projects;
