import React, { Component, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { viewingRoomExhibitions } from './viewingRoomExhibitionsJson'
import { exhibitions } from './exhibitionsJson'
import ExhibitionsList from './ExhibitionsList'
import Exhibition from './Exhibition'
import Catalogue from '../Catalogue/Catalogue'

class ExhibitionsRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/exhibitions" component={ ExhibitionsList }  />
        {
          exhibitions.map( show => (
            <Route
              exact path={`/exhibitions/${show.showRoute}`}
              render={ props => <Exhibition {...this.props} show={show} /> } 
            /> 
          ) )
        }
        {
          viewingRoomExhibitions.map( show => (
            <Route
              exact path={`${show.showRoute}`}
              render={ props => <Catalogue /> } 
            /> 
          ) )
        }
      </Switch>
    )
  }
}

export default ExhibitionsRoutes