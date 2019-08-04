import React, { useContext } from "react";
import styled from 'styled-components'
import { I18nContext } from "../../i18n";

const OptionsWrapper = styled.section`
  bottom: 40px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 65px;
  width: 55px;
  z-index: 2;

  span {
    color: #000;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all ease .3s;

    &:hover {
      font-weight: bold;
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
      className={ code === langCode ? `checked` : '' }
      onClick={ ( code ) => onLanguageSelect( code ) }
    >
      {code}
    </span>
  )

  return (
    <OptionsWrapper>
      {renderOption("pt")}
      {renderOption("en")}
    </OptionsWrapper>
  )
}

export default LanguageOptions;