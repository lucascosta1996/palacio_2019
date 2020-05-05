import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { exhibitions } from './exhibitionsJson'
import { viewingRoomExhibitions } from './viewingRoomExhibitionsJson'
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

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 25px;
  text-align: left;
  top: 200px;

  .active {
    color: #c3c3c3;
  }

  span {
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    padding-bottom: 16px;

    &:hover {
      color: #c3c3c3;
    }
  }
`

function ExhibitionsList (props) {
  const { translate } = useContext(I18nContext)
  const [ exhibitionsType, setExhibitionsType ] = useState( 'gallery' )
  const allExhibitions = viewingRoomExhibitions.concat( exhibitions )

  return (
    <ExhibitionsListWrapper>
      <Categories>
        <span
          className={exhibitionsType === 'allExhibitions' ? 'active' : null}
          onClick={() => setExhibitionsType( 'allExhibitions' )}
        >
          {translate('allExhibitions')}
        </span>
        <span
          className={exhibitionsType === 'gallery' ? 'active' : null}
          onClick={() => setExhibitionsType( 'gallery' )}
        >
          {translate('gallery')}
        </span>
        <span
          className={exhibitionsType === 'vr' ? 'active' : null}
          onClick={() => setExhibitionsType( 'vr' )}
        >
          Viewing Room
        </span>
      </Categories>
      {
        exhibitionsType === 'gallery' ? (
          exhibitions.map( show => (
            <Link to={`exhibitions/${show.showRoute}`}>
              <span>{show.artist}</span>
              <span><i>{show.showName}</i></span>
              <span>{translate(show.showDate)}</span>
            </Link>
          )) ) : (
            exhibitionsType === 'allExhibitions' ? (
              allExhibitions.map( show => (
                <Link to={`${show.showRoute}`}>
                  {
                    !show.isNameHidden && <span>{show.artist}</span>
                  }
                  <span><i>{show.showName}</i></span>
                  <span>{translate(show.showDate)}</span>
                </Link>
              ))
            ) : (
              viewingRoomExhibitions.map( show => (
                <Link to={`${show.showRoute}`}>
                  {
                    !show.isNameHidden && <span>{show.artist}</span>
                  }
                  <span><i>{show.showName}</i></span>
                  <span>{translate(show.showDate)}</span>
                </Link>
              ))
            )
          )
      }
    </ExhibitionsListWrapper>
  )
}

export default ExhibitionsList