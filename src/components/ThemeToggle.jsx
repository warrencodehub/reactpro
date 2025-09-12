import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    
    return (
        <motion.button
            onClick={toggleTheme}
            className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            layout
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: darkMode ? 180 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <FontAwesomeIcon 
                    icon={darkMode ? faSun : faMoon}
                    style={{ color: darkMode ? '#ffd700' : '#1e1e1e' }}
                />
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;