import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { I18nContext } from "../../i18n"
import firebase from '../../firebase'
import Routes from './Routes'

const CatalogueWrapper = styled.div`
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 1040px;
  padding-bottom: 60px;
  padding-top: 60px;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 520px) {
    max-width: 320px;
  }
`

function Catalogue( props ) {
  
  // if (!firebase.getCurrentUsername()) {
	// 	props.history.replace('/viewing-room/login')
	// 	return null
  // }

  return (
    <CatalogueWrapper>
      <Routes />
    </CatalogueWrapper>
  )
}

export default withRouter(Catalogue)