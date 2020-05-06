import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Item from './Item'
import ImageCatalogue from './ImageCatalogue'
import { selectedWorks } from './selectedWorks'
import ViewingRoomIndex from '../ViewingRoom/ViewingRoomIndex'

class Routes extends Component {
  render() {
    
    return (
      <Switch>
        <Route exact path="/viewing-room" component={ ViewingRoomIndex }  />
        <Route exact path="/viewing-room/selected-works" component={ ImageCatalogue } />
        <Route exact path="/viewing-room/estadio" component={ ImageCatalogue } />
        {
          selectedWorks.map( item => (
            <Route
              exact path={`/viewing-room/selected-works/${item.route}`}
              render={ props => <Item {...this.props} item={item} /> } 
            /> 
          ) )
        }
      </Switch>
    )
  }
}

export default Routes