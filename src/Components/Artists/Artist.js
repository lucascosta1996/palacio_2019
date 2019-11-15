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
        max-width: 300px;
      }
    }
  }

  .firstRow {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }

  .secondRow {
    padding-bottom: 110px;
    
    div {
      p {
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        line-height: 18px;
        max-width: 300px;
      }

      span{
        display: block;
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        line-height: 18px;
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }
  }

  .externalLink {
    margin: auto;
    padding-bottom: 140px;
    width: 1100px;

    a {
      color: #000;
      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none; 

      &:hover {
        color: #c3c3c3;
      }

      i {
        padding-left: 5px;
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      width: 1000px;
    }

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  footer {
    padding-bottom: 40px;
    padding-left: 25px;
  }

  .singleImage {
    padding-bottom: 54px;
    margin: auto;
    width: 1100px;

    @media (max-width: 1024px) {
      flex-direction: column;
      width: 1000px;
    }

    @media (max-width: 768px) {
      width: 90%;
    }

    img {
      max-width: 100%;
    }
  }
`

const Artist = props => {
  const { translate } = useContext(I18nContext)
  const text = useRef()

  useEffect( () => {
    text.current.innerHTML = text.current.innerHTML
    .replace(/Entre o Céu e o Oceano/g, `<i>Entre o Céu e o Oceano</i>`)
  } )

  return (
    <ArtistWrapper>
      <section className="firstRow row">
        <h2>{ props.artist.name }</h2>
        <img src={ props.artist.artistWork } />
      </section>
      <section className="row secondRow">
        <img src={ props.artist.image } />
        <div>
          <p ref={ text }>{ translate( props.artist.text ) }</p>
        </div>
      </section>
      <section className="singleImage">
        <img src={`${props.artist.bigImage}`} />
      </section>
      <section className="externalLink">
        <a href={ props.artist.siteUrl } target="_blank">
          { props.artist.site } <i class="fas fa-link"></i>
        </a>
      </section>
      <footer>
        <Copyright back route="/artists"/>
      </footer>
    </ArtistWrapper>
  )
}

export default Artist;