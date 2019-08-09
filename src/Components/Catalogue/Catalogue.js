import React, { Component, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { I18nContext } from "../../i18n"
import firebase from '../../firebase'
import Logout from '../Login/Logout'
import Routes from './Routes'

const CatalogueWrapper = styled.div`
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 1000px;
  padding-bottom: 60px;
  padding-top: 60px;
  position: absolute;
  right: 0;
  top: 0;
`

function Catalogue( props ) {
  const { translate } = useContext(I18nContext)
  
  if (!firebase.getCurrentUsername()) {
		props.history.replace('/acervo/login')
		return null
  }

  return (
    <CatalogueWrapper>
      <Logout />
      <Routes />
    </CatalogueWrapper>
  )
}

export default withRouter(Catalogue)