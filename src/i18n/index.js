import React, { useReducer, useEffect, useState } from "react";
import firebase from "../firebase";
import EN from "./en.json";
import PT from "./pt.json";

export const I18nContext = React.createContext();

export const I18nContextProvider = ({ children }) => {
  const getTranslate = (langCode) => (key) =>
    translations[langCode][key] || key;

  const initialState = {
    langCode: "en",
    translate: getTranslate("en"),
  };

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
  const [translations, setTranslations] = useState({ en: EN, pt: PT });

  useEffect(() => {
    async function fetchData() {
      const englishText = await firebase.getTextCollection( 'en' ).then((result) => result);
      const portugueseText = await firebase.getTextCollection( 'pt' ).then((result) => result);
      setTranslations({...translations, en: englishText, pt: portugueseText})
    };
    fetchData();
  })

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};
