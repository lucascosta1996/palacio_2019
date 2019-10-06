import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/icons/arrow.png'

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

  .leftArrow,
  .rightArrow {
    cursor: pointer;
    height: 15px;
    position: absolute;
    top: 48%;
    width: 15px;
  }

  .rightArrow {
    right: -30px;
  }

  .leftArrow {
    left: -30px;
    transform: rotate(-180deg);
  }
`

function Slide (props) {
  const [ active, setActive ] = useState( props.slides[0] )
  const [ previous, setPrevious ] = useState( active.index )
  const [ next, setNext ] = useState( active.index + 1 )

  const updateSlide = ( activeSlide, previousSlide, nextSlide ) => {
    setActive( activeSlide )
    setPrevious( previousSlide )
    setNext( nextSlide )
  }

  const previousDiv = props.slides[ active.index === 0 ? 0 : active.index - 1 ]
  const nextDiv = props.slides[ active.index === props.slides.length - 1 ? props.slides.length - 1 : active.index + 1 ]

  return (
    <SlideWrapper
      width={props.width}
    >
      <img src={ require( `../../assets/${active.img}` ) } />
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
      <img
        className={ `leftArrow ${active.index === 0 ? `hidden` : ''}` }
        onClick={ () => updateSlide( previousDiv, previousDiv.index === 0 ? 0 : previousDiv.index - 1, previousDiv.index + 1 ) }
        src={ arrow }
      />
      <img
        className={ `rightArrow ${active.index === props.slides.length - 1 ? `hidden` : ''}` }
        onClick={ () => updateSlide( nextDiv, nextDiv === props.slides.length - 1 ? props.slides.length - 1 : nextDiv + 1, nextDiv.index + 1 ) }
        src={ arrow }
      />
    </SlideWrapper>
  )
}

export default Slide