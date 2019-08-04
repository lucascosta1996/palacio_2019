import React from "react"
import styled from 'styled-components'
import '../../assets/artists/detritos.png'

const ArtistWrapper = styled.section`
  text-align: left;

  h2 {
    font-family: 'Roboto', sans-serif;
  }

  img {
    max-width: 600px;
  }
`

const Artist = props => {
  console.log( props )
  return (
    <ArtistWrapper>
      <h2>{ props.artist.name } ({ props.artist.birthDate }, Porto Alegre)</h2>
      <img src={ props.artist.artistWork } />
    </ArtistWrapper>
  )
}

export default Artist;