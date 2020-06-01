import React, { useContext, useEffect, useRef } from "react"
import styled from 'styled-components'
import { I18nContext } from "../../i18n"
import Copyright from "../Copyright/Copyright"


const ArtistWrapper = styled.section`
  text-align: left;
  width: 100%;

  .row {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 1100px;

    @media (max-width: 1024px) {
      flex-direction: column;
      width: 1000px;
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    h2 {
      font-family: 'Roboto', sans-serif;
      font-size: 17px;
      font-weight: 300;
    }
  
    img {
      max-width: 700px;
  
      @media ( max-width: 520px ) {
        max-width: 100%;
      }
    }
  }

  .firstRow {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }

    img {
      @media ( max-width: 520px ) {
        margin-top: 10px;
      }
    }
  }

  .secondRow {
    align-items: center;
    justify-content: space-around
    padding-bottom: 110px;

    .portrait {
      text-align: center;

      @media ( max-width: 1024px ) {
        margin-top: 50px;
      }

      img {
        margin: auto;
        max-width: 210px;

        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }
    
    div {
      p {
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        line-height: 16px;
        margin: 0;
        max-width: 565px;
      }

      .p-top {
        padding-top: 11px;
      }

      span {
        display: block;
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        line-height: 16px;
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }

    @media ( max-width: 520px ) {
      padding-bottom: 100px;
    }

    img {
      @media ( max-width: 520px ) {
        margin-top: 40px;
      }
    }
  }

  .externalLink {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding-bottom: 140px;
    width: 1100px;

    @media (max-width: 1024px) {
      align-items: flex-start;
      flex-direction: column;
      width: 1000px;
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    &__info {
      display: flex;
      flex-direction: column;
      font-size: 13px;

      span {
        margin: 2px 0;
      }

      &__name {
        font-weight: 500;
      }
    }

    a {
      color: #b3b4b5;
      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;

      @media (max-width: 768px) {
        padding-top: 10px;
      }

      &:hover {
        color: #000;
      }

      i {
        padding-left: 5px;
      }
    }

  }

  footer {
    padding-bottom: 40px;
  }

  .singleImage {
    padding-bottom: 110px;
    margin: auto;
    width: 1100px;

    @media (max-width: 1024px) {
      flex-direction: column;
      width: 1000px;
    }

    @media (max-width: 768px) {
      width: 90%;

      img {
        margin-top: 0;
      }
    }

    img {
      max-width: 100%;
    }
  }
`

const Artist = props => {
  const { translate } = useContext(I18nContext)
  const artistText = useRef()
  const { artist } = props

  useEffect( () => {
    artistText.current.innerHTML = artistText.current.innerHTML
    .replace(/Entre o Céu e o Oceano/g, `<i>Entre o Céu e o Oceano</i>`)
    .replace(/Particles Within a Space/g, `<i>Particles Within a Space</i>`)
  } )

  return (
    <ArtistWrapper
      artist={ artist }
    >
      <section className="firstRow row">
        <h2>{ artist.name }</h2>
        <img alt={ `${artist.name}'s work` } src={ artist.artistWork } />
      </section>
      <section className="row secondRow">
        <div className="portrait">
          <img alt={ `${artist.name}'s work` } src={ artist.image } />
        </div>
        <div>
          <p ref={ artistText } className="p-top">{ translate( artist.text1 ) }</p>
          <p className="p-top">{ translate( artist.text2 ) }</p>
          {
            artist.text3 && (
              <p className="p-top">{ translate( artist.text3 ) }</p>
            )
          }
        </div>
      </section>
      <section className="singleImage">
        <img alt={ `${artist.name}'s work` } src={`${artist.bigImage}`} />
      </section>
      <section className="singleImage">
        <img alt={ `${artist.name}'s work` } src={`${artist.bigImage2}`} />
      </section>
      <section className="externalLink">
        <div className="externalLink__info">
          <span className="externalLink__info__name">{artist.name}</span>
          <span className="externalLink__info__birth-info">
            { translate('bornIn') } {artist.birthDate} { translate('in') } { translate('portoAlegre') }
          </span>
        </div>
        <a href={ artist.siteUrl } target="_blank" rel="noopener noreferrer">
          { artist.site }
        </a>
      </section>
      <footer>
        <Copyright back route="/artists"/>
      </footer>
    </ArtistWrapper>
  )
}

export default Artist;