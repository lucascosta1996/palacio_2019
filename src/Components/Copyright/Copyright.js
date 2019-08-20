import React, { useContext, Fragment } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from "../../i18n"

const CopyrightWrapper = styled.section`
  align-items: center;
  bottom: 40px;
  display: flex;
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  width: 482px;
  z-index: 2;

  @media ( max-width: 520px ) {
    flex-wrap: wrap;
    width: 100%;
  }

  .rights,
  .terms {
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 12px!important;
    font-weight: 500!important;
    line-height: 12px!important;
    padding: 0 5px;
    text-decoration: none;
  }

  .rights {
    @media ( max-width: 520px ) {
      width: 100%;
    }
  }
`

const Copyright = props => {
  const { translate } = useContext(I18nContext)

  return (
    <CopyrightWrapper>
      <span className="rights">
        {translate('allrights')} &copy; {translate('palacio')}
      </span>
      <a className="terms" href="#">
        {translate('termsofuse')}
      </a>
      <a className="terms" href="#">
        {translate('privacypolicy')}
      </a>
    </CopyrightWrapper>
  )
}

export default Copyright;