import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { collection } from './collection'
import Copyright from '../Copyright/Copyright'
import Image from './Image'

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

.hidden {
  display: none;
}

.item {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  max-width: 350px;
  text-decoration: none;

  &:hover {
    .workTitle,
    .artistName {
      color: #c3c3c3;
    }

    img {
      opacity: .7;
    }
  }
  
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
    text-decoration: none;

    &:hover {
      color: #c3c3c3;
    }
  }

  .loading {
    background: #d1d1d1;
    height: 196px;
    margin-bottom: 20px;
    opacity: 0.4;
    position: relative;
    width: 350px;
  }

  .artistName {
    font-weight: 500;
  }

  .workTitle {
    font-weight: 300;
    margin: 5px 0;
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
              <Image coverImage={ require( `../../assets/catalogue/${item.coverImage}`) } />
              <span className="artistName">
                {item.artist}
              </span>    
              <p className="workTitle">
                <i>
                  {item.name}
                </i> <span> {item.period} </span>
              </p>    
            </Link>
          ))
        }
      </ImageCatalogueWrapper>
    </CopyRightPadding>
  )
}

export default ImageCatalogue