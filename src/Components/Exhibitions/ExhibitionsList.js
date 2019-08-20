import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { exhibitions } from './exhibitionsJson'
import { I18nContext } from '../../i18n'

const ExhibitionsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  margin: auto;
  max-width: fit-content;
  padding: 100px;
  position: absolute;
  right: 0;
  text-align: center;

  a {
    margin-bottom: 40px;
    text-decoration: none;

    span {
      color: #000;
      display: block;
      padding: 10px;
      text-align: left;
    }
  }
`

function ExhibitionsList (props) {
  const { translate } = useContext(I18nContext)
  return (
    <ExhibitionsListWrapper>
      {
        exhibitions.map( show => (
          <Link to={`exhibitions/${show.showRoute}`}>
            <span>{show.artist}: <i>{show.showName}</i></span>
            <span>{translate(show.showDate)}</span>
          </Link>
        ))
      }
    </ExhibitionsListWrapper>
  )
}

export default ExhibitionsList