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
  padding: 100px 100px 100px;
  position: absolute;
  right: 0;
  top: 100px;
  text-align: center;

  @media (max-width: 520px) {
    padding: 100px 20px 0;
  }

  a {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 60px;
    text-decoration: none;

    span {
      color: #000;
      display: block;
      font-size: 13px;
      padding: 5px 0;
      text-align: left;
    }

    &:hover {
      span {
        color: #81828F;
      }
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
            <span>{show.artist}</span>
            <span><i>{show.showName}</i></span>
            <span>{translate(show.showDate)}</span>
          </Link>
        ))
      }
    </ExhibitionsListWrapper>
  )
}

export default ExhibitionsList