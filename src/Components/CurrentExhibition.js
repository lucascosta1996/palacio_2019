import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from '../i18n/index'

const CurrentExhibitionWrapper = styled.section`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0
  top: 0;
  width: 100%;

  @media (max-width: 1279px) {
    flex-direction: column-reverse;
  }

  .marginLeft {
    @media (min-width: 1279px) {
      margin-left: 50px;
    }
  }

  .marginRight {
    @media (min-width: 1279px) {
      margin-right: 50px;
    }
  }

  img {
    max-width: 80%;
    width: 100%;

    @media (min-width: 1279px) {
      margin-right: 50px;
      max-width: 800px;
    }
  }

  .imageWrapper {
    @media (max-width: 1280px) {
      margin-bottom: 40px;
      text-align: center;
    }
  }

  .infosCurrentEx {
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    text-align: center;

    a {
      color: #000;
      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      text-decoration: underline;

      &:hover {
        color: #c3c3c3;
      }
    }
  }
`

function CurrentExhibition( props ) {
  const { translate } = useContext(I18nContext)

  return(
    <CurrentExhibitionWrapper>
      <div className="marginRight infosCurrentEx">
        <p>
          Chiaki Mihara: <i>Contato Visual</i>
        </p>
        <p>
          {translate('contatoDate')}
        </p>
        <Link to="/exhibitions/contato-visual">
          {translate('learnMore')}
        </Link>
      </div>
      <div className="marginLeft imageWrapper">
        <img alt="Galeria Palácio current exhibition - Contato visual, 2019 - Chiaki Mihara" src={ require( `../assets/exhibitions/contatoVisual/Estudo-para-Contato-Visual-2019-Chiaki-Mihara-Installation-View-Galeria-Palácio-(2).jpg` ) } />
      </div>
    </CurrentExhibitionWrapper>
  )
}

export default CurrentExhibition