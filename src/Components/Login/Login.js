import React, { useContext, useEffect, useState } from "react"
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
  font-size: 13px;
  justify-content: center;
  left: 0;
  margin: auto;
  max-width: 700px;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;

  .formWrapper {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding-left: 100px;

    @media (max-width: 520px) {
      padding-left: 20px;
    }

    .fullCollection {
      font-size: 13px;
      padding-bottom: 3px;
    }

    .marginBottom {
      padding-bottom: 16px;
    }

    input {
      border: 1.1px solid #000;
      color: #000;
      font-size: 13px;
      margin: 5px 0;
      max-width: 230px;
      padding: 6px 8px;

      ::placeholder {
        color: #b3b4b5;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
      }
    }

    button {
      background: #fff;
      border: 1px solid #000;
      color: #000;
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      padding: 6px 18px;
      margin: 7px 0 0 0;
      margin-left: 15px;
      
      &:hover {
        border: none;
        background: #4547ee;
        color: #fff;
        padding: 7px 19px;
      }

      @media (max-width: 520px) {
        display: block;
        margin-left: 0;
      }
    }

    .alreadyMember {
      cursor: pointer;

      &:hover {
        color: #4547ee;
      }
    }

    .padding-top {
      padding-top: 13px;
    }

    .align-left {
      align-self: start;
      padding-top: 10px;
      text-align: left;
    }

    .becomeMember {
      color: #000;
      font-size: 13px;
      font-weight: 300;

      a {
        color: #000;
        text-decoration: underline;

        &:hover {    
          color: #c3c3c3;
        }
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

  if ( firebase.isLoggedIn() ) {
    props.history.replace('/viewing-room/main')
  }
  
  async function login() {
		try {
      await firebase.login(email, password)
      props.history.replace('/viewing-room/main')
		} catch(error) {
			alert(error.message)
		}
  }
  
  async function onRegister() {
		try {
      await firebase.register(fullName, newEmail, `palacio`)
		  await firebase.logout()
		} catch(error) {
      alert(error.message)
		}
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
            <div className="inputAndButton">
              <input id="password" name="password" type="password" value={ password } placeholder={translate('password')} onChange={e => setPassword(e.target.value)} />
              <button type="submit" onClick={login}>Login</button>
            </div>
            <span className="becomeMember alreadyMember padding-top" href="#" onClick={ () => setSubscribe(true) }>
              <a href="#">
                {translate('becomeMember')}
              </a>
            </span>
          </form>
        ) : (
          <form className="formWrapper" onSubmit={e => e.preventDefault() && false }>
            <span className="fullCollection2 marginBottom">
              {translate('becomeMember')}
            </span>
            <input id="name" name="name" type="text" value={ fullName } placeholder={translate("fullName")} onChange={e => setFullName(e.target.value)} />
            <div className="inputAndButton">
              <input id="email" name="email" type="email" value={ newEmail } placeholder="Email" onChange={e => setNewEmail(e.target.value)} />
              <button type="submit" onClick={onRegister}>{translate('signUp')}</button>
            </div>
            <span className="becomeMember padding-top align-left" onClick={ () => setSubscribe(false) }>
              {translate('alreadyMember')}
              <a href="#">
                {"Login."}
              </a>
            </span>
            <span className="becomeMember align-left">
              {translate('sharing')}
              <Link to="/terms-and-conditions">
                {translate('termsConditions')}
              </Link>
              {translate('andOur')}
              <Link to="/privacy-policy">
                {translate('privacypolicy')}
              </Link>
              .
            </span>
          </form>
        )
      }
    </LoginWrapper>
  )
}

export default withRouter(Login)