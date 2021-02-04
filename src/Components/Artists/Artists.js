import React from "react"
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import Artist from './Artist'
import detritos from '../../assets/exhibitions/micro/Chaos-2016-17-Andrés-Stephanou-Installation-View-Galeria-Palácio-(1).jpg'
import darkSmoke from '../../assets/artists/Dark-Smoke-2018-20-Andrés-Stephanou-Screenshot-(1)-All-Rights-Reserved.png'
import olhoazul from '../../assets/exhibitions/contatoVisual/Contato-Visual-2018-2019-Chiaki-Mihara-Installation-View-Galeria-Palácio-(1).jpg'
import emerson from '../../assets/artists/Entre-o-Céu-e-o-Oceano-2019-Emerson-da-Silva-Installation-View-Galeria-Palácio-(2).jpg'
import lucasalves from '../../assets/artists/Um-lugar-para-estar-2018-2019-Lucas-Alves-Costa-Installation-View-Galeria-Palácio-(1).jpg'
import terreno from '../../assets/artists/Terreno-2019-Lucas-Alves-Costa-All-rights-reserved-Galeria-Palácio-(1).jpg'
import olhosvermelhos from '../../assets/artists/Contato-Visual-(2)-2019-Chiaki-Mihara-Screenshot-(1)-All-Rights-Reserved.jpg'
import paraiso from '../../assets/exhibitions/tropical/Paraíso-2017-Lucas-Alves-Costa-Screenshot-(3)-All-Rights-Reserved.png'
import alface from '../../assets/artists/3-Luz-Água-e-Terra-Preta-2017.jpg'
import collectiveMotion from '../../assets/artists/Collective-Motion-2018-19-Andrés-Stephanou-Screenshot-(8)-All-Rights-Reserved.png'
import autorretrato from '../../assets/artists/Autorretratos-2018-Chiaki-Mihara-Installation-View-Galeria-Palácio-(7).jpg'
import pescaria from '../../assets/artists/1-A-pescaria-enquanto-atividade-humana-2019.jpg'
import portraitEmerson from '../../assets/portraits/Emerson-da-Silva-Galeria-Palácio-All-Rights-Reserved.jpg'
import portraitChiaki from '../../assets/portraits/Chiaki-Mihara-Galeria-Palácio-All-Rights-Reserved.jpg'
import portraitAndres from '../../assets/portraits/Andrés-Stephanou-Galeria-Palácio-All-Rights-Reserved.jpg'
import portraitLucas from '../../assets/portraits/Lucas-Alves-Costa-Galeria-Palácio-All-Rights-Reserved.jpg'

const ArtistsList = styled.section`
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 180px;
    text-align: left;
    width: 100%;

    @media (max-width: 520px) {
      padding-top: 124px;
    }
  }

  .artistsList {
    align-items: flex-start;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    text-align: left;
    top: 0;
    width: 200px;

    a {
      color: #000;
      font-family: 'Roboto', sans-serif;
      font-size: 17px;
      font-weight: 300;
      margin: 0;
      padding: 2px 0;
      text-decoration: none;
      transition: .3s all ease;
      width: auto;

      &:hover {
        color: #81828F;
      }
    }

    .active {
      color: #81828F;
    }
  }
`

const Artists = props => {
  const artists = [
    {
      name: 'Andrés Stephanou',
      birthDate: '1993',
      artistWork: detritos,
      route: 'andres-stephanou',
      text1: 'andresA1',
      text2: 'andresA2',
      text3: 'andresA3',
      image: portraitAndres,
      work: "andresW",
      siteUrl: "https://andres-stephanou.com",
      site: "andres-stephanou.com",
      bigImage: darkSmoke,
      bigImage2: collectiveMotion,
      city: 'portoAlegre'
    },
    {
      name: 'Chiaki Mihara',
      birthDate: '1997',
      artistWork: olhoazul,
      route: 'chiaki-mihara',
      text1: 'chiakiA1',
      text2: 'chiakiA2',
      image: portraitChiaki,
      work: "chiakiW",
      siteUrl: "https://chiakimihara.com",
      site: "chiakimihara.com",
      bigImage: autorretrato,
      bigImage2: olhosvermelhos,
      city: 'portoAlegre'
    },
    {
      name: 'Emerson da Silva',
      birthDate: '1988',
      artistWork: emerson,
      route: 'emerson-da-silva',
      text1: 'emersonA1',
      text2: 'emersonA2',
      text3: 'emersonA3',
      image: portraitEmerson,
      work: "emersonW",
      siteUrl: "https://emersondasilva.com",
      site: "emersondasilva.com",
      bigImage: alface,
      bigImage2: pescaria,
      city: 'cidreira'
    },
    {
      name: 'Lucas Alves Costa',
      birthDate: '1996',
      artistWork: lucasalves,
      route: 'lucas-alves-costa',
      text1: 'lucasA1',
      text2: 'lucasA2',
      text3: 'lucasA3',
      image: portraitLucas,
      work: "lucasW",
      siteUrl: "https://lucasalvescosta.com",
      site: "lucasalvescosta.com",
      bigImage: paraiso,
      bigImage2: terreno,
      city: 'portoAlegre'
    }
  ]

  const Artists = () => (
    artists.map( artist => {
      return (
        <Link
          to={ `/artists/${artist.route}` }
          key={ `${artist.name}-link` }
        >
          { artist.name }
        </Link>
      )
     } )
  )

  return (
    <ArtistsList>
      <div className='wrapper'>
        <Route 
          exact path={ `/artists/andres-stephanou` }
          render={ props => <Artist {...props} artist={ artists[0] } /> }
        />
        <Route 
          exact path={ `/artists/chiaki-mihara` }
          render={ props => <Artist {...props} artist={ artists[1] } /> }
        />
        <Route 
          exact path={ `/artists/emerson-da-silva` }
          render={ props => <Artist {...props} artist={ artists[2] } /> }
        />
        <Route 
          exact path={ `/artists/lucas-alves-costa` }
          render={ props => <Artist {...props} artist={ artists[3] } /> }
        />
      </div>
      <div className='artistsList'>
        <Route exact path="/artists" component={ Artists } />
      </div>
    </ArtistsList>
  )
}

export default Artists;