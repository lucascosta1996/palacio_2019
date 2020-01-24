import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from '../i18n/index'
import Copyright from './Copyright/Copyright'

const CurrentExhibitionWrapper = styled.section`
  align-items: center;
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0
  top: 130px;
  width: 800px;

  a {
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    padding: 0 5px;
    text-decoration: none;

    section {
      transition: all .3s ease;
    }
    
    &:hover {
      section {
        opacity: 0.6;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  .current-wrapper {
    align-items: flex-start;
    display: flex;
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

  section {
    align-items: center;
    display: flex;
    justify-content: center;

    @media (max-width: 1279px) {
      flex-direction: column-reverse;
    }
  }

  .copy {
    padding-bottom: 40px;
  }

  .viewing {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    padding-top: 80px;

    @media (max-width: 1279px) {
      flex-direction: column;
    }
  }

  img {
    width: 100%;

    @media (min-width: 1279px) {
      max-width: 800px;
    }
  }

  .imageWrapper {
    @media (max-width: 1280px) {
      margin-bottom: 40px;
      text-align: center;
    }

    @media (max-width: 520px) {
      margin: 0 auto 10px;
      width: 90%;
    }
  }

  .infosCurrentEx {
    align-items: center;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    text-align: center;

    @media (max-width: 520px) {
      flex-direction: column;
      margin: 0 auto;
    }

    p {
      padding: 0 3px;
    }

    a {
      color: #000;
      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      padding: 0 5px;
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
      <Link to="/exhibitions/estadio">
        <section className="current current-wrapper">
          <div className="marginRight infosCurrentEx">
            <p>
            Emerson da Silva, <i>Estádio</i>,
            </p>
            <p>
              {translate('estadioDate')}
            </p>
          </div>
          <div className="imageWrapper">
            <img alt="Galeria Palácio current exhibition - Contato visual, 2019 - Chiaki Mihara" src={ require( `../assets/index/Emerson-da-Silva-Estádio-2020-Galeria-Palácio-All-rights-reserved.jpg` ) } />
          </div>
        </section>
      </Link>
      
      <Link to="/viewing-room/main">
        <section className="viewing">
          <div className="imageWrapper">
            <img alt="Galeria Palácio current exhibition - Contato visual, 2019 - Chiaki Mihara" src={ require( `../assets/exhibitions/autoretratos/Autorretratos-2018-Chiaki-Mihara-Installation-View-Photo-Galeria-Palácio-(4).jpg` ) } />
          </div>
          <div className="infosCurrentEx">
            <p>
              <i>Selected Works, 2016–2019</i>, 
            </p>
            <p>
              {translate('selectedWorksDate')}
            </p>
          </div>
        </section>
      </Link>
      <div className="copy">
        <Copyright />
      </div>
    </CurrentExhibitionWrapper>
  )
}

export default CurrentExhibition