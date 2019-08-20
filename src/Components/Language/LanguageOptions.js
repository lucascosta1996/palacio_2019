import React, { useContext } from "react";
import styled from 'styled-components'
import { I18nContext } from "../../i18n";

const OptionsWrapper = styled.section`
  bottom: 40px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 65px;
  width: 20px;
  z-index: 2;

  @media ( max-width: 520px ) {
    right: 35px;
    z-index: 5;
  }

  span {
    color: #000;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all ease .3s;

    &:hover {
      font-style: italic;
    }
  }

  .checked {
    font-weight: bold;
  }
`

const LanguageOptions = props => {
  const { langCode, dispatch } = useContext(I18nContext)

  const onLanguageSelect = e => {
    return dispatch({ type: "setLanguage", payload: e.target.innerHTML })
  }
  
  const renderOption = code => (
    <span
      onClick={ ( code ) => onLanguageSelect( code ) }
    >
      {code}
    </span>
  )

  return (
    <OptionsWrapper>
      {langCode === 'en' && renderOption("pt")}
      {langCode === 'pt' && renderOption("en")}
    </OptionsWrapper>
  )
}

export default LanguageOptions;