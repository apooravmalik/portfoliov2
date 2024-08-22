import { SiGithub } from "react-icons/si";
import { Fade } from "react-awesome-reveal";

// Import project images
import ChatApp from "../assets/ChatApp-mockup.png";
import SSDigital from "../assets/ss-digital.png";
import WallpaperMosaic from "../assets/WallpaperMosaic.png";
import TextSummariser from "../assets/TextSummarisation-mockup.png";

const projects = [
  {
    id: 1,
    title: "Wallpaper Mosaic",
    description:
      "An newsletter-application for wallpapers to promote creators. Mails sent using EmailJs.",
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "ExpressJs",
      "NodeJs",
      "Supabase",
      "EmailJs",
    ],
    image: WallpaperMosaic,
    liveDemo: "https://wallpaper-mosaic.vercel.app/",
    github: "https://github.com/apooravmalik/WallpaperMosaic",
  },
  {
    id: 2,
    title: "Chat Application",
    description:
      "Allows users to chat with each other in real-time. Authentication provided by Firebase Auth.",
    technologies: ["ReactJS", "Tailwind CSS"],
    image: ChatApp,
    liveDemo: "https://main--chat-apoorav.netlify.app/",
    github: "https://github.com/apooravmalik/ChatApp",
  },
  {
    id: 3,
    title: "SS-Digital",
    description:
      "A freelance Project created using ReactJS, ExpressJs, NodeJs, and Supabase. Utililized Authentication and Cloud Storage[Supabase] for handling Bank details, with file uploads.",
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "ExpressJs",
      "NodeJs",
      "Supabase",
    ],
    image: SSDigital,
    liveDemo: "https://apooravmalik.github.io/Wallpaper-mosaic/",
    github: "https://github.com/apooravmalik/Wallpaper-mosaic",
  },
  {
    id: 4,
    title: "Text Summarizer for Books",
    description:
      "Used NLP Techniques to create a Book Summarizer for a research paper.",
    technologies: [
      "Python",
      "Spacy",
      "NLTK",
      "HuggingFace Transormer",
      "OpenAI",
    ],
    image: TextSummariser,
    liveDemo:
      "https://colab.research.google.com/drive/1FcyhoH7RP2uqPKcqz7udoRirohQQwehs?usp=sharing",
    github: "https://github.com/apooravmalik/Text-Summarization",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="pt-20 text-white flex justify-center">
      <span className="animate-text font-outline-2 pb-10 flex items-center justify-center bg-gradient-to-r from-green-800 via-green-300 to-green-800 bg-clip-text text-transparent text-6xl font-black">Projects</span>
      </div>
      <div className="container mx-auto px-20 md:pl-40">
        {projects.map(
          ({
            id,
            title,
            description,
            technologies,
            image,
            liveDemo,
            github,
          }) => (
            <Fade key={id} triggerOnce>
              <div className="flex flex-col md:flex-row my-10 items-center">
                <div className="md:w-1/2 p-8">
                  <img
                    className="rounded-md shadow-lg max-w-full"
                    src={image}
                    alt={title}
                  />
                </div>
                <div className="md:w-1/2 px-5 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-4">{title}</h2>
                  <p className="mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-green-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <a
                      href={liveDemo}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mr-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={github}
                      className="text-white text-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
