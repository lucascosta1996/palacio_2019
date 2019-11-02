import React, { useContext, useState } from "react"
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import Artist from './Artist'
import detritos from '../../assets/exhibitions/micro/Micropartículas-2016-2017-Andrés-Stephanou-Installation-View-Galeria-Palácio-(2).jpg'
import luzvivazoomout from '../../assets/exhibitions/luz/Partículas-de-Luz-2-2017-2018-Andrés-Stephanou-Screenshot-(2)-All-Rights-Reserved.png'
import olhos from '../../assets/artists/Autorretratos-2018-Chiaki-Mihara-Installation-View-Photo-Galeria-Palácio-(4).jpg'
import olhoazul from '../../assets/exhibitions/contatoVisual/Contato-Visual-2018-2019-Chiaki-Mihara-Installation-View-Galeria-Palácio-(2).jpg'
import emerson from '../../assets/artists/Entre-o-Céu-e-o-Oceano-2019-Emerson-da-Silva-Installation-View-Galeria-Palácio-(2).jpg'
import ventos from '../../assets/exhibitions/ventos/O-Regime-dos-Ventos-2018-Emerson-da-Silva-Screenshot-(4)-All-Rights-Reserved.jpg'
import lucasalves from '../../assets/artists/Um-lugar-para-estar-2018-2019-Lucas-Alves-Costa-Installation-View-Galeria-Palácio-(1).jpg'
import mundo from '../../assets/catalogue/7- Mundo-Aberto-2017-2018-Lucas-Alves-Costa-Screenshot-(1)-All-Rights-Reserved.png'

const ArtistsList = styled.section`
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 180px;
    text-align: left;
    width: 100%;
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
      route: 'andresstephanou',
      text: 'andresA',
      image: luzvivazoomout,
      work: "andresW"
    },
    {
      name: 'Chiaki Mihara',
      birthDate: '1997',
      artistWork: olhoazul,
      route: 'chiakimihara',
      text: 'chiakiA',
      image: olhos,
      work: "chiakiW"
    },
    {
      name: 'Emerson da Silva',
      birthDate: '1988',
      artistWork: emerson,
      route: 'emersondasilva',
      text: 'emersonA',
      image: ventos,
      work: "emersonW"
    },
    {
      name: 'Lucas Alves Costa',
      birthDate: '1996',
      artistWork: lucasalves,
      route: 'lucasalvescosta',
      text: 'lucasA',
      image: mundo,
      work: "lucasW"
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
          exact path={ `/artists/andresstephanou` }
          render={ props => <Artist {...props} artist={ artists[0] } /> }
        />
        <Route 
          exact path={ `/artists/chiakimihara` }
          render={ props => <Artist {...props} artist={ artists[1] } /> }
        />
        <Route 
          exact path={ `/artists/emersondasilva` }
          render={ props => <Artist {...props} artist={ artists[2] } /> }
        />
        <Route 
          exact path={ `/artists/lucasalvescosta` }
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