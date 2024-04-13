import React from "react";
import { Fade } from "react-awesome-reveal";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Navbar = () => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/apoorav-malik-903b89248/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/apooravmalik/",
      label: "Github",
      Icon: SiGithub,
    },
  ];

  return (
    <Fade cascade damping={0.3} triggerOnce>
      <nav className="py-10 px-10 flex justify-between">
        <h1 className="text-white text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-green-500">
          Apoorav Malik👨🏻‍💻
        </h1>
        <div className="flex items-center gap-6 lg:gap-10">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <a
                href={social.link}
                key={index}
                aria-label="social.label"
                className="text-white text-xl active:scale-90 transition-all duration-150 ease-out hover:text-green-500 hover:scale-125"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </nav>
    </Fade>
  );
};

export default Navbar;
