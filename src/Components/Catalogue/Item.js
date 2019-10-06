import React, { useContext } from 'react'
import styled from 'styled-components'
import Slide from '../Slide/Slide'
import { I18nContext } from "../../i18n"
import { isMobile } from '../../helpers/helpers'
import Copyright from '../Copyright/Copyright'
import Back from '../Back/Back'

const ItemWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
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
    font-size: 14px;
    font-weight: 500px!important;
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
  }

  .gallery {
    padding-top: 40px;

    button {
      background: none;
      border: 1px solid #1d6cdb;
      color: #1d6cdb;
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      padding: 10px 5px;
      width: auto;

      &:hover {
        color: #1d6cd1;
        border: 1px solid #1d6cd1;
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
            {
              props.item.info1 && <span>{translate(props.item.info1)}</span>
            }
            {
              props.item.info2 && <span>{translate(props.item.info2)}</span>
            }
          </section>
          <span>{ props.item.price }</span>
          <section className="gallery">
            <button>{translate('galleryContact')}</button>
          </section>
        </div>
      </div>
      <Copyright position="absolute" />
      <Back position="fixed" bottom route="/viewing-room" />
    </ItemWrapper>
  )
}

export default Item