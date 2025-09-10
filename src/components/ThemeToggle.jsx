import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    
    return (
        <button onClick={toggleTheme} className="theme-toggle" aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
    );
};

export default ThemeToggle;