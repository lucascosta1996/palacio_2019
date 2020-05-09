import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Item from './Item'
import ImageCatalogue from './ImageCatalogue'
import { selectedWorks } from './selectedWorks'
import ViewingRoomIndex from '../ViewingRoom/ViewingRoomIndex'
import { viewingRoomExhibitions } from '../Exhibitions/viewingRoomExhibitionsJson'
import { estadioWorks } from '../ViewingRoom/estadioWorks'

class Routes extends Component {
  render() {
    
    return (
      <Switch>
        <Route exact path="/online-viewing-room" component={ ViewingRoomIndex }  />
        {
          selectedWorks.map( item => (
            <Route
              exact path={`/online-viewing-room/selected-works/${item.route}`}
              render={ props => <Item {...this.props} item={item} /> } 
            /> 
          ) )
        }
        {
          viewingRoomExhibitions.map( show => (
            <Route
              exact path={`${show.showRoute}`}
              render={ props => <ImageCatalogue {...this.props} show={show} /> } 
            /> 
          ) )
        }
        {
          estadioWorks.map( item => (
            <Route
              exact path={`/online-viewing-room/estadio/${item.route}`}
              render={ props => <Item {...this.props} item={item} /> } 
            /> 
          ) )
        }
      </Switch>
    )
  }
}

export default Routes