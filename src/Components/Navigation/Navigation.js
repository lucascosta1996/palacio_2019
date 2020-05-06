import React, { Fragment, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from '../../i18n'
import LanguageOptions from '../Language/LanguageOptions'
import firebase from '../../firebase'
import 'firebase/auth'
import HamburgerMenu from 'react-hamburger-menu'

const NavigationWrapper = styled.section`
  ${props => props.isOpened && `background-color: #fff;`}
  display: flex;
  flex-direction: column;
  left: 25px;
  padding-top: 25px;
  position: fixed;
  overflow: hidden;
  text-align: left;
  top: 0;
  z-index: 2;

  @media ( max-width: 520px ) {
    left: 0;
    padding-left: 25px;
    ${props => props.isOpened && `width: 100%; height: 128px;`}
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
      color: #c3c3c3;
    }
  }

  h1 {
    line-height: 1;

    a {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 22px;
      line-height: 26px;
    }
  }

  .link {
    text-transform: uppercase;
  }

  .active {
    /*color: #c3c3c3;*/
  }

  .activeViewingRoom { 
    color: #6bf93c!important;
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
      align-items: flex-start;
      flex-direction: column;
      right:unset;
      top: 55px;
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
    display: none!important;
  }

  .close {
    position: fixed;
    right: 35px;
    top: 22px;
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
    padding-right: 10px;
  }

  .title {
    a {
      &:hover {
        color: #000;
      }
    }
  }

  .menu {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1px;
    margin-left: 20px;
    margin-top: 6px;
    position: relative;
    width: 18px;
    height: 15px;

    .hamburger-icon {
      position: absolute;
      z-index: 2;
    }

    &:hover {
      font-weight: 500;
    }

    @media(max-width: 520px) {
      display: none;
    }
  }

  .bold {
    font-weight: 500;
  }
`

const VeganBurguerIcon = styled.div`
  cursor: pointer;
  font-size: 16px;
  position: fixed;
  right: 35px;
  top: 31px;

  @media ( min-width: 769px ) {
    display: none;
  }
`

const Navigation = props => {
  const { translate } = useContext(I18nContext)
  const [ active, setActive ] = useState( '' )
  const [ open, setOpen ] = useState( false )
  const [ isLogged, setIsLogged ] = useState( false )
  const isActive = ( path ) => window.location.href.indexOf( path ) > 1

  async function logout() {
		await firebase.logout()
		window.location.replace("/viewing-room/login");
  }

  useEffect( () => {
    setInterval( () => firebase.isLoggedIn() && setIsLogged( true ), 1000 )
  } )

  return (
    <NavigationWrapper
      isOpened={ open }
    >
      <h1 className="title" onClick={ () => setActive( '/' ) }>
        <Link to="/home">
          { 'GALERIA PALÁCIO' }
        </Link>
      </h1>
      <div className="navigation">
        <Link
          to="/artists"
          className={ `link ${ isActive( 'artists' ) ? 'active' : '' } ${ open ? '' : 'hidden' }` }
          onClick={ () => { setActive( 'artists' ); setOpen( false ); window.scrollTo(0,0); } }
        >
          { translate('artists') }
        </Link>
        <Link
          to="/exhibitions"
          className={ `link ${ isActive( 'exhibitions' ) ? 'active' : '' } ${ open ? '' : 'hidden' }` }
          onClick={ () => { setActive( 'exhibitions' ); setOpen( false ); window.scrollTo(0,0) } }
        >
          { translate('exhibitions') }
        </Link>
        <Link
          to="/viewing-room/"
          className={ `link ${ (isActive( 'viewing-room/main' ) ) ? 'active' : '' } ${ open ? '' : 'hidden' }` }
          onClick={ () => { setActive( 'viewing-room/main' ); setOpen( false ); window.scrollTo(0,0) } }
        >
          { translate('collection') }
        </Link>
        <Link
          to="/about"
          className={ `link ${isActive( 'about' ) ? 'active' : ''} ${ open ? '' : 'hidden' }` }
          onClick={ () => { setActive( 'about' ); setOpen( false ); window.scrollTo(0,0) } }
        >
          { translate('about') }
        </Link>
        <span className={`logoutLang ${ open ? '' : 'hidden' }`}>
          <LanguageOptions />
        </span>
        <span className={`menu`} onClick={ () => setOpen( !open ) }>
          <div className="hamburger-icon">
            <HamburgerMenu
              isOpen={open}
              menuClicked={ () => setOpen( !open ) }
              width={18}
              height={15}
              strokeWidth={1.2}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </span>
      </div>
      <VeganBurguerIcon
        onClick={ () => setOpen( !open ) }
      >
        <Fragment>
          <HamburgerMenu
            isOpen={open}
            menuClicked={ () => setOpen( !open ) }
            width={18}
            height={15}
            strokeWidth={1.2}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
          />
        </Fragment> 
      </VeganBurguerIcon>
    </NavigationWrapper>
  )
}

export default Navigation;