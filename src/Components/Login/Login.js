import React, { useContext, useState } from "react"
import styled from 'styled-components'
import firebase from '../../firebase'
import { Link, withRouter } from 'react-router-dom'
import { I18nContext } from "../../i18n"
import Copyright from "../Copyright/Copyright";

const LoginWrapper = styled.section`
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  left: 0;
  margin: auto;
  max-width: 700px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;

  .formWrapper {
    .fullCollection {
      font-size: 18px;
      padding-bottom: 3px;
    }

    .marginBottom {
      padding-bottom: 50px;
    }
    
    align-items: center;
    display: flex;
    flex-direction: column;

    input {
      border: 1.1px solid #000;
      color: #000;
      font-size: 16px;
      margin: 5px 0;
      max-width: 230px;
      padding: 6px 8px;

      ::placeholder {
        color: #b3b4b5;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
      }
    }

    button {
      background: #fff;
      border: none;
      color: #000;
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      padding: 6px 18px;
      margin: 7px 0 0 0;
      
      &:hover {
        font-weight: bold;
      }
    }

    .alreadyMember {
      cursor: pointer;

      &:hover {
        font-weight: bold;
      }
    }

    .padding-top {
      padding-top: 20px;
    }

    .align-left {
      align-self: start;
      padding-top: 10px;
      text-align: left;
    }

    .becomeMember {
      color: #000;
      font-size: 14px;
      font-size: 500;

      a {
        color: #000;
        text-decoration: underline;
      }
    }
  }
`

const Login = (props) => {
  const { translate } = useContext(I18nContext)
  const [ subscribe, setSubscribe ] = useState(false)
  const [ email, setEmail ] = useState('')
  const [ newEmail, setNewEmail ] = useState('')
  const [ fullName, setFullName ] = useState('')
  const [ password, setPassword ] = useState('')

  async function login() {
		try {
      await firebase.login(email, password)
      props.history.replace('/viewing-room/catalogo')
		} catch(error) {
			alert(error.message)
		}
  }
  
  async function onRegister() {
		try {
			await firebase.register(fullName, newEmail, `palacioKPwwbhRxr3`)
		} catch(error) {
      alert(error.message)
		}
  }
  
  if (firebase.getCurrentUsername()) {
		props.history.replace('/viewing-room/catalogo')
		return null
  }

  return (
    <LoginWrapper>
      {
        !subscribe ? (
          <form className="formWrapper" onSubmit={e => e.preventDefault() && false }>
            <span className="fullCollection">
              {translate('fullCollection')}
            </span>
            <span className="fullCollection marginBottom">
              {translate('fullCollection2')}
            </span>
            <input id="email" name="email" type="email" value={ email } placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input id="password" name="password" type="password" value={ password } placeholder={translate('password')} onChange={e => setPassword(e.target.value)} />
            <button type="submit" onClick={login}>Login</button>
            <span className="becomeMember alreadyMember padding-top" href="#" onClick={ () => setSubscribe(true) }>{translate('becomeMember')}</span>
          </form>
        ) : (
          <form className="formWrapper" onSubmit={e => e.preventDefault() && false }>
            <input id="name" name="name" type="text" value={ fullName } placeholder={translate("fullName")} onChange={e => setFullName(e.target.value)} />
            <input id="email" name="email" type="email" value={ newEmail } placeholder="Email" onChange={e => setNewEmail(e.target.value)} />
            <button type="submit" onClick={onRegister}>{translate('signUp')}</button>
            <span className="becomeMember padding-top align-left" onClick={ () => setSubscribe(false) }>
              {translate('alreadyMember')}
              <a href="#">
                {"Login."}
              </a>
            </span>
            <span className="becomeMember align-left">
              {translate('sharing')}
              <a href="#">
                {translate('termsConditions')}
              </a>
              {translate('andOur')}
              <a href="#">
                {translate('privacypolicy')}
              </a>
              .
            </span>
          </form>
        )
      }
      <Copyright
        position="absolute"
      />
    </LoginWrapper>
  )
}

export default withRouter(Login)