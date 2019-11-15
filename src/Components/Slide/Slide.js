import React, { useState } from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import arrow from '../../assets/icons/arrow.png'
import loader from '../../assets/icons/circle-loader.png'

const SlideWrapper = styled.div`
  bottom: 0;
  max-width: ${ props => props.width }px;
  position: relative;
  text-align: right;
  width: 100%;

  .hidden {
    display: none;
  }
  
  img {
    max-width: ${ props => props.width }px;
    width: 100%;

    @media ( max-width: 321px ) {
      max-width: ${props => props.exhibition ? `250px!important` : `300px!important`};
    }
  }

  .index {
    color: #000;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    padding-left: 3px;
    position: relative;
    z-index: 3;
  }

  .active {
    color: #81828F;
  }

  .next,
  .prev {
    cursor: pointer;
    height: 100%;
    position: absolute;
    width: ${ props => props.width / 2 }px;
    top: 0;
  }

  .next {
    right: 0;
  }

  .prev {
    left: 0;
  }

  .hidden {
    display: none;
  }

  .loading {
    background: #d1d1d1;
    height: 394px;
    opacity: 0.4;
    position: relative;
    width: ${ props => props.width }px;

    img {
      animation: Loader-spin infinite 5s linear;
      bottom: 0;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
      max-width: 30px;
    }
  }

  @keyframes Loader-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .leftArrow,
  .rightArrow {
    cursor: pointer;
    height: 15px;
    position: absolute;
    top: 48%;
    width: 15px;
  }

  .rightArrow {
    color: #c3c3c3;
    right: -30px;

    &:hover {
      color: #000;
    }
  }

  .leftArrow {
    color: #c3c3c3;
    left: -30px;

    &:hover {
      color: #000;
    }
  }
`

function Slide (props) {
  const [ active, setActive ] = useState( props.slides[0] )
  const [ previous, setPrevious ] = useState( active.index )
  const [ next, setNext ] = useState( active.index + 1 )
  const [ imageLoaded, setImageLoaded ] = useState( true )

  const updateSlide = ( activeSlide, previousSlide, nextSlide ) => {
    setActive( activeSlide )
    setPrevious( previousSlide )
    setNext( nextSlide )
    setImageLoaded( false )
  }

  const Image = ({ alt, src }) => (
    <LazyLoadImage
      alt={alt}
      className={!imageLoaded ? "hidden" : "" }
      effect="blur"
      src={src}
      visibleByDefault={true}
      onLoad={ () => setImageLoaded(true) }
    />
  )

  const previousDiv = props.slides[ active.index === 0 ? 0 : active.index - 1 ]
  const nextDiv = props.slides[ active.index === props.slides.length - 1 ? props.slides.length - 1 : active.index + 1 ]

  return (
    <SlideWrapper
      width={props.width}
    >
      <Image src={ require( `../../assets/${active.img}`) } alt={ active.alt } onLoad={ () => setImageLoaded(true) } />
      {
        !imageLoaded && (
          <div className="loading">
            <img src={loader} />
          </div>
        )
      }
      <section className={ props.exhibition && `hidden` }>
      {/*
        props.slides.map( ( slide, index ) => {
          const previous = index !== 0 ? index : 0
          const next = index + 1
          return (
            <span
              className={`index ${active.index === index ? `active` : ``}`}
              key={ slide.img }
              onClick={ () => updateSlide( slide, previous, next ) }
            >
              { index + 1 }
            </span>
          )
        } )
      */}
      </section>
      <div
        className="prev"
        onClick={ () => updateSlide( previousDiv, previousDiv.index === 0 ? 0 : previousDiv.index - 1, previousDiv.index + 1 ) }
      />
      <div
        className="next"
        onClick={ () => updateSlide( nextDiv, nextDiv === props.slides.length - 1 ? props.slides.length - 1 : nextDiv + 1, nextDiv.index + 1 ) }
      />
      <i
        className={`fas fa-chevron-left leftArrow ${active.index === 0 ? `hidden` : ''}`}
        onClick={ () => updateSlide( previousDiv, previousDiv.index === 0 ? 0 : previousDiv.index - 1, previousDiv.index + 1 ) }
      ></i>
      <i
        className={`fas fa-chevron-right rightArrow ${active.index === props.slides.length - 1 ? `hidden` : ''}`}
        onClick={ () => updateSlide( nextDiv, nextDiv === props.slides.length - 1 ? props.slides.length - 1 : nextDiv + 1, nextDiv.index + 1 ) }
      ></i>
    </SlideWrapper>
  )
}

export default Slide