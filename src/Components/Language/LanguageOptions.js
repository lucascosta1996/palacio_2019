import React, { useContext, useEffect, useState, useMemo } from "react";
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
  const [label, setLabel] = useState("pt");
  const [lang, setLang] = useState("");

  const onLanguageSelect = (event) => {
    const language = event.target ? event.target.innerHTML : event;
    dispatch({ type: "setLanguage", payload: language });
  };

  const renderOption = (event) => {
    const { innerHTML } = event.target;
    const newLabel = innerHTML === "en" ? "pt" : "en";
    onLanguageSelect(innerHTML);
    setLabel(newLabel);
    setLang(innerHTML);
  };

  useEffect(() => {
    if (lang === "") {
      renderOption({ target: { innerHTML: "en" } });
    }
  });

  return (
    <OptionsWrapper>
      <span onClick={(event) => renderOption(event)}>{label}</span>
    </OptionsWrapper>
  );
};

export default LanguageOptions;
