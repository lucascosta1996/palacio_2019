import React, { useContext } from 'react'
import styled from 'styled-components'
import Slide from '../Slide/Slide'
import { I18nContext } from "../../i18n"

const ItemWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  position: absolute;
  top: 0;

  .center {
    display: flex;
  }

  .artist {
    font-size: 18px;
    font-weight: 500px!important;
  }

  .infos {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    padding-top: 40px;
    width: 400px;
  }

  .additionalInfo {
    display: flex;
    flex-direction: column;
    padding-bottom: 60px; 
    padding-top: 25px;
  }

  .gallery {
    display: flex;
    flex-direction: column;
    padding-top: 60px;

    a {
      color: #1d6cdb;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      padding: 5px 0;
    }
  }
`

function Item (props) {
  const { translate } = useContext(I18nContext)

  return (
    <ItemWrapper>
      <div className="center">
        <Slide slides={props.item.slides} width={700} />
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
            <a href="#">{translate('galleryContact')}</a>
            <a href="#">{translate('workInfo')}</a>
          </section>
        </div>
      </div>
    </ItemWrapper>
  )
}

export default Item