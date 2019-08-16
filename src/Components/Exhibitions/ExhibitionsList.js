import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { exhibitions } from './exhibitionsJson'
import { I18nContext } from "../../i18n"

function ExhibitionsList (props) {
  const { translate } = useContext(I18nContext)
  return (
    <div>
      {
        exhibitions.map( show => (
          <Link to={`exhibitions/${show.showRoute}`}>
            <span>{show.artist}: {show.showName}</span>
            <span>{translate(show.showDate)}</span>
          </Link>
        ))
      }
    </div>
  )
}

export default ExhibitionsList