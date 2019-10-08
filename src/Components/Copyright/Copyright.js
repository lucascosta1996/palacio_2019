import React, { useContext, Fragment } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from "../../i18n"
import Back from "../Back/Back"

const CopyrightWrapper = styled.section`
  align-items: center;
  bottom: 40px;
  display: flex;
  justify-content: center;
  left: 0;
  margin: auto;
  padding-top: ${props => !props.position ? '50px' : '0'};
  position: ${props => props.position};
  right: 0;
  text-align: center;
  width: 588px;
  z-index: 2;

  @media ( max-width: 520px ) {
    flex-wrap: wrap;
    width: 100%;
  }

  .rights,
  .terms {
    color: #c3c3c3;
    font-family: 'Roboto', sans-serif;
    font-size: 12px!important;
    font-weight: 500!important;
    line-height: 12px!important;
    margin-bottom: 0;
    padding: 0 5px;
    text-decoration: none;
  }

  .terms {
    &:hover {
      color: #000;
    }
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
    <CopyrightWrapper
      position={ props.position }
    >
      <span className="rights">
        {translate('allrights')} &copy; {translate('palacio')}
      </span>
      <a className="terms" href="#">
        {translate('termsofuse')}
      </a>
      <a className="terms" href="#">
        {translate('privacypolicy')}
      </a>
      {
        props.back && <Back route={props.route} position="absolute" />
      }
    </CopyrightWrapper>
  )
}

export default Copyright;