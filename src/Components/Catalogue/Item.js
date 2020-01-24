import React, { useContext } from 'react'
import styled from 'styled-components'
import Slide from '../Slide/Slide'
import { I18nContext } from "../../i18n"
import { isMobile } from '../../helpers/helpers'
import Back from '../Back/Back'

const ItemWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 16px;
  justify-content: center;
  position: absolute;
  top: 0;

  @media ( max-width: 768px ) {
    left: 0;
    right: 0;
    top: 0;
  }

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
    margin-left: 140px;
    max-width: 400px;

    @media ( max-width: 768px ) {
      margin-left: 0;
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
  }

  .gallery {
    padding-top: 40px;

    button {
      background: none;
      border: 1px solid #4547ee;
      color: #4547ee;
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      padding: 10px 5px;
      width: auto;

      &:hover {
        background: #4547ee;
        border: none;
        padding: 11px 6px;

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

function Item (props) {
  const { translate } = useContext(I18nContext)

  return (
    <ItemWrapper>
      <div className="center">
        <Slide slides={props.item.slides} width={isMobile() ? 250 : 700} />
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
      <Back position="fixed" bottom route="/viewing-room/main" />
    </ItemWrapper>
  )
}

export default Item