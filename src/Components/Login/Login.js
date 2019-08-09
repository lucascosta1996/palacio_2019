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
  max-width: 600px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;

  .formWrapper {
    .fullCollection {
      font-size: 20px;
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
      border: 1.1px solid #1d6cdb;
      color: #1d6cdb;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      padding: 6px 18px;
      margin: 7px 0 0 0;
    }

    .becomeMember {
      color: #000;
      cursor: pointer;
      font-size: 14px;
      font-size: 500;
      padding-top: 20px;
      text-decoration: underline;
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
      props.history.replace('/acervo/catalogo')
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
		props.history.replace('/acervo/catalogo')
		return null
  }

  return (
    <LoginWrapper>
      <p>{firebase.getCurrentUsername()}</p>
      {
        !subscribe ? (
          <form className="formWrapper" onSubmit={e => e.preventDefault() && false }>
            <span className="fullCollection">
              {translate('fullCollection')}
            </span>
            <input id="email" name="email" type="email" value={ email } placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input id="password" name="password" type="password" value={ password } placeholder={translate('password')} onChange={e => setPassword(e.target.value)} />
            <button type="submit" onClick={login}>{translate('signin')}</button>
            <span className="becomeMember" href="#" onClick={ () => setSubscribe(true) }>{translate('becomeMember')}</span>
          </form>
        ) : (
          <form className="formWrapper" onSubmit={e => e.preventDefault() && false }>
            <input id="name" name="name" type="text" value={ fullName } placeholder={translate("fullName")} onChange={e => setFullName(e.target.value)} />
            <input id="email" name="email" type="email" value={ newEmail } placeholder="Email" onChange={e => setNewEmail(e.target.value)} />
            <button type="submit" onClick={onRegister}>{translate('signUp')}</button>
            <span className="becomeMember" href="#" onClick={ () => setSubscribe(false) }>{translate('alreadyMember')}</span>
          </form>
        )
      }
      <Copyright />
    </LoginWrapper>
  )
}

export default withRouter(Login)