import React from "react"
import styled from 'styled-components'
import Back from "../Back/Back"


const ArtistWrapper = styled.section`
  text-align: left;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 300;
    padding-bottom: 6px;
  }

  img {
    max-width: 700px;

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
      <Back position="absolute" route="/artists" bottom />
    </ArtistWrapper>
  )
}

export default Artist;