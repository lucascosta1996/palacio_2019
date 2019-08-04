import React, { useContext, useState } from "react"
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import Artist from './Artist'
import detritos from '../../assets/artists/detritos.png'
import olhos from '../../assets/artists/olhos.png'
import emerson from '../../assets/artists/emerson.jpg'
import lucasalves from '../../assets/artists/lucasalves.png'

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
    font-size: 26px;
    font-weight: 500;
    margin: 0;
    text-decoration: none;
    width: auto;
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
      name: 'Chiaki Matsuda',
      birthDate: '1997',
      artistWork: olhos,
      route: 'chiakimatsuda'
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
          exact path={ `/artists/chiakimatsuda` }
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