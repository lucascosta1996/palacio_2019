import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Slide from '../Slide/Slide'
import ExhibitionName from './ExhibitionName'
import { isMobile } from '../../helpers/helpers'
import { I18nContext } from '../../i18n'
import Copyright from '../Copyright/Copyright'

const ExhibitionWrapper = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  flex-direction: column;
  font-weight: 300;
  justify-content: center;
  line-height: 16px;
  margin: auto;
  max-width: 700px;
  position: relative;

  @media ( max-width: 520px ) {
    padding: 0 30px 0;
    max-width: 500px;
  }

  .text {
    font-size: 13px;
    padding-bottom: 60px;
  }

  .pdf {
    font-size: 13px;
    padding-top: 20px;
    
    a {
      color: #000;
      font-weight: 500;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .back {
    position: relative;
  }

  .slideWrapper {
    align-self: center;
    padding-bottom: 40px;
  }

  p {
    ul {
      list-style: none;
      margin-top: 2px;
      padding-left: 0;

      li {
        padding: 5px 0px;
      }
    }
  }
`

const BackWrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 40px;
`

function Exhibition (props) {
  const { translate } = useContext(I18nContext)
  const firstParagraph = useRef()
  const secondParagraph = useRef()
  const thirdParagraph = useRef()
  const fourthParagraph = useRef()
  const fifthParagraph = useRef()
  const sixthParagraph = useRef()
  const seventhParagraph = useRef()
  
  useEffect(() => {
    window.scrollTo(0,0)
    firstParagraph.current.innerHTML = firstParagraph.current.innerHTML
    .replace(/Estudo para Contato Visual/g, `<i>Estudo para Contato Visual</i>`)
    .replace(/Contato Visual \(Azul\)/g, `<i>Contato Visual (Azul)</i>`)
    .replace(/Contato Visual \(Vermelho\)/g, `<i>Contato Visual (Vermelho)</i>`)
    .replace(/Contato Visual/g, `<i>Contato Visual</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    .replace(/Luz, Água e Terra Preta/g, `<i>Luz, Água e Terra Preta</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Paraíso/g, `<i>Paraíso</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/\(1\)/g, `<i>(1)</i>` )
    .replace(/\(2\)/g, `<i>(2)</i>` )
    .replace(/Microparticles/g, `<i>Microparticles</i>`)
    .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    .replace(/Light Particles \(Zoom In\)/g, `<i>Light Particles \(Zoom In\)</i>`)
    .replace(/Light Particles \(Zoom Out\)/g, `<i>Light Particles \(Zoom Out\)</i>`)
    .replace(/Light Particles/g, `<i>Light Particles</i>`)
    .replace(/Flock of Particles Swarming/g, `<i>Flock of Particles Swarming</i>`)
    .replace(/Line of Light/g, `<i>Line of Light</i>`)
    .replace(/ A pesca enquanto atividade humana/g, `<i> A pesca enquanto atividade humana</i>`)
    secondParagraph.current.innerHTML = secondParagraph.current.innerHTML
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Contato Visual \(Azul\)/g, `<i>Contato Visual (Azul)</i>`)
    .replace(/Contato Visual \(Vermelho\)/g, `<i>Contato Visual (Vermelho)</i>`)
    .replace(/Contato Visual/g, `<i>Contato Visual</i>`)
    .replace(/Light Particles \(Zoom In\)/g, `<i>Light Particles \(Zoom In\)</i>`)
    .replace(/Light Particles \(Zoom Out\)/g, `<i>Light Particles \(Zoom Out\)</i>`)
    .replace(/Light Particles/g, `<i>Light Particles</i>`)
    .replace(/Flock of Particles Swarming/g, `<i>Flock of Particles Swarming</i>`)
    .replace(/Microparticles/g, `<i>Microparticles</i>`)
    .replace(/Paraíso/g, `<i>Paraíso</i>`)
    .replace(/Terrestre/g, `<i>Terrestre</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    .replace(/Entre o Céu e o Oceano/g, `<i>Entre o Céu e o Oceano</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Terrestre /g, `<i>Terrestre </i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    thirdParagraph.current.innerHTML = thirdParagraph.current.innerHTML
    .replace(/Superfície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Superf\ície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Light Particles \(Zoom In\)/g, `<i>Light Particles \(Zoom In\)</i>`)
    .replace(/Light Particles \(Zoom Out\)/g, `<i>Light Particles \(Zoom Out\)</i>`)
    .replace(/Light Particles/g, `<i>Light Particles</i>`)
    .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Paraíso/g, `<i>Paraíso</i>`)
    .replace(/Terreno/g, `<i>Terreno</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/Flock of Particles Swarming/g, `<i>Flock of Particles Swarming</i>`)
    .replace(/Microparticles/g, `<i>Microparticles</i>`)
    .replace(/Espécies do Litoral Sul Brasileiro/g, `<i>Espécies do Litoral Sul Brasileiro</i>`)
    .replace(/Entre o Céu e o Oceano/g, `<i>Entre o Céu e o Oceano</i>`)
    .replace(/Line of Light/g, `<i>Line of Light</i>`)
    .replace(/Estudo para Contato Visual/g, `<i>Estudo para Contato Visual</i>`)
    .replace(/Contato Visual \(Vermelho\)/g, `<i>Contato Visual (Vermelho)</i>`)
    .replace(/Contato Visual \(Azul\)/g, `<i>Contato Visual (Azul)</i>`)
    .replace(/Contato Visual/g, `<i>Contato Visual</i>`)
    .replace(/Mata Atlântica/g, `<i>Mata Atlântica</i>`)
    .replace(/Terrestre/g, `<i>Terrestre</i>`)
    .replace(/Alface Lisa/g, `<i>Alface Lisa</i>`)
    fourthParagraph.current.innerHTML = fourthParagraph.current.innerHTML
    .replace(/Dunas, Torre Eólica, Soterramento/g, `<i>Dunas, Torre Eólica, Soterramento</i>`)
    .replace(/Superfície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Superf\ície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Contato Visual/g, `<i>Contato Visual</i>`)
    .replace(/Light Particles VR/g, `<i>Light Particles VR</i>`)
    .replace(/Light Particles \(Zoom In\)/g, `<i>Light Particles \(Zoom In\)</i>`)
    .replace(/Light Particles \(Zoom Out\)/g, `<i>Light Particles \(Zoom Out\)</i>`)
    .replace(/Light Particles/g, `<i>Light Particles</i>`)
    .replace(/Superfície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Superf\ície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Visão Aérea de Mundo Aberto/g, `<i>Visão Aérea de Mundo Aberto</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/Flock of Particles Swarming/g, `<i>Flock of Particles Swarming</i>`)
    .replace(/Line of Light/g, `<i>Line of Light</i>`)
    .replace(/Microparticles/g, `<i>Microparticles</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Paraíso/g, `<i>Paraíso</i>`)
    .replace(/Mata Atlântica \(Digital\)/g, `<i>Mata Atlântica (Digital)</i>`)
    .replace(/Mata Atlântica/g, `<i>Mata Atlântica</i>`)
    .replace(/Terrestre/g, `<i>Terrestre</i>`)
    .replace(/Estudo para Contato Visual/g, `<i>Estudo para Contato Visual</i>`)
    .replace(/Contato Visual \(Azul\)/g, `<i>Contato Visual (Azul)</i>`)
    .replace(/Contato Visual \(Vermelho\)/g, `<i>Contato Visual (Vermelho)</i>`)
    .replace(/Luz, Água e Terra Preta/g, `<i>Luz, Água e Terra Preta</i>`)
    .replace(/Arraia/g, `<i>Arraia</i>`)
    .replace(/Entre o Céu e o Oceano/g, `<i>Entre o Céu e o Oceano</i>`)
    .replace(/Papa Terra/g, `<i>Papa Terra</i>`)
    .replace(/Terreno/g, `<i>Terreno</i>`)
    fifthParagraph.current.innerHTML = fifthParagraph.current.innerHTML
    .replace(/Parque Eólico Litorâneo/g, `<i>Parque Eólico Litorâneo</i>`)
    .replace(/Light Particles/g, `<i>Light Particles</i>`)
    .replace(/Line of Light/g, `<i>Line of Light</i>`)
    .replace(/Flock of Particles Swarming/g, `<i>Flock of Particles Swarming</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/Luz, Água e Terra Preta/g, `<i>Luz, Água e Terra Preta</i>`)
    .replace(/Terrestre/g, `<i>Terrestre</i>`)
    .replace(/Contato Visual \(Azul\)/g, `<i>Contato Visual (Azul)</i>`)
    .replace(/Contato Visual \(Vermelho\)/g, `<i>Contato Visual (Vermelho)</i>`)
    .replace(/Estudo para Contato Visual/g, `<i>Estudo para Contato Visual</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Incidência de luz em um ambiente virtual/g, `<i>Incidência de luz em um ambiente virtual</i>`)
    sixthParagraph.current.innerHTML = sixthParagraph.current.innerHTML
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Superfície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/Line of Light/g, `<i>Line of Light</i>`)
  })

  return (
    <BackWrapper>
      <ExhibitionWrapper>
        <ExhibitionName
          padding="5px"
          show={props.show}
        />
        <div className="slideWrapper">
          <Slide exhibition width={isMobile() ? 300 : 700} slides={props.show.slide} />
        </div>
        <section className="text">
          <p className="text__paragraph" ref={ firstParagraph }>
            {translate(props.show.paragraph1)}
          </p>
          <p className="text__paragraph" ref={ secondParagraph }>
            {translate(props.show.paragraph2)}
          </p>
          <p className="text__paragraph" ref={ thirdParagraph }>
            {translate(props.show.paragraph3)}
          </p>
          <p className="text__paragraph" ref={ fourthParagraph }>
            {translate(props.show.paragraph4)}
          </p>
          <p className="text__paragraph" ref={ fifthParagraph }>
            {translate(props.show.paragraph5)}
          </p>
          <p className="text__paragraph" ref={ sixthParagraph }>
            {translate(props.show.paragraph6)}
          </p>
          <p className="text__paragraph" ref={ seventhParagraph }>
            {translate(props.show.paragraph7)}
          </p>
          <p className="pdf">
            <a href={ require( `../../assets/downloads/${translate(props.show.pdf)}` ) } target="_blank">
              {translate('pdf')}
            </a>
          </p>
        </section>
      </ExhibitionWrapper>
      <Copyright back route="/exhibitions"/>
    </BackWrapper>
  )
}

export default Exhibition