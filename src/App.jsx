import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Cursor } from "react-custom-cursors";
import "react-custom-cursors/dist/index.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import TerminalAnimation from "./components/TerminalAnimation";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderFinished = () => {
    setIsLoading(false);
  };

  return (
    <div className="app cursor-none container min-h-screen max-w-full bg-black overflow-y-scroll overflow-hidden md: w-screen h-0 ">
      {isLoading ? (
        <TerminalAnimation onFinished={handleLoaderFinished} />
      ) : (
        <>
          <div className=" max-auto">
            <Navbar />
            <Hero />
            <Cursor
              animation="none"
              color="#ffffff"
              dotColor="#ffffff"
              hasCursor
              hasDot
              hoveringAnimation="magnify"
              isHollow
              shape="round"
              size="lg"
              speed="medium"
            />
          </div>
          <Skills />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
