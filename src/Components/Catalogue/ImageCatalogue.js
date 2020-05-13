import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Image from './Image'
import { I18nContext } from '../../i18n'
import Slide from '../Slide/Slide'
import { isMobile } from '../../helpers/helpers'

const ImageCatalogueWrapper = styled.div`
align-items: center;
display: flex;
flex-direction: column;
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
  max-width: 700px;
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
    height: 396px;
    margin-bottom: 20px;
    opacity: 0.4;
    position: relative;
    width: 700px;
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
  margin: 0 auto;
  max-width: 1000px;
  padding-bottom: 140px;

  .exhibitionTitle {
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding-bottom: 110px;
    padding-top: 80px;

    p {
      margin-bottom: 0;
    }
  }

  .exhibitionBottom {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 700px;

    .artistImage {
      padding-top: 90px;

      img {
        max-width: 100%;
      }

      &__caption {
        color: #b3b4b5;
        font-size: 12px;
      }
    }

    &__text {
      font-size: 13px;
      padding-bottom: 20px;
    }

    a {
      color: #000;
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      font-weight: 500;
      text-decoration: none;
  
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .marginBottom {
    margin-bottom: 40px
  }
`

const OnlineVRLogo = styled.span`
  font-size: 13px;
  font-weight: 500;
`

function ImageCatalogue ( props ) {
  const { translate } = useContext(I18nContext)
  const { showDate, showName, works, slides } = props.show
  const paragraph1 = useRef()
  const paragraph2 = useRef()
  const paragraph3 = useRef()
  const paragraph4 = useRef()
  const paragraph5 = useRef()

  useEffect( () => {
    if ( paragraph1.current ) {
      paragraph1.current.innerHTML = paragraph1.current.innerHTML
      .replace(/Selected Works/g, `<i>Selected Works</i>`)
      .replace(/Superfície de Um lugar para estar/g, `<i>Superfície de Um lugar para estar</i>`)
      .replace(/Terrestre/g, `<i>Terrestre</i>`)
      .replace(/Individual Bodies Self-Organizing/g, `<i>Individual Bodies Self-Organizing</i>`)
      .replace(/Estádio \(Fotografias\)/g, `<i>Estádio (Fotografias)</i>`)
      .replace(/Estádio \(Aerofotografias\)/g, `<i>Estádio (Aerofotografias)</i>`)
      .replace(/Estádio/g, `<i>Estádio</i>`)
      .replace(/Autorretrato \(2\)/g, `<i>Autorretrato (2)</i>`)
    }
    if ( paragraph2.current ) {
      paragraph2.current.innerHTML = paragraph2.current.innerHTML
      .replace(/Superfície de Um lugar para estar/g, `<i>Superfície de Um lugar para estar</i>`)
      .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
      .replace(/Estádio/g, `<i>Estádio</i>`)
    }
    if ( paragraph3.current ) {
      paragraph3.current.innerHTML = paragraph3.current.innerHTML
      .replace(/Terrestre /g, `<i>Terrestre </i>`)
      .replace(/Luz, Água e Terra Preta/g, `<i>Luz, Água e Terra Preta</i>`)
      .replace(/Estádio \(Aerofotografias\)/g, `<i>Estádio (Aerofotografias)</i>`)
      .replace(/Estádio/g, `<i>Estádio</i>`)
    }
    if ( paragraph4.current ) {
      paragraph4.current.innerHTML = paragraph4.current.innerHTML
      .replace(/Individual Bodies Self-Organizing /g, `<i>Individual Bodies Self-Organizing </i>`)
      .replace(/Estádio \(Fotografias\)/g, `<i>Estádio (Fotografias)</i>`)
      .replace(/Estádio/g, `<i>Estádio</i>`)
    }
    if ( paragraph5.current ) {
      paragraph5.current.innerHTML = paragraph5.current.innerHTML
      .replace(/Autorretrato \(2\) /g, `<i>Autorretrato (2) </i>`)
      .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    }
  } )

  return (
    <CopyRightPadding>
      <section className="exhibitionTitle">
        <div>
         <i>{ showName }</i>
         <p>{translate( showDate )}</p>
        </div>
        <OnlineVRLogo>Online Viewing Room</OnlineVRLogo>
      </section>
      <ImageCatalogueWrapper>
        {
          works.map( item => (
            <Link
              to={`/online-viewing-room/${item.route}`}
              className="item"
              key={ item.route }
            >
              <Image coverImage={ require( `../../assets/catalogue/${item.coverImage}`) } />
              <span className="artistName">
                {item.artist}
              </span>    
              <p className="workTitle">
                <i>
                  {item.name}, 
                </i> <span> {item.period} </span>
              </p>    
            </Link>
          ))
        }
        {
          slides && (
            <section className="marginBottom">
              <Slide slides={ slides } width={isMobile() ? 250 : 700}/>
            </section>
          )
        }
      </ImageCatalogueWrapper>
      <section className="exhibitionBottom" style={{ paddingTop: '0' }}>
        <div className="exhibitionBottom__text">
          <p ref={paragraph1}>{props.show.paragraph1 && translate(props.show.paragraph1)}</p>
          <p ref={paragraph2}>{props.show.paragraph2 && translate(props.show.paragraph2)}</p>
          <p ref={paragraph3}>{props.show.paragraph3 && translate(props.show.paragraph3)}</p>
          <p ref={paragraph4}>{props.show.paragraph4 && translate(props.show.paragraph4)}</p>
          <p ref={paragraph5}>{props.show.paragraph5 && translate(props.show.paragraph5)}</p>
        </div>
        <a href={ require( `../../assets/downloads/${translate(props.show.pdf)}` ) } target="_blank">Download PDF</a>
        {
          props.show.extraPicture && (
            <div className="artistImage">
              <img alt="Artist" src={ require( `../../assets/catalogue/${props.show.extraPicture}`) } />
              <span className="artistImage__caption">{props.show.extraPictureCaption}</span>
            </div>
          )
        }
      </section>
    </CopyRightPadding>
  )
}

export default ImageCatalogue