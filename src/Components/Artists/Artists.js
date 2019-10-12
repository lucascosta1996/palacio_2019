import React, { useContext, useState } from "react"
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import Artist from './Artist'
import Copyright from '../../Components/Copyright/Copyright'
import detritos from '../../assets/artists/Organismo-Digital-2018-2019-Andrés-Stephanou-Screenshot-(9)-All-Rights-Reserved.png'
import olhos from '../../assets/artists/Contato-Visual-(1)-2018-2019-Chiaki-Mihara-Screenshot-(1)-All-Rights-Reserved.png'
import emerson from '../../assets/artists/O-Regime-dos-Ventos-2018-Emerson-da-Silva-Screenshot-(6)-All-Rights-Reserved.jpg'
import lucasalves from '../../assets/artists/Um-lugar-para-estar-2018-2019-Lucas-Alves-Costa-Screenshot-(3)-All-Rights-Reserved.png'

const ArtistsList = styled.section`
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;

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

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
`

const Artists = props => {
  const artists = [
    {
      name: 'Andrés Stephanou',
      birthDate: '1993',
      artistWork: detritos,
      route: 'andresstephanou'
    },
    {
      name: 'Chiaki Mihara',
      birthDate: '1997',
      artistWork: olhos,
      route: 'chiakimihara'
    },
    {
      name: 'Emerson da Silva',
      birthDate: '1988',
      artistWork: emerson,
      route: 'emersondasilva'
    },
    {
      name: 'Lucas Alves Costa',
      birthDate: '1996',
      artistWork: lucasalves,
      route: 'lucasalvescosta'
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
        <Route exact path="/artists" component={ Artists } />
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
    </ArtistsList>
  )
}

export default Artists;