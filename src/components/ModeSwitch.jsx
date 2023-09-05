import React, { useState } from 'react';
import darkmode from '../assets/darkMode.svg';
import systemmode from '../assets/system-mode.png';
import lightmode from '../assets/moon.svg';

const ModeSwitch = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedMode, setSelectedMode] = useState('system');

  const handleModeClick = () => {
    setShowOptions(!showOptions);
  };

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
    setShowOptions(false);
  };

  return (
    <div className="">
      <div
        className="fixed top-1/2 border border-slate-400 ease-in duration-200 hover:border-slate-700  transform -translate-y-1/2   flex items-center justify-center w-10 h-10 rounded-md text-white cursor-pointer"
        onClick={handleModeClick}
      >

        {selectedMode === 'dark' ? (
          <img src={darkmode} alt="Dark Mode" className="h-6 w-6 " />
        ) : selectedMode === 'light' ? (
          <img src={lightmode} alt="Light Mode" className="h-6 w-6" />
        ) : (
          <img src={systemmode} alt="System Mode" className="h-6 w-6" />
        )}

      </div>


      {showOptions && (
        <div className="absolute ease-in duration-400 top-1/2 left-24 backdrop-blur-sm   w-fit bg-opacity-25  bg-zinc-100  border-zinc-600 overflow-hidden rounded-md shadow-lg z-10">
          <div
            className={`p-3 text-md border-b  flex items-center gap-1 cursor-pointer ${selectedMode === 'light' ? 'bg-zinc-200 ' : ''
              }`}
            onClick={() => handleModeChange('light')}
          >
            <img src={lightmode} alt="Light Mode" className="h-5 w-5 mr-2" />
            Light Mode
          </div>
          <div
            className={`p-3 text-md flex items-center gap-1 cursor-pointer ${selectedMode === 'dark' ? 'bg-zinc-200' : ''
              }`}
            onClick={() => handleModeChange('dark')}
          >
            <img src={darkmode} alt="Dark Mode" className="h-5 w-5 mr-2" />
            Dark Mode
          </div>
          <div
            className={`p-3  text-md flex items-center gap-1 cursor-pointer ${selectedMode === 'system' ? 'bg-zinc-200' : ''
              }`}
            onClick={() => handleModeChange('system')}
          >
            <img src={systemmode} alt="System Mode" className="h-5 w-5 mr-2" />
            System Mode
          </div>
        </div>
      )}
    </div>
  );
};

export default ModeSwitch;
