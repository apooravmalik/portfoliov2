import React, { useEffect, useRef } from 'react';

const TerminalAnimation = ({ onFinished }) => {
  const terminalRef = useRef(null);
  const containerRef = useRef(null);

  const command = './launch-app.sh';
  let commandIndex = 0;

  const bootSequence = [
    'Initializing application...',
    'Loading dependencies...',
    'Connecting to server...',
    'Error: Application failed to start.',
    'JK, this is awkward.',
    'Authenticating user...',
    'Fetching data...',
    'Rendering user interface...',
    'Entering Apoorav Malik Portfolio...',
    'Application ready!',
  ];
  let bootSequenceIndex = 0;

  useEffect(() => {
    const typing = () => {
      if (commandIndex < command.length) {
        terminalRef.current.append(command.charAt(commandIndex));
        commandIndex++;
        setTimeout(typing, Math.floor(Math.random() * 180) + 50);
      } else {
        terminalRef.current.append('\n');
        if (bootSequence[bootSequenceIndex]) {
          terminalRef.current.append(bootSequence[bootSequenceIndex]);
          bootSequenceIndex++;
          setTimeout(typing, Math.floor(Math.random() * 290) + 100);
        } else {
          window.scrollTo(0, document.body.scrollHeight);
          setTimeout(() => {
            containerRef.current.classList.remove('h-64', 'bg-gray-800', 'rounded-lg');
            containerRef.current.classList.add('h-0', 'bg-transparent', 'rounded-lg');
            terminalRef.current.style.opacity = '0';
            containerRef.current.style.backgroundImage = 'radial-gradient(white, transparent 180%)';
            setTimeout(() => {
              containerRef.current.style.transform = 'scaleY(0)';
              document.getElementsByClassName('term__noise')[0].style.display = 'none';
            }, 200);
            setTimeout(() => {
              containerRef.current.style.display = 'none';
              // Call the onFinished callback function
              if (onFinished) onFinished();
            }, 550);
          }, 2000);
        }
      }
    };

    typing();
  }, []);

  return (
    <>
      <div ref={containerRef} className="h-64 bg-black rounded-lg">
        <pre ref={terminalRef} className="text-green-500 p-4 font-mono whitespace-pre-wrap">
          user@machine:~$
        </pre>
      </div>
      <div className="term__noise bg-black rounded-lg h-64 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25"></div>
      </div>
    </>
  );
};

export default TerminalAnimation;