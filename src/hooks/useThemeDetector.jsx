import { useEffect, useState } from 'react'

import { lightThemeName, darkThemeName } from '../utils/constants'
import { setLocalStorageData } from '../utils/localstorageDate'

export default function useThemeDetector(initialTheme = null) {
    const getMatchMedia = () => window.matchMedia("(prefers-color-scheme: dark)");
    
    const getInitialTheme = () => {
        if (initialTheme === lightThemeName || initialTheme === darkThemeName) {
            return initialTheme;
        }
        return getMatchMedia().matches ? darkThemeName : lightThemeName;
    };
    
    const [theme, setTheme] =  useState(getInitialTheme);

    useEffect(() => {
        if (initialTheme === null) {
            const mq = getMatchMedia();
            mq.addEventListener('change', (e) => {
                setTheme(e.matches ? darkThemeName : lightThemeName);
            });
        }
    }, [initialTheme]);

    useEffect(() => {
        if (initialTheme === lightThemeName || initialTheme === darkThemeName) {
            setTheme(initialTheme);
        }
    }, [initialTheme]);
    
    useEffect(() => {
        setLocalStorageData('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === lightThemeName ? darkThemeName : lightThemeName);
    };


    return [theme, toggleTheme];
}
