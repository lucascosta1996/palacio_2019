import React from 'react'
import styled from 'styled-components'
import Slide from '../Slide/Slide'
import ExhibitionName from './ExhibitionName';
import { isMobile } from '../../helpers/helpers'

const ExhibitionWrapper = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  margin: auto;
  max-width: 600px;
  position: absolute;
  right: 0;
  top: 0;

  .slideWrapper {
    align-self: center;
  }
`

function Exhibition (props) {
  return (
    <ExhibitionWrapper>
      <ExhibitionName
        padding="5px"
        show={props.show}
      />
      <div className="slideWrapper">
        <Slide exhibition width={isMobile() ? 300 : 700} slides={props.show.slide} />
      </div>
    </ExhibitionWrapper>
  )
}

export default Exhibition