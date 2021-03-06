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

  .padding {
    padding-top: 120px;
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
    padding-top: 120px;

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

function CurrentExhibition() {
  const { translate } = useContext(I18nContext)

  return(
    <CurrentExhibitionWrapper>
      <Link to="/exhibitions/smoke">
        <section className="current current-wrapper">
          <div className="marginRight infosCurrentEx">
            <p>
            Andrés Stephanou, <i>Smoke</i>,
            </p>
            <p>
              {translate('smokeDate')}
            </p>
          </div>
          <div className="imageWrapper">
            <img alt="Galeria Palácio - Smoke - Andrés Stephanou" src={ require( `../assets/exhibitions/smoke/Smoke-2018-20-Andrés-Stephanou-Screenshot-(4)-All-Rights-Reserved.png` ) } />
          </div>
        </section>
      </Link>
      <Link to="/online-viewing-room/estadio">
        <section className="current current-wrapper padding">
          <div className="marginRight infosCurrentEx">
            <p>
            Emerson da Silva, <i>Estádio</i>,
            </p>
            <p>
              {translate('estadioDate')}
            </p>
          </div>
          <div className="imageWrapper">
            <img alt="Galeria Palácio - Estádio - Emerson da Silva" src={ require( `../assets/index/Emerson-da-Silva-Estádio-2020-Galeria-Palácio-All-rights-reserved.jpg` ) } />
          </div>
        </section>
      </Link>
      
      <Link to="/online-viewing-room/selected-works">
        <section className="viewing">
          <div className="imageWrapper">
            <img
              alt="Galeria Palácio Viewing Room - Selected Works, 2019"
              src={ require( `../assets/exhibitions/autoretratos/Autorretratos-2018-Chiaki-Mihara-Installation-View-Photo-Galeria-Palácio-(4).jpg` ) }
            />
          </div>
          <div className="infosCurrentEx">
            <p>
              <i>Selected Works</i>, 
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