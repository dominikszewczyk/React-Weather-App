import { useEffect, useState } from "react";

export default function useBrowserLanguage() {
    const [language, setLanguage] = useState(navigator.language || 'en-US');

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(navigator.language || 'en-US');
        };

        window.addEventListener('languagechange', handleLanguageChange);

        return () => {
            window.removeEventListener('languagechange', handleLanguageChange);
        };
    }, []);
    
    return language;
}