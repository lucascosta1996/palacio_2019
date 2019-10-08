import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { collection } from './collection'
import Copyright from '../Copyright/Copyright'

const ImageCatalogueWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 0 70px;
padding-bottom: 120px;

@media ( max-width: 768px ) {
  justify-content: center;
  padding-bottom: 60px;
}

.item {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  max-width: 350px;
  text-decoration: none;
  
  img {
    max-width: 350px;
    margin-bottom: 20px;
    transition: all .3s ease;
    width: 100%;

    &:hover {
      opacity: .7;
    }
  }

  .workTitle,
  .artistName {
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: #4547ee;
    }
  }

  .artistName {
    font-weight: 500;
  }

  .workTitle {
    padding-top: 2px;
  }
`

const CopyRightPadding = styled.div`
  padding-bottom: 40px;
`

function ImageCatalogue (props) {
  return (
    <CopyRightPadding>
      <ImageCatalogueWrapper>
        {
          collection.map( item => (
            <Link to={`/viewing-room/main/${item.route}`} className="item">
              <img src={ require( `../../assets/catalogue/${item.coverImage}` ) } />
              <span className="artistName">
                {item.artist}
              </span>    
              <p className="workTitle">
                <i>
                  {item.name}
                </i>, <span> {item.period} </span>
              </p>    
            </Link>
          ))
        }
      </ImageCatalogueWrapper>
      <Copyright />
    </CopyRightPadding>
  )
}

export default ImageCatalogue