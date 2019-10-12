import React, { useState } from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ImageWrapper = styled.div`
  .hidden {
    display: none;
  }

  .loading {
    background: #d1d1d1;
    height: 196px;
    margin-bottom: 20px;
    opacity: 0.4;
    position: relative;
    width: 350px;
  }
`

function Image( props ) {
  const [ imageLoaded, setImageLoaded ] = useState( false )

  const Image = ({ src }) => (
    <LazyLoadImage
      className={!imageLoaded ? "hidden" : "" }
      effect="blur"
      src={src}
      visibleByDefault={true}
      onLoad={ () => setImageLoaded( true ) }
    />
  )

  return (
    <ImageWrapper>
      <Image src={ props.coverImage } />
      {
        !imageLoaded && (
          <div className="loading" />
        )
      }
    </ImageWrapper>
  )
}

export default Image