import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { exhibitions } from './exhibitionsJson'
import { I18nContext } from '../../i18n'
import Copyright from '../Copyright/Copyright'

const ExhibitionsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  margin: auto;
  max-width: fit-content;
  padding: 100px 100px 40px;
  position: absolute;
  right: 0;
  top: 100px;
  text-align: center;

  @media (max-width: 520px) {
    padding: 100px 20px 0;
  }

  a {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 40px;
    text-decoration: none;

    @media (min-width: 1024px) {
      padding-left: 100px;
    }

    span {
      color: #000;
      display: block;
      font-size: 13px;
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
            <span>{show.artist}: <i>{show.showName}</i></span>
            <span>{translate(show.showDate)}</span>
          </Link>
        ))
      }
    </ExhibitionsListWrapper>
  )
}

export default ExhibitionsList