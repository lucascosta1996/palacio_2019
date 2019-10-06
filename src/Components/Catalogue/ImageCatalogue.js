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
    width: 100%;
  }

  .workTitle,
  .artistName {
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
  }

  .workTitle {
    font-style: italic;
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
            <Link to={`/viewing-room/catalogue/${item.route}`} className="item">
              <img src={ require( `../../assets/catalogue/${item.coverImage}` ) } />
              <span className="artistName">
                {item.artist}
              </span>    
              <span className="workTitle">
                {item.name}
              </span>    
            </Link>
          ))
        }
      </ImageCatalogueWrapper>
      <Copyright />
    </CopyRightPadding>
  )
}

export default ImageCatalogue