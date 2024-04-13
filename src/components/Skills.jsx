import React from "react";
import Html5 from "../assets/html5-icon.svg";
import Css from "../assets/css-icon.svg";
import bootstrap from "../assets/bootstrap-icon.svg";
import figma from "../assets/figma-icon.svg";
import firebase from "../assets/firebase-icon.svg";
import git from "../assets/git-icon.svg";
import nodejs from "../assets/nodejs-icon.svg";
import reactjs from "../assets/reactjs-icon.svg";
import tailwindcss from "../assets/tailwindcss-icon.svg";

const Skills = () => {
  return (
    <div>
      <div className="pt-20 pb-10 text-white flex justify-center">
      <span class="animate-text font-outline-2 pb-10 flex items-center justify-center bg-gradient-to-r from-green-800 via-green-300 to-green-800 bg-clip-text text-transparent text-6xl font-black">Skills</span>
      </div>
      <div class="flex overflow-hidden space-x-16 group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div class="flex space-x-16 animate-loop-scroll group-hover:paused">
          <img loading="lazy" src={Html5} class="max-w-none" alt="Image1" />
          <img loading="lazy" src={Css} class="max-w-none" alt="Image2" />
          <img
            loading="lazy"
            src={bootstrap}
            class="max-w-none"
            alt="Image3"
          />
          <img
            loading="lazy"
            src={tailwindcss}
            class="max-w-none"
            alt="Image4"
          />
          <img loading="lazy" src={figma} class="max-w-none" alt="Image5" />
          <img loading="lazy" src={nodejs} class="max-w-none" alt="Image6" />
          <img loading="lazy" src={reactjs} class="max-w-none" alt="Image7" />
          <img loading="lazy" src={firebase} class="max-w-none" alt="Image8" />
          <img loading="lazy" src={git} class="max-w-none" alt="Image9" />
        </div>
        <div
          class="flex space-x-16 animate-loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          <img loading="lazy" src={Html5} class="max-w-none" alt="Image1" />
          <img loading="lazy" src={Css} class="max-w-none" alt="Image2" />
          <img
            loading="lazy"
            src={bootstrap}
            class="max-w-none"
            alt="Image3"
          />
          <img
            loading="lazy"
            src={tailwindcss}
            class="max-w-none"
            alt="Image4"
          />
          <img loading="lazy" src={figma} class="max-w-none" alt="Image5" />
          <img loading="lazy" src={nodejs} class="max-w-none" alt="Image6" />
          <img loading="lazy" src={reactjs} class="max-w-none" alt="Image7" />
          <img loading="lazy" src={firebase} class="max-w-none" alt="Image8" />
          <img loading="lazy" src={git} class="max-w-none" alt="Image9" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
