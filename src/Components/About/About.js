import React, { useContext, useState } from "react"
import styled from 'styled-components'
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

  @media ( max-width: 520px ) {
    max-width: 320px;
  }

  .address,
  .email {
    color: #000;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    margin: 4px 0;
    padding: 5px 0;

    @media ( max-width: 520px ) {
      max-width: 320px;
      padding: 0;
    }
  }

  .info {
    line-height: 25px;
    padding-bottom: 20px;

    @media ( max-width: 520px ) {
      line-height: 20px;
      padding-bottom: 5px;
    }
  }

  a {
    text-decoration: none;
  }

  .newsletter {
    font-size: 15px;
    padding-top: 40px;

    @media ( max-width: 520px ) {
      padding-top: 20px;
    }
    
    label {
      display: block;
      padding-bottom: 10px;
    }

    input {
      border: 1.1px solid #000;
      color: #000;
      font-size: 16px;
      margin-right: 10px;
      max-width: 230px;
      padding: 6px 8px;

      ::placeholder {
        color: #b3b4b5;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
      }

      @media ( max-width: 520px ) {
        margin: 5px 0;
      }
    }

    button {
      background: #fff;
      border: 1.1px solid #000;
      color: #000;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      padding: 7px 18px;

      @media ( max-width: 520px ) {
        margin-left: 5px;
      }
    }
  }
`

const About = props => {
  const { translate } = useContext(I18nContext)
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')

  async function subscribe () {

  }

  return (
    <AboutWrapper>
      <p className="info">
        {translate('aboutInfo')}
      </p>
      <p className="address">
        Rua Duque de Caxias, 1554 - Centro Histórico - Porto Alegre, RS
      </p>
      <a className="address" href="https://www.google.com/maps/@-30.0330618,-51.2257867,21z" target="_blank">
        Ver mapa
      </a>
      <p className="address">
        {translate('phone')}
      </p>
      <a className="email" href="mailto:someone@example.com?Subject=Hello%20again" target="_top">
        info@palacio.xyz
      </a>
      <form className="newsletter">
        <label>Newsletter</label>
        <input id="name" name="name" type="text" value={ name } placeholder={translate("name")} onChange={e => setName(e.target.value)} />
        <input id="email" name="email" type="email" value={ email } placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <button type="submit" onClick={subscribe}>{translate('send')}</button>
      </form>
      <Copyright />
    </AboutWrapper>
  )
}

export default About;