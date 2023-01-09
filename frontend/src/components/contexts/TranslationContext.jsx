import React, {createContext, useEffect, useState} from 'react'

export const TranslationContext = createContext({
    currentLanguage: localStorage.getItem('lang') || 'ka',
    setCurrentLanguage: () => {
    }
});

const params = new URLSearchParams(window.location.search);
const lang = params.get('lang');

export const TranslationContextProvider = (props) => {
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('lang') || 'ka');

    useEffect(() => {
        if (lang) changeCurrentLanguage(lang);
    }, []);

    const changeCurrentLanguage = (code) => {
        setCurrentLanguage(code);
        localStorage.setItem('lang', code);
    };


    return (
        <TranslationContext.Provider value={{
            currentLanguage: currentLanguage,
            setCurrentLanguage: changeCurrentLanguage,
        }}>
            {props.children}
        </TranslationContext.Provider>
    );
};
