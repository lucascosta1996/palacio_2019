import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { I18nContext } from '../../i18n'

const BackWrapper = styled.div`
  ${props => props.bottom && 'bottom: 40px;'}
  font-size: 14px;
  ${props => props.position === 'absolute' && 'position: absolute;'}
  ${props => props.position === 'fixed' && 'position: fixed;'}
  left: 25px;

  a {
    color: #000;
    text-decoration: none;
  }
`

function Back(props) {
  const { translate } = useContext( I18nContext )

  return (
    <BackWrapper bottom={props.bottom} position={props.position}>
      <Link to={props.route}>
        {translate('back')}
      </Link>
    </BackWrapper>
  )
}

export default Back