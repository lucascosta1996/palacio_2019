import React from "react"
import styled from 'styled-components'


const ArtistWrapper = styled.section`
  text-align: left;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
  }

  img {
    max-width: 600px;

    @media ( max-width: 520px ) {
      max-width: 300px;
    }
  }
`

const Artist = props => {
  return (
    <ArtistWrapper>
      <h2>{ props.artist.name } ({ props.artist.birthDate }, Porto Alegre)</h2>
      <img src={ props.artist.artistWork } />
    </ArtistWrapper>
  )
}

export default Artist;