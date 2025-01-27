import { IoMdSunny } from 'react-icons/io';

import React, { useContext } from 'react';
import { IoMoonOutline } from 'react-icons/io5';
import { ThemeContext } from '../../theme/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* <Button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </Button> */}

      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 black"
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <IoMoonOutline color="#000" />
        ) : (
          <IoMdSunny color="#000" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleButton;
