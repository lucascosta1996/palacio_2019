import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { collection } from './collection'
import Image from './Image'
import { I18nContext } from '../../i18n'

const ImageCatalogueWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 0 70px;
padding-bottom: 10px;

@media ( max-width: 768px ) {
  justify-content: center;
  padding-bottom: 40px;
}

.hidden {
  display: none;
}

.item {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
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

  .exhibitionTitle {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding: 0 70px;
    padding-bottom: 80px;
    padding-top: 80px;

    p {
      margin-bottom: 0;
    }

    a {
      color: #000;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      text-decoration: none;

      &:hover {
        color: #4547ee;
      }
    }
  }
`

function ImageCatalogue (props) {
  const { translate } = useContext(I18nContext)

  return (
    <CopyRightPadding>
      <section className="exhibitionTitle">
        <div>
         <i>Selected Works: 2016–2019</i>
         <p>{translate('selectedWorksDate')}</p>
        </div>
        <a href={ require( `../../assets/downloads/${translate('pdfSelectedWorks')}` ) } target="_blank">press release</a>
      </section>
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