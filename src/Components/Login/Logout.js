import React from 'react'
import firebase from '../../firebase'
import styled from 'styled-components'

const LogoutWrapper = styled.div`
  span {
    color: #000;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
`

function Logout(props) {
  async function logout() {
		await firebase.logout()
		window.location.replace("/");
  }
  
  return (
    <LogoutWrapper>
      <span onClick={logout}>
        Log out
      </span>
    </LogoutWrapper>
  )
}

export default Logout