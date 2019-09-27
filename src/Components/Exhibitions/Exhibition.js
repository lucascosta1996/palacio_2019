import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Slide from '../Slide/Slide'
import ExhibitionName from './ExhibitionName';
import { isMobile } from '../../helpers/helpers'
import { I18nContext } from '../../i18n';

const ExhibitionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 800px;
  padding-top: 100px;
  position: relative;

  @media ( max-width: 520px ) {
    padding: 100px 30px 0;
    max-width: 500px;
  }

  .slideWrapper {
    align-self: center;
  }
`

function Exhibition (props) {
  
  const { translate } = useContext(I18nContext)
  const firstParagraph = useRef()
  const secondParagraph = useRef()
  const thirdParagraph = useRef()
  const fourthParagraph = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
    firstParagraph.current.innerHTML = firstParagraph.current.innerHTML
    .replace(/Contato Visual/g, `<i>Contato Visual</i>`)
    .replace(/\(1\)/g, `<i>(1)</i>` )
    .replace(/\(2\)/g, `<i>(2)</i>` )
    .replace(/Autorretratos/g, `<i>Autorretratos</i>`)
    secondParagraph.current.innerHTML = secondParagraph.current.innerHTML
    .replace(/Contato Visual/g, `<i>Contato Visual</i>`)
    .replace(/Entre o Céu e o Oceano/g, `<i>Entre o Céu e o Oceano</i>`)
    .replace(/Dunas, Torre Eólica, Soterramento/g, `<i>Dunas, Torre Eólica, Soterramento</i>`)
    .replace(/O Regime dos Ventos/g, `<i>O Regime dos Ventos</i>`)
    .replace(/Terrestre /g, `<i>Terrestre </i>`)
    thirdParagraph.current.innerHTML = thirdParagraph.current.innerHTML
    .replace(/Estudo para Contato Visual/g, `<i>Estudo para Contato Visual</i>`)
    .replace(/Contato Visual/g, `<i>Contato Visual</i>`)
    .replace(/\(1\)/g, `<i>(1)</i>` )
    .replace(/\(2\)/g, `<i>(2)</i>` )
  })

  return (
    <ExhibitionWrapper>
      <ExhibitionName
        padding="5px"
        show={props.show}
      />
      <div className="slideWrapper">
        <Slide exhibition width={isMobile() ? 300 : 800} slides={props.show.slide} />
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
        <p className="text__pressRelease">
          <a href={ `https://palacio.xyz/exhibitions/${props.show.pressRelase}` }>
            {translate('pressRelease')}
          </a>
        </p>
      </section>
    </ExhibitionWrapper>
  )
}

export default Exhibition