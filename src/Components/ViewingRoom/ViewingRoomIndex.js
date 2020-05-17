import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { I18nContext } from '../../i18n';

const ViewingRoomIndexWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  position: relative;

  @media ( max-width: 1024px ) {
    flex-direction: column;
    padding-bottom: 100px;
  }

  .exhibition {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 120px;
    text-decoration: none;
    transition: all .3s ease;

    @media ( max-width: 1024px ) {
      padding-top: 150px;

      &:last-child {
        padding-bottom: 150px;
      }
    }

    &:hover {
      opacity: .7;
    }

    .imageWrapper {
      @media ( max-width: 1024px ) {
        text-align: center;
      }

      img {
        max-width: 600px;

        @media ( max-width: 1024px ) {
          margin: 0 auto;
          width: 90%;
        }
      }
    }

    .marginRight {
      margin-right: 5px;
    }

    .infosCurrentEx {
      display: flex;
      align-self: flex-start;

      @media ( max-width: 1024px ) {
        align-self: center;
      }

      span {
        color: #000;
        display: block;
        font-size: 13px;
        padding: 5px 0;
        text-decoration: none;
      }
    }
  }
`

const OnlineVRLogo = styled.span`
  font-size: 13px;
  font-weight: 500;
  position: absolute;
  right: 0;
  top: 80px;

  @media ( max-width: 1024px ) {
    right: 18px;
    top: 50px;
  }
`

function ViewingRoomIndex () {
  const { translate } = useContext(I18nContext)

  return (
    <ViewingRoomIndexWrapper>
      <OnlineVRLogo>Online Viewing Room</OnlineVRLogo>
      <Link
        className="exhibition"
        to="/online-viewing-room/estadio"
      >
        <div className="imageWrapper">
          <img
            alt="Galeria Palácio - Estádio - Emerson da Silva"
            src={ require( `../../assets/index/Emerson-da-Silva-Estádio-2020-Galeria-Palácio-All-rights-reserved.jpg` ) }
          />
        </div>
        <div className="infosCurrentEx">
          <span className="marginRight">
            Emerson da Silva, <i>Estádio</i>,
          </span>
          <span>
            {translate('estadioDate')}
          </span>
        </div>
      </Link>
      <Link
        className="exhibition"
        to="/online-viewing-room/selected-works"
      >
        <div className="imageWrapper">
          <img alt="Galeria Palácio current exhibition - Contato visual, 2019 - Chiaki Mihara" src={ require( `../../assets/exhibitions/autoretratos/Autorretratos-2018-Chiaki-Mihara-Installation-View-Photo-Galeria-Palácio-(4).jpg` ) } />
        </div>
        <div className="infosCurrentEx">
          <span className="marginRight">
            <i>Selected Works</i>,
          </span>
          <span>
            {translate('selectedWorksDate')}
          </span>
        </div>
      </Link>
    </ViewingRoomIndexWrapper>
  )
}

export default ViewingRoomIndex;