import React, { useReducer } from "react"
import EN from "./en.json"
import PT from "./pt.json"

// To make it easier to read from JSON files
let translations = {
  en: EN,
  pt: PT
};

const getTranslate = langCode => key => translations[langCode][key] || key;

const initialState = {
  langCode: "en",
  translate: getTranslate("en"),
}

// const getEnglishTexts = async () => {
//   let result;
//   await firebase.getEnglishText().then( res => { return result = res } )
//   translations.en = Object.assign( result, translations )
//   console.log( translations )
// }

// console.log( getEnglishTexts() )

export const I18nContext = React.createContext(initialState)

export const I18nContextProvider = ({ children }) => {
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "setLanguage":
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload),
        };
      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};