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
        color: #4547ee;
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
    .replace(/Contato Visual/g, `<i>Contato Visual</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    .replace(/Luz, Água e Terra Preta/g, `<i>Luz, Água e Terra Preta</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Paraíso Tropical/g, `<i>Paraíso Tropical</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/\(1\)/g, `<i>(1)</i>` )
    .replace(/\(2\)/g, `<i>(2)</i>` )
    .replace(/Micropartículas/g, `<i>Micropartículas</i>`)
    .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    .replace(/Partículas de Luz 1/g, `<i>Partículas de Luz 1</i>`)
    .replace(/Partículas de Luz 2/g, `<i>Partículas de Luz 2</i>`)
    .replace(/Partículas de Luz/g, `<i>Partículas de Luz</i>`)
    .replace(/Partículas/g, `<i>Partículas</i>`)
    .replace(/1 minuto/g, `<i>1 minuto</i>`)
    .replace(/ A pesca enquanto atividade humana/g, `<i> A pesca enquanto atividade humana</i>`)
    secondParagraph.current.innerHTML = secondParagraph.current.innerHTML
    .replace(/Contato Visual \(2\)/g, `<i>Contato Visual (2)</i>`)
    .replace(/Contato Visual \(1\)/g, `<i>Contato Visual (1)</i>`)
    .replace(/Partículas de Luz 1/g, `<i>Partículas de Luz 1</i>`)
    .replace(/Partículas de Luz 2/g, `<i>Partículas de Luz 2</i>`)
    .replace(/Partículas de Luz/g, `<i>Partículas de Luz</i>`)
    .replace(/Partículas/g, `<i>Partículas</i>`)
    .replace(/Micropartículas/g, `<i>Micropartículas</i>`)
    .replace(/Paraíso Tropical/g, `<i>Paraíso Tropical</i>`)
    .replace(/Terrestre/g, `<i>Terrestre</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    .replace(/Entre o Céu e o Oceano/g, `<i>Entre o Céu e o Oceano</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Terrestre /g, `<i>Terrestre </i>`)
    thirdParagraph.current.innerHTML = thirdParagraph.current.innerHTML
    .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    .replace(/Dunas, Torre Eólica, Soterramento/g, `<i>Dunas, Torre Eólica, Soterramento</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Estudo para Contato Visual/g, `<i>Estudo para Contato Visual</i>`)
    .replace(/Paraíso Tropical/g, `<i>Paraíso Tropical</i>`)
    .replace(/Terreno/g, `<i>Terreno</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/Partículas/g, `<i>Partículas</i>`)
    .replace(/Micropartículas/g, `<i>Micropartículas</i>`)
    .replace(/Espécies do Litoral Sul Brasileiro/g, `<i>Espécies do Litoral Sul Brasileiro</i>`)
    .replace(/Entre o Céu e o Oceano/g, `<i>Entre o Céu e o Oceano</i>`)
    .replace(/1 minuto/g, `<i>1 minuto</i>`)
    .replace(/Contato Visual \(2\)/g, `<i>Contato Visual (2)</i>`)
    .replace(/Contato Visual \(1\)/g, `<i>Contato Visual (1)</i>`)
    .replace(/Mata Atlântica/g, `<i>Mata Atlântica</i>`)
    fourthParagraph.current.innerHTML = fourthParagraph.current.innerHTML
    .replace(/Partículas de Luz 1/g, `<i>Partículas de Luz 1</i>`)
    .replace(/Partículas de Luz 2/g, `<i>Partículas de Luz 2</i>`)
    .replace(/Partículas de Luz/g, `<i>Partículas de Luz</i>`)
    .replace(/Partículas/g, `<i>Partículas</i>`)
    .replace(/1 minuto/g, `<i>1 minuto</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Paraíso Tropical/g, `<i>Paraíso Tropical</i>`)
    .replace(/Mata Atlântica \(Digital\)/g, `<i>Mata Atlântica (Digital)</i>`)
    .replace(/Mata Atlântica/g, `<i>Mata Atlântica</i>`)
    .replace(/Terrestre/g, `<i>Terrestre</i>`)
    .replace(/Estudo para Contato Visual/g, `<i>Estudo para Contato Visual</i>`)
    .replace(/Contato Visual \(1\)/g, `<i>Contato Visual (1)</i>`)
    .replace(/Contato Visual \(2\)/g, `<i>Contato Visual (2)</i>`)
    .replace(/Luz, Água e Terra Preta/g, `<i>Luz, Água e Terra Preta</i>`)
    .replace(/Pré-Consumo, Arraia/g, `<i>Pré-Consumo, Arraia</i>`)
    .replace(/Entre o Céu e o Oceano/g, `<i>Entre o Céu e o Oceano</i>`)
    .replace(/Pré-Consumo, Papa Terra/g, `<i>Pré-Consumo, Papa Terra</i>`)
    .replace(/Pré-Consumo, Alface Lisa/g, `<i>Pré-Consumo, Alface Lisa</i>`)
    .replace(/Parque Eólico Litorâneo/g, `<i>Parque Eólico Litorâneo</i>`)
    fifthParagraph.current.innerHTML = fifthParagraph.current.innerHTML
    .replace(/Superfície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Superf\ície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Partículas de Luz \(VR\)/g, `<i>Partículas de Luz (VR)</i>`)
    .replace(/Partículas de Luz 3/g, `<i>Partículas de Luz 3</i>`)
    .replace(/Terreno/g, `<i>Terreno</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
    .replace(/Luz, Água e Terra Preta/g, `<i>Luz, Água e Terra Preta</i>`)
    .replace(/Terrestre/g, `<i>Terrestre</i>`)
    sixthParagraph.current.innerHTML = sixthParagraph.current.innerHTML
    .replace(/Incidência de luz em um ambiente virtual/g, `<i>Incidência de luz em um ambiente virtual</i>`)
    .replace(/Um lugar para estar/g, `<i>Um lugar para estar</i>`)
    .replace(/Visão Aérea de Mundo Aberto/g, `<i>Visão Aérea de Mundo Aberto</i>`)
    .replace(/Superfície de Mundo Aberto/g, `<i>Superfície de Mundo Aberto</i>`)
    .replace(/Mundo Aberto/g, `<i>Mundo Aberto</i>`)
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
            {
              props.show.paragraph3 !== 'arrayTerra' && (
                translate(props.show.paragraph3)
              )
            }
          </p>
          <p className="text_paragraph">
            {
              props.show.paragraph3 === 'arrayTerra' && (
                <ul>
                  <li>{translate('terrap3item1')}</li>
                  <li>{translate('terrap3item2')}</li>
                  <li>{translate('terrap3item3')}</li>
                  <li>{translate('terrap3item4')}</li>
                </ul>
              )
            }
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