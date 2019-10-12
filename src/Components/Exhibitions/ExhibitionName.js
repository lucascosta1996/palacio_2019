import React, { useContext } from 'react'
import styled from 'styled-components'
import { I18nContext } from '../../i18n/index'

const ExhibitionNameWrapper = styled.div`
  margin-bottom: 40px;
  text-decoration: none;

  .title_exh {
    font-size: 13px;
  }

  .date_exh {
    font-size: 13px;
  }

  span {
    color: #000;
    display: block;
    padding: ${props => props.padding};
    text-align: left;
  }
`

function ExhibitionName (props) {
  const { translate } = useContext(I18nContext)
  return (
    <ExhibitionNameWrapper
      padding={ props.padding }
    >
      <span className="title_exh">{props.show.artist}: <i>{props.show.showName}</i></span>
      <span className="date_exh">{translate(props.show.showDate)}</span>
    </ExhibitionNameWrapper>
  )
}

export default ExhibitionName