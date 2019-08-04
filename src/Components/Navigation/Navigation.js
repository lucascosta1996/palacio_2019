import React, { useContext, useState } from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from "../../i18n"

const NavigationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  left: 65px;
  position: absolute;
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
`

const Navigation = props => {
  const { translate } = useContext(I18nContext)
  const [ active, setActive ] = useState( '' )
  const isActive = ( path ) => window.location.href.indexOf( path ) > 1

  return (
    <NavigationWrapper>
      <h1>
        { 'Palácio' }
      </h1>
      <Link to="/about" className={ isActive( 'about' ) ? 'active' : '' } onClick={ () => setActive( 'about' ) }>
        { translate('about') }
      </Link>
      <Link to="/artists" className={ isActive( 'artists' ) ? 'active' : '' } onClick={ () => setActive( 'artists' ) }>
        { translate('artists') }
      </Link>
      <Link to="/exhibitions" className={ isActive( 'exhibitions' ) ? 'active' : '' } onClick={ () => setActive( 'exhibitions' ) }>
        { translate('exhibitions') }
      </Link>
    </NavigationWrapper>
  )
}

export default Navigation;