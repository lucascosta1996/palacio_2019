import React, { Fragment, useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from '../../i18n'
import LanguageOptions from '../Language/LanguageOptions'
import close from '../../assets/icons/close.png'
import { isMobile } from '../../helpers/helpers'
import firebase from '../../firebase'

const NavigationWrapper = styled.section`
  ${props => props.isOpened && `background-color: #fff;`}
  ${props => props.isOpened && `width: 100%; height: 200px;`}
  display: flex;
  flex-direction: column;
  left: 25px;
  position: fixed;
  overflow: hidden;
  text-align: left;
  top: 25px;
  z-index: 2;

  @media ( max-width: 520px ) {
    left: 25px;
  }
  
  h1,
  a {
    color: #000;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    text-decoration: none;
    transition: .3s all ease;

    &:hover {
      color: #4547ee;
    }

    @media ( max-width: 520px ) {
      font-size: 18px!important;
    }
  }

  h1 {
    line-height: 1;

    a {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 20px;
    }
  }

  .link {
    text-transform: uppercase;
  }

  .active {
    color: #4547ee;
  }

  .activeViewingRoom { 
    color: #6bf93c;
  }

  .navigation {
    align-items: flex-end;
    display: flex;
    position: fixed;
    right: 25px;
    top: 25px;

    a {
      margin: 0 8px;

      @media ( max-width: 768px ) {
        margin: 0;
      }
    }

    @media ( max-width: 768px ) {
      flex-direction: column;
      right:unset;
      top: 80px;
      ${props => !props.isOpened && `display: none;`}
    }
  }

  .viewing-room {
    position: fixed;
    bottom: 50px;
    left: 25px;

    @media ( max-width: 768px ) {
      display: none;
    }
  }

  .login {
    color: #95d930;
  }

  .hidden {
    display: none;
  }

  .close {
    position: fixed;
    right: 35px;
    top: 40px;
    width: 14px;
  }

  .logoutLang {
    align-items: flex-end;
    display: flex;
    padding-left: 35px;

    @media ( max-width: 768px ) {
      padding-left: 0;
    }
  }

  .divider {
    color: #c3c3c3!important;
    padding-right: 10px;
  }

  .logout {
    cursor: pointer;
    margin: 0 0!important;

    @media ( min-width: 520px ) {
      padding-right: 10px;
    }
  }
`

const VeganBurguerIcon = styled.div`
  cursor: pointer;
  font-size: 18px;
  position: fixed;
  right: 35px;
  top: 35px;

  @media ( min-width: 769px ) {
    display: none;
  }
`

const Navigation = props => {
  const { translate } = useContext(I18nContext)
  const [ active, setActive ] = useState( '' )
  const [ open, setOpen ] = useState( false )
  const isActive = ( path ) => window.location.href.indexOf( path ) > 1

  async function logout() {
		await firebase.logout()
		window.location.replace("/");
  }

  return (
    <NavigationWrapper
      isOpened={ open }
    >
      <h1 onClick={ () => setActive( '/' ) }>
        <Link to="/">
          { 'GALERIA PALÁCIO' }
        </Link>
      </h1>
      <div className="navigation">
        <Link
          to="/about"
          className={ `link ${isActive( 'about' ) ? 'active' : ''}` }
          onClick={ () => { setActive( 'about' ); setOpen( false ); } }
        >
          { translate('about') }
        </Link>
        <Link
          to="/artists"
          className={ `link ${ isActive( 'artists' ) ? 'active' : '' }` }
          onClick={ () => setActive( 'artists' ) }
        >
          { translate('artists') }
        </Link>
        <Link
          to="/exhibitions"
          className={ `link ${ isActive( 'exhibitions' ) ? 'active' : '' }` }
          onClick={ () => { setActive( 'exhibitions' ); setOpen( false ); } }
        >
          { translate('exhibitions') }
        </Link>
        <Link
          to="/viewing-room/login"
          className={ `link ${ isActive( 'viewing-room' ) ? 'activeViewingRoom' : '' }` }
          onClick={ () => { setActive( 'viewing-room' ); setOpen( false ); } }
        >
          { translate('collection') }
        </Link>
        <span className="logoutLang">
          {
            ( isActive( 'viewing-room' ) && firebase.getCurrentUsername() ) ? (
              <a className="logout" onClick={ logout }>
                Log out
              </a>
            ) : (
              <Link
                className="logout"
                onClick={ () => { setActive( 'viewing-room' ); setOpen( false ); } }
                to="/viewing-room/login"
              >
                Log in
              </Link>
            )
          }
          <span className="divider"> | </span>
          <LanguageOptions />
        </span>
      </div>
      <VeganBurguerIcon
        onClick={ () => setOpen( !open ) }
      >
        {
          open ? (
            <img className="close" src={ close } />
          ) : (
            <Fragment>
              <div>&#9776;</div>
            </Fragment>
          )
        }
      </VeganBurguerIcon>
    </NavigationWrapper>
  )
}

export default Navigation;