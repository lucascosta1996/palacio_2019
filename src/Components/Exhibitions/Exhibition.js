import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Slide from '../Slide/Slide'
import ExhibitionName from './ExhibitionName';
import { isMobile } from '../../helpers/helpers'
import { I18nContext } from '../../i18n';
import Copyright from '../Copyright/Copyright';
import Back from '../Back/Back';

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
    padding: 100px 30px 0;
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
      text-decoration: none;
    }
  }

  .back {
    position: relative;
  }

  .slideWrapper {
    align-self: center;
    padding-bottom: 20px;
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

  useEffect(() => {
    window.scrollTo(0,0)
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
          <p className="pdf">
            <a href={ `https://palacio.xyz/exhibitions/${props.show.pressRelase}` }>
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