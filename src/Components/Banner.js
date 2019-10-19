import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BannerWrapper = styled.div`
  background: #000;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;

  a {
    bottom: 0;
    color: #fff;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 38px;
    height: max-content;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    text-decoration: none;
    top: 0;
    transition: all .3s ease;
    width: max-content;

    &:hover {
      color: #c3c3c3;
    }
  }
`

function Banner( props ) {
  return (
    <BannerWrapper>
      <Link to="/home" className="logo">GALERIA PALÁCIO</Link>
    </BannerWrapper>
  )
}

export default Banner