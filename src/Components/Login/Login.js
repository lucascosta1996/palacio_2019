import React, { useContext, useState } from "react"
import styled from 'styled-components'
import firebase from '../../firebase'
import { Link, withRouter } from 'react-router-dom'
import { I18nContext } from "../../i18n"

const LoginWrapper = styled.section`
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  justify-content: center;
  left: 0;
  margin: auto;
  max-width: 458px;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;

  .formWrapper {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding-left: 60px;

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

    .marginBottom2 {
      padding-bottom: 10px;
    }

    input {
      border: 1.1px solid #000;
      border-radius: 3px;
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
      border-radius: 3px;
      color: #000;
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      padding: 6px 18px;
      margin: 7px 0 0 0;
      margin-left: 15px;
      
      &:hover {
        border: none;
        background: #000;
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
      max-width: 334px;
      padding-top: 20px;
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

  .small {
    font-size: 12px!important;
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
    props.history.replace('/online-viewing-room/main')
  }
  
  async function login() {
		try {
      await firebase.register(fullName, newEmail, `palacio`)
      await firebase.login(newEmail, 'palacio')
      await firebase.viewingRoom(fullName, newEmail)
      props.history.replace('/online-viewing-room/main')
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
        subscribe ? (
          <form className="formWrapper" onSubmit={e => e.preventDefault() && false }>
            <span className="fullCollection marginBottom2">
              Viewing Room
            </span>
            <input id="email" name="email" type="email" value={ email } placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
            <div className="inputAndButton">
              <input id="password" name="password" type="password" value={ password } placeholder={translate('password')} onChange={e => setPassword(e.target.value)} />
            <button type="submit" onClick={login}>Login</button>
            </div>
          </form>
        ) : (
          <form className="formWrapper" onSubmit={e => e.preventDefault() && false }>
            <span className="fullCollection marginBottom">
              Viewing Room
            </span>
            <input id="name" name="name" type="text" value={ fullName } placeholder={translate("fullName")} onChange={e => setFullName(e.target.value)} />
            <div className="inputAndButton">
              <input id="email" name="email" type="email" value={ newEmail } placeholder="E-mail" onChange={e => setNewEmail(e.target.value)} />
              <button type="submit" onClick={login}>{translate('enter')}</button>
            </div>
            <span className="becomeMember align-left small">
              *{translate('sharing')}
              <Link to="/terms-and-conditions">
                {translate('termsConditions')}
              </Link>
              {translate('andOur')}
              <Link to="/privacy-policy">
                {translate('privacypolicy')}
              </Link>.
            </span>
            {/* <span className="becomeMember padding-top align-left" onClick={ () => setSubscribe(false) }>
              {translate('alreadyMember')}
              <a href="#">
                {"Login"}
              </a>.
            </span> */}
          </form>
        )
      }
    </LoginWrapper>
  )
}

export default withRouter(Login)