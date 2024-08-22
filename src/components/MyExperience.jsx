import { Fade } from 'react-awesome-reveal';
import { FaWordpress, FaReact, FaPython } from 'react-icons/fa';

const MyExperiences = () => {
  return (
    <div className="Proj-1 bg-black">
      <div className="mx-2 my-10 max-w-screen-lg rounded-md text-gray-200 shadow-md md:mx-auto">
        <span className="animate-text pb-10 flex items-center justify-center bg-gradient-to-r from-green-400 via-green-200 to-green-400 bg-clip-text text-transparent text-6xl font-black font-outline-2">Experiences</span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          
          {/* Experience 1: Websolvant */}
          <Fade direction="left" triggerOnce>
            <div className="p-5 md:p-8 bg-black rounded-md shadow-md hover:shadow-green-600 hover:shadow-lg transition-shadow duration-300 border border-gray-800">
              <div className="flex justify-center mb-4">
                <FaWordpress size={48} className="text-green-500" />
              </div>
              <div className="flex flex-wrap">
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">WordPress</span>
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">React</span>
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">Node.js</span>
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">Express</span>
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">Supabase</span>
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">Tailwind CSS</span>
              </div>
              <p className="mt-2 text-xl text-green-400 font-bold md:mt-6 md:text-2xl">Content Curator</p>
              <p className="text-gray-400">Websolvant - Nov 2022 – Present</p>
              <p className="text-gray-400">Delhi, India</p>
              <p className="mt-3 text-gray-300">
                Enhanced UX on websites, tripled session duration, increased traffic by 50%. Created client projects including fintech websites.
              </p>
              <div className="flex flex-row mt-4">
                <a href="https://www.websolvant.com/">
                  <button className="mr-2 flex items-center justify-center rounded-md bg-green-500 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-green-600">
                    More Details
                  </button>
                </a>
              </div>
            </div>
          </Fade>

          {/* Experience 2: Sarabhai IT Solutions */}
          <Fade direction="left" triggerOnce>
            <div className="p-5 md:p-8 bg-black rounded-md shadow-md hover:shadow-green-600 hover:shadow-lg transition-shadow duration-300 border border-gray-800">
              <div className="flex justify-center mb-4">
                <FaPython size={48} className="text-green-500" />
              </div>
              <div className="flex flex-wrap">
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">Python</span>
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">Pandas</span>
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">Machine Learning</span>
              </div>
              <p className="mt-2 text-xl text-green-400 font-bold md:mt-6 md:text-2xl">Data Analyst Intern</p>
              <p className="text-gray-400">Sarabhai IT Solutions - June 2024 - Present</p>
              <p className="mt-3 text-gray-300">
                Using Python and Data Science libraries to create prediction models for incident management software.
              </p>
              <div className="flex flex-row mt-4">
                <a href="https://github.com/apooravmalik/SarabhaiIT/">
                  <button className="mr-2 flex items-center justify-center rounded-md bg-green-500 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-green-600">
                    More Details
                  </button>
                </a>
              </div>
            </div>
          </Fade>

          {/* Experience 3: Freelance */}
          <Fade direction="left" triggerOnce>
            <div className="p-5 md:p-8 bg-black rounded-md shadow-md hover:shadow-green-600 hover:shadow-lg transition-shadow duration-300 border border-gray-800">
              <div className="flex justify-center mb-4">
                <FaReact size={48} className="text-green-500" />
              </div>
              <div className="flex flex-wrap">
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">ReactJS</span>
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">Node.js</span>
                <span className="rounded-md bg-green-600 px-2 py-1 text-xs uppercase text-white m-1">Tailwind</span>
              </div>
              <p className="mt-2 text-xl text-green-400 font-bold md:mt-6 md:text-2xl">Web Developer</p>
              <p className="text-gray-400">Freelance - 2022 - 2024</p>
              <p className="mt-3 text-gray-300">
                Developed responsive websites and web applications using React, Node.js, and Tailwind CSS.
              </p>
              <div className="flex flex-row mt-4">
                <a href="https://ss-digital.vercel.app/">
                  <button className="mr-2 flex items-center justify-center rounded-md bg-green-500 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-green-600">
                    More Details
                  </button>
                </a>
              </div>
            </div>
          </Fade>

        </div>
      </div>
    </div>
  );
};

export default MyExperiences;