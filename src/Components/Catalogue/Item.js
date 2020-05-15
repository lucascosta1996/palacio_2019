import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Slide from '../Slide/Slide'
import { I18nContext } from "../../i18n"
import { isMobile } from '../../helpers/helpers'
import Back from '../Back/Back'

const ItemWrapper = styled.div`
  align-items: center;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 16px;
  justify-content: center;

  .center {
    display: flex;

    @media ( max-width: 1024px ) {
      flex-direction: column;
    }
  }

  .artist {
    font-size: 13px;
    font-weight: 500!important;
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 99px;
    max-width: 400px;

    @media ( max-width: 768px ) {
      margin: auto;
      max-width: 90%;
      padding-top: 30px;
    }
  }

  .additionalInfo {
    display: flex;
    flex-direction: column;
    padding-top: 40px;

    span {
      font-size: 11px;
      font-weight: 300;
      line-height: 13px;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 11px;
    }
  }

  .gallery {
    padding-top: 40px;

    button {
      background: none;
      border: 1px solid #000;
      border-radius: 3px;
      color: #000;
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      padding: 10px 20px;
      width: auto;

      .email {
        color: #000;
      }

      &:hover {
        background: #000;
        border: none;
        padding: 11px 21px;

        a {
          color: #fff;
        }
      }

      a {
        text-decoration: none;
      }
    }
  }
`

const TextItemWrapper = styled.div`
  padding-top: 100px;
  margin: auto;
  max-width: 1200px;

  @media ( max-width: 1024px ) {
    padding-bottom: 120px;

    .align-self-center {
      align-self: center;
    }
  }

  .text {
    padding: 100px 0 80px;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      max-width: 700px;
      padding-bottom: 72px;
    }

    a {
      color: #000;
      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
    }
  }
`

function Item (props) {
  useEffect( () => {
    window.scrollTo( 0, 0 )
  } )

  const { translate } = useContext(I18nContext)
  const textRef = useRef()

  useEffect(() => {
    textRef.current.innerHTML = textRef.current.innerHTML
    .replace(/Estádio \(Aerofotografias\)/g, `<i>Estádio (Aerofotografias)</i>`)
    .replace(/Estádio \(Fotografias\)/g, `<i>Estádio (Fotografias)</i>`)
    .replace(/Estádio/g, `<i>Estádio</i>`)
    .replace(/Terrestre/g, `<i>Terrestre</i>`)
    .replace(/Autorretrato \(2\)/g, `<i>Autorretrato (2)</i>`)
    .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    .replace(/Terreno/g, `<i>Terreno</i>`)
    .replace(/Luz, Água e Terra Preta/g, `<i>Luz, Água e Terra Preta</i>`)
    .replace(/Individual Bodies Self-Organizing/g, `<i>Individual Bodies Self-Organizing</i>`)
    .replace(/Superfície de Um lugar para estar/g, `<i>Superfície de Um lugar para estar</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
  })

  return (
    <TextItemWrapper>
      <ItemWrapper>
        <div className="center">
          <div className="align-self-center">
            <Slide slides={props.item.slides} width={isMobile() ? 270 : 900} />
          </div>
          <div className="infos">
            <span className="artist">{ props.item.artist }</span>
            <i>{ props.item.name }</i>
            <section className="additionalInfo">
              <span>{translate(props.item.date)}</span>
              {
                props.item.info1 && <span>{translate(props.item.info1)}</span>
              }
              {
                props.item.info2 && <span>{translate(props.item.info2)}</span>
              }
              {
                props.item.info3 && <span>{translate(props.item.info3)}</span>
              }
              <p ref={textRef}>{translate(props.item.text)}</p>
              {
                props.item.info4 && <span>{translate(props.item.info4)}</span>
              }
            </section>
            <section className="gallery">
              <button>
                <a className="email" href="mailto:info@palacio.xyz" target="_top">
                  {translate('galleryContact')}
                </a>
              </button>
            </section>
          </div>
        </div>
      </ItemWrapper>
      <Back route="/online-viewing-room/main" />
    </TextItemWrapper>
  )
}

export default Item