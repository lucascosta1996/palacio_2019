import React, { useContext, useState } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from "../../i18n"
import Copyright from "../Copyright/Copyright";

const AboutWrapper = styled.section`
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  left: 0;
  margin: auto;
  max-width: 600px;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;

  .address,
  .email {
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    margin: 4px 0;
    padding: 5px 0;
  }

  .info {
    line-height: 25px;
    padding-bottom: 20px;
  }

  a {
    text-decoration: none;
  }

  .newsletter,
  .newsletter a {
    font-size: 15px;
    padding-top: 15px;
  }
`

const About = props => {
  const { translate } = useContext(I18nContext)

  return (
    <AboutWrapper>
      <p className="info">
        {translate('aboutInfo')}
      </p>
      <a className="email" href="mailto:someone@example.com?Subject=Hello%20again" target="_top">
        info@palacio.xyz
      </a>
      <p className="address">
        Rua Duque de Caxias, 1554 - Centro Histórico - Porto Alegre, RS
      </p>
      <p className="address">
        {translate('phone')}
      </p>
      <p className="newsletter">
        {translate('newsletter')}
        <a href="#">{translate('click')}</a>
      </p>
      <Copyright />
    </AboutWrapper>
  )
}

export default About;