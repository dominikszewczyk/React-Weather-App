import { useEffect, useState } from 'react'

import { lightThemeName, darkThemeName } from '../utils/constants'

export default function useThemeDetector() {
    const getMatchMedia = () => window.matchMedia("(prefers-color-scheme: dark)");
    const [theme, setTheme] = useState(getMatchMedia().matches ? darkThemeName : lightThemeName);

    useEffect(() => {
        const mq = getMatchMedia();
        mq.addEventListener('change', (e) => {
            setTheme(e.matches ? darkThemeName : lightThemeName);
        });
    }, []);

    return theme;
}
