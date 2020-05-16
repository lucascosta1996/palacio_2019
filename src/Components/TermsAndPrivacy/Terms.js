import React, { useContext, useEffect } from 'react'
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
  padding-bottom: 100px;
  position: absolute;
  right: 0;
  top: 100px;

  section {
    margin: auto;
    width: 740px;

    @media (max-width: 786px) {
      width: 90%;
    }
  }

  h2 {
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 14px;
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

  useEffect( () => {
    window.scrollTo( 0, 0 )
  } )

  return(
    <TermsWrapper>
      <section>
        <h2>{translate('termsTitle')}</h2>
        <p>{translate('terms')} <Link to="/privacy">{translate('clickHere')}</Link> {translate('terms2')}</p>
        <p className="title"><b>{translate('t1')}</b> <span>{translate('t1t')}</span></p>
        <p><b>{translate('t2')}</b> <span>{translate('t2t')}</span></p>
        <p><b>{translate('t3')}</b> <span>{translate('t3t')}</span></p>
        <p><b>{translate('t4')}</b> <span>{translate('t4t')}</span></p>
        <p><b>{translate('t5')}</b> <span>{translate('t5t')}</span></p>
        <p><b>{translate('t6')}</b> <span>{translate('t6t')} <Link to="/privacy">{translate('privacypolicy')}</Link>.</span></p>
        <p><b>{translate('t7')}</b> <span>{translate('t7t')}</span></p>
        <p><b>{translate('t8')}</b> <span>{translate('t8t')}</span></p>
        <p><b>{translate('t9')}</b> <span>{translate('t9t')}</span></p>
        <p><b>{translate('t10')}</b> <span>{translate('t10t')}</span></p>
        <p><b>{translate('t11')}</b> <span>{translate('t11t')}</span></p>
        <div className="update">
          <span>{translate('lastUpdateTt')}</span>
        </div>
      </section>
    </TermsWrapper>
  )
}

export default Terms