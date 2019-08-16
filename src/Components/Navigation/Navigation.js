import React, { useContext, useState } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from "../../i18n"

const NavigationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  left: 65px;
  position: fixed;
  text-align: left;
  top: 40px;
  z-index: 2;
  
  h1,
  a {
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 500;
    margin: 0;
    text-decoration: none;
  }

  .active {
    color: #81828F;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 35%;
  }

  .acervo {
    position: fixed;
    bottom: 50px;
    left: 65px;
  }

  .login {
    color: #95d930;
  }

  .hidden {
    display: none;
  }
`

const Navigation = props => {
  const { translate } = useContext(I18nContext)
  const [ active, setActive ] = useState( '' )
  const isActive = ( path ) => window.location.href.indexOf( path ) > 1

  return (
    <NavigationWrapper>
      <h1 onClick={ () => setActive( '/' ) }>
        <Link to="/">
          { 'Palácio' }
        </Link>
      </h1>
      <div className="navigation">
        <Link
          to="/about"
          className={ `${isActive( 'about' ) ? 'active' : ''}  ${ isActive( 'acervo' ) ? 'hidden' : '' }` }
          onClick={ () => setActive( 'about' ) }
        >
          { translate('about') }
        </Link>
        <Link
          to="/artists"
          className={ `${ isActive( 'artists' ) ? 'active' : '' } ${ isActive( 'acervo' ) ? 'hidden' : '' }` }
          onClick={ () => setActive( 'artists' ) }
        >
          { translate('artists') }
        </Link>
        <Link
          to="/exhibitions"
          className={ `${ isActive( 'exhibitions' ) ? 'active' : '' } ${ isActive( 'acervo' ) ? 'hidden' : '' }` }
          onClick={ () => setActive( 'exhibitions' ) }
        >
          { translate('exhibitions') }
        </Link>
      </div>
      <Link
        to="/acervo/login"
        className={ `acervo ${ isActive( 'acervo' ) ? 'active' : '' }` }
        onClick={ () => setActive( 'acervo' ) }
      >
        { translate('collection') }
      </Link>
    </NavigationWrapper>
  )
}

export default Navigation;