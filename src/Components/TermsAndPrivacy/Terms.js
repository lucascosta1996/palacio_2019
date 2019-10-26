import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { I18nContext } from '../../i18n/index'

const TermsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  left: 0;
  margin: auto;
  padding-bottom: 40px;
  position: absolute;
  right: 0;
  top: 100px;

  section {
    margin: auto;
    width: 740px;

    @media (max-width: 786px) {
      width: 500px;
    }
  }

  h2 {
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 14px;
    text-transform: uppercase;
  }

  .title {
    padding-top: 8px;
  }

  p {
    font-size: 13px;
    line-height: 14px;
    margin: 7px 0;

    b {
      font-weight: 500;
    }

    span {
      font-weight: 300;
    }

    a {
      color: #000;

      &:hover {
        color: #c3c3c3;
      }

      &:visited {
        color: #000;
      }
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

function Terms( props ) {
  const { translate } = useContext(I18nContext)

  return(
    <TermsWrapper>
      <section>
        <h2>{translate('termsTitle')}</h2>
        <p>{translate('terms')} <Link to="/privacy-policy">{translate('clickHere')}</Link> {translate('terms2')}</p>
        <p className="title"><b>{translate('t1')}</b></p>
        <p><b>{translate('t1.1')}</b> <span>{translate('t1.1t')}</span></p>
        <p><b>{translate('t1.2')}</b> <span>{translate('t1.2t')}</span></p>
        <p><b>{translate('t1.3')}</b> <span>{translate('t1.3t')}</span></p>
        <p><b>{translate('t1.4')}</b> <span>{translate('t1.4t')}</span></p>
        <p className="title"><b>{translate('t2')}</b></p>
        <p><b>{translate('t2.1')}</b> <span>{translate('t2.1t')}</span></p>
        <p><b>{translate('t2.2')}</b> <span>{translate('t2.2t')}</span></p>
        <p><b>{translate('t2.3')}</b> <span>{translate('t2.3t')}</span></p>
        <p><b>{translate('t2.4')}</b> <span>{translate('t2.4t')} <Link to="/privacy-policy">{translate('t2.4tPrivacy')}</Link> {translate('t2.4t2')}</span></p>
        <p className="title"><b>{translate('t3')}</b></p>
        <p><b>{translate('t3.1')}</b> <span>{translate('t3.1t')}</span></p>
        <p><b>{translate('t3.2')}</b> <span>{translate('t3.2t')}</span></p>
        <p className="title"><b>{translate('t4')}</b></p>
        <p><b>{translate('t4.1')}</b> <span>{translate('t4.1t')}</span></p>
        <p><b>{translate('t4.2')}</b> <span>{translate('t4.2t')}</span></p>
        <div className="update">
          <span>{translate('lastUpdateTt')}</span>
        </div>
      </section>
      <Link className="back" to="/about">
        {translate('back')}
      </Link>
    </TermsWrapper>
  )
}

export default Terms