import React, { useContext, useState } from "react"
import styled from 'styled-components'
import { I18nContext } from "../../i18n"
import Copyright from "../Copyright/Copyright"
import firebase from "../../firebase"
import { isMobile } from '../../helpers/helpers'

const AboutWrapper = styled.section`
  align-items: center;
  bottom: 0;
  display: flex;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  left: 0;
  margin: auto;
  max-width: 90%;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;

  @media ( max-width: 520px ) {
    flex-direction: column;
    max-width: 320px;
    padding-top: 80px;
  }

  .infosWrapper {
    padding-right: 80px;

    .address,
    .email {
      color: #000;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      margin: 9px 0;

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

      &:hover {
        color:  #b3b4b5;
      }
    }

    .newsletter {
      font-size: 14px;
      padding-top: 40px;

      @media ( max-width: 520px ) {
        padding-top: 20px;
      }
      
      label {
        display: block;
        padding-bottom: 10px;
      }

      .inputs {
        display: flex;

        @media ( max-width: 520px ) {
          align-items: flex-start;
          flex-direction: column;
        }

        input {
          border: 1.1px solid #000;
          color: #000;
          font-size: 14px;
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
            margin-left: 0;
          }
        }
      }
    }
  }
`

const About = props => {
  const { translate } = useContext(I18nContext)
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ sucesso, setSucesso ] = useState('')

  async function subscribe () {
    try {
			await firebase.newsletter(name, email).then( (response) => {
        setSucesso( true )
      } )
		} catch(error) {
      alert(error.message)
		}
  }

  return (
    <AboutWrapper>
      <div className="infosWrapper">
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
          {
            !sucesso ? (
              <form className="newsletter">
                <label>Newsletter</label>
                <div className="inputs">
                  <input id="name" name="name" type="text" value={ name } placeholder={translate("name")} onChange={e => setName(e.target.value)} />
                  <input id="email" name="email" type="email" value={ email } placeholder="Email" onChange={e => setEmail(e.target.value)} />
                  <button type="button" onClick={subscribe}>{translate('send')}</button>
                </div>
              </form>
            ) : (
              <span> {translate('thanksSubscriber')} </span>
            )
          }
      </div>
      <p className="info">
        {translate('aboutInfo')}
      </p>
      <Copyright
        position={ isMobile() ? 'initial' : 'absolute' }
      />
    </AboutWrapper>
  )
}

export default About;