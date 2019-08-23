import React, { Fragment, useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from '../../i18n'
import close from '../../assets/icons/close.png'
import { isMobile } from '../../helpers/helpers'
import firebase from '../../firebase'

const NavigationWrapper = styled.section`
  ${props => props.isOpened && `background-color: #fff;`}
  ${props => props.isOpened && `width: 100%; height: 200px;`}
  display: flex;
  flex-direction: column;
  left: 65px;
  position: fixed;
  overflow: hidden;
  text-align: left;
  top: 40px;
  z-index: 2;

  @media ( max-width: 520px ) {
    left: 25px;
  }
  
  h1,
  a {
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 500;
    margin: 0;
    text-decoration: none;
    transition: .3s all ease;

    &:hover {
      color: #81828F;
    }

    @media ( max-width: 520px ) {
      font-size: 24px!important;
    }
  }

  .active {
    color: #81828F;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 35%;

    @media ( max-width: 768px ) {
      top: 80px;
      ${props => !props.isOpened && `display: none;`}
    }
  }

  .acervo {
    position: fixed;
    bottom: 50px;
    left: 65px;

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
    top: 50px;
    width: 14px;
  }
`

const VeganBurguerIcon = styled.div`
  cursor: pointer;
  font-size: 18px;
  position: fixed;
  right: 35px;
  top: 45px;

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
          { 'Galeria Palácio' }
        </Link>
      </h1>
      <div className="navigation">
        <Link
          to="/about"
          className={ `${isActive( 'about' ) ? 'active' : ''}  ${ ( isActive( 'acervo' ) && !open ) ? 'hidden' : '' }` }
          onClick={ () => { setActive( 'about' ); setOpen( false ); } }
        >
          { translate('about') }
        </Link>
        <Link
          to="/artists"
          className={ `${ isActive( 'artists' ) ? 'active' : '' } ${ ( isActive( 'acervo' ) && !open ) ? 'hidden' : '' }` }
          onClick={ () => setActive( 'artists' ) }
        >
          { translate('artists') }
        </Link>
        <Link
          to="/exhibitions"
          className={ `${ isActive( 'exhibitions' ) ? 'active' : '' } ${ ( isActive( 'acervo' ) && !open ) ? 'hidden' : '' }` }
          onClick={ () => { setActive( 'exhibitions' ); setOpen( false ); } }
        >
          { translate('exhibitions') }
        </Link>
        {
          open && (
            <Link
              to="/acervo/login"
              className={ `${ isActive( 'acervo' ) ? 'active' : '' }` }
              onClick={ () => { setActive( 'acervo' ); setOpen( false ); } }
            >
              { translate('collection') }
            </Link>
          )
        }
        {
          ( isMobile() && isActive( 'acervo' ) && firebase.getCurrentUsername() ) && (
            <a onClick={ logout }>
              Log out
            </a>
          )
        }
      </div>
      <Link
        to="/acervo/login"
        className={ `acervo ${ isActive( 'acervo' ) ? 'active' : '' }` }
        onClick={ () => setActive( 'acervo' ) }
      >
        { translate('collection') }
      </Link>
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