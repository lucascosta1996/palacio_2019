import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { collection } from './collection'

const ImageCatalogueWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 0 70px;

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
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
  }

  .workTitle {
    font-style: italic;
    padding-top: 8px;
  }
`

function ImageCatalogue (props) {
  return (
    <ImageCatalogueWrapper>
      {
        collection.map( item => (
          <Link to={`/acervo/catalogo/${item.route}`} className="item">
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
  )
}

export default ImageCatalogue