import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { I18nContext } from '../../i18n/index'

const PrivacyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  left: 0;
  margin: auto;
  padding-bottom: 100px;
  position: absolute;
  right: 0;
  top: 100px;

  .privacy {
    margin: auto;
    width: 740px;

    @media (max-width: 786px) {
      width: 90%;
    }

    h2,
    h3 {
      font-weight: 500;
    }

    h2 {
      font-size: 14px;
      padding-bottom: 14px;
    }

    h3 {
      font-size: 13px;
    }

    p {
      font-size: 13px;
      line-height: 14px;
      margin: 0 0 13px;

      a {
        color: #000;

        &:hover {
          color: #c3c3c3;
        }
      }

      b {
        font-weight: 500;
      }

      span {
        font-weight: 300;
      }
    }

    b {
      font-size: 13px;
      font-weight: 500;
    }

    .update {
      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      padding-top: 13px;

      p {
        font-weight: 500;
      }
    }

    .generalInfo {
      padding-bottom: 13px;

      p {
        margin: 3px 0;
      }
    }

  }
  .back {
    color: #000;
    font-size: 13px;
    padding-top: 60px;
    position: relative;
    padding-left: 25px;
    text-decoration: none;
    width: max-content;

    &:hover {
      color: #c3c3c3;
    }

    &:visited {
      color: #000;
    }
  }
`

function  Privacy( props ) {
  const { translate } = useContext(I18nContext)

  useEffect( () => {
    window.scrollTo( 0, 0 )
  } )

  return(
    <PrivacyWrapper>
      <section className="privacy">
        <h2>{translate('privacy')}</h2> 
        <p>{translate('privacyIntroT')}</p>
        <div className="generalInfo">
          <p>Galeria Palácio</p>
          <p>{translate('address')}</p>
          <p>{translate('country')}</p>
          <p>{translate('phone')}</p>
          <p>info@galeriapalacio.com, contact@galeriapalacio.com</p>
        </div>
        <b>{translate('p1')}</b>
        <p>{translate('p1t1')}</p>
        <b>{translate('p2')}</b>
        <p>{translate('p2t')}</p>
        <b>{translate('p3')}</b>
        <p>{translate('p3t')}</p>
        <b>{translate('p4')}</b>
        <p>{translate('p4t')}</p>
        <b>{translate('p5')}</b>
        <p>{translate('p5t')}</p>
        <div className="update">
          <span>{translate('lastUpdatePt')}</span>
        </div>
      </section>
    </PrivacyWrapper>
  )
}

export default Privacy