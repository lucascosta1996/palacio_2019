import React, { useContext, useEffect, useState } from "react"
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
  font-size: 13px;
  justify-content: center;
  left: 0;
  margin: auto;
  max-width: 90%;
  position: ${props => isMobile() ? 'inital' : 'absolute'};
  padding-bottom: ${props => isMobile() ? '40px' : '0'};
  right: 0;
  text-align: left;
  top: 0;

  @media ( max-width: 520px ) {
    flex-direction: column;
    max-width: 320px;
    padding-top: 120px;
  }

  .infosWrapper {
    padding-right: 80px;

    @media (min-width: 520px) {
      min-width: 437px;
    }

    .galeria {
      padding-top: 0;
    }

    .firstSection {
      p {
        margin-bottom: 2px;
        margin-top: 2px;
      }
    }

    .secondSection {
      padding-top: 15px;

      p {
        margin-bottom: 2px;
        margin-top: 2px;
      }
    }

    .thirdSection {
      padding-top: 15px;

      p {
        margin-bottom: 2px;
        margin-top: 2px;
      }
    }

    .address,
    .email {
      color: #000;
      font-size: 13px;
      font-weight: 300;
      line-height: 20px;

      @media ( max-width: 520px ) {
        max-width: 320px;
        padding: 0;
      }
    }

    .info {
      line-height: 25px;

      @media ( max-width: 520px ) {
        line-height: 20px;
        padding-bottom: 100px;
      }
    }

    a {
      text-decoration: none;

      &:hover {
        color: #4547ee;
      }
    }

    .map {
      color: #b3b4b5;
    }

    .newsletter {
      font-size: 13px;
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
          font-size: 13px;
          margin-right: 10px;
          max-width: 230px;
          padding: 6px 8px;
  
          ::placeholder {
            color: #b3b4b5;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
          }
  
          @media ( max-width: 520px ) {
            margin: 5px 0;
          }
        }
  
        button {
          background: #fff;
          border: 1.1px solid #000;
          color: #000;
          cursor: pointer;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          padding: 7px 18px;
  
          @media ( max-width: 520px ) {
            margin-left: 0;
          }

          &:hover {
            border: none;
            background: #4547ee;
            color: #fff;
            padding: 8px 19px;
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

  useEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <AboutWrapper>
      <div className="infosWrapper">
        <section className="firstSection">
        <p className="galeria">
          Galeria Palácio
        </p>
        <p className="address">
          {translate('address')}
        </p>
        <p className="address">
          {translate('country')}
        </p>
        <a className="address map" href="https://www.google.com/maps/@-30.0330618,-51.2257867,21z" target="_blank">
          {translate('seeMap')}
        </a>
       </section>
        <section className="secondSection">
          <p className="phone">
            {translate('phone')}
          </p>
          <a className="email" href="mailto:info@palacio.xyz" target="_top">
            info@palacio.xyz
          </a>
        </section>
        <section className="thirdSection">
        <p>
          {translate('hours')}
        </p>
      </section>
          {
            !sucesso ? (
              <form className="newsletter">
                <label>Newsletter</label>
                <div className="inputs">
                  <input id="name" name="name" type="text" value={ name } placeholder={translate("fullName")} onChange={e => setName(e.target.value)} />
                  <input id="email" name="email" type="email" value={ email } placeholder="Email" onChange={e => setEmail(e.target.value)} />
                  <button type="button" onClick={subscribe}>{translate('send')}</button>
                </div>
              </form>
            ) : (
              <div className="newsletter">
                <span className="newsletter"> {translate('thanksSubscriber')} </span>
              </div>
            )
          }
      </div>
      <div>
        <p className="info">
          {translate('aboutInfo')}
        </p>
        <p className="info">
          {translate('aboutInfo2')}
        </p>
      </div>
      <Copyright
        position={ isMobile() ? 'initial' : 'absolute' }
      />
    </AboutWrapper>
  )
}

export default About;