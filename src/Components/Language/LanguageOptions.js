import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { I18nContext } from "../../i18n";

const OptionsWrapper = styled.div`
  width: 20px;
  z-index: 2;

  @media (max-width: 520px) {
    bottom: 45px;
    right: 35px;
    z-index: 5;
  }

  span {
    color: #000;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;

    &:hover {
      font-weight: bold;
    }
  }

  .checked {
    font-weight: bold;
  }
`;

const LanguageOptions = (props) => {
  const { langCode, dispatch } = useContext(I18nContext);

  const onLanguageSelect = (event) => {
    const language = event.target ? event.target.innerHTML : event; 
    return dispatch({ type: "setLanguage", payload: language});
  };

  const renderOption = (code) => (
    <span onClick={(code) => onLanguageSelect(code)}>{code}</span>
  );

  return (
    <OptionsWrapper>
      {langCode === "en" && renderOption("pt")}
      {langCode === "pt" && renderOption("en")}
    </OptionsWrapper>
  );
};

export default LanguageOptions;
