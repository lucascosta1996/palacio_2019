import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Item from '../Catalogue/Item'
import { exhibitions } from './exhibitionsJson'
import Exhibitions from './Exhibitions'

class ExhibitionsRoutes extends Component {
  render() {
    
    return (
      <Switch>
        <Route exact path="/exhibitions" component={ Exhibitions }  />
        {
          exhibitions.map( item => (
            <Route
              exact path={`/exhibitions/${item.route}`}
              render={ props => <Item {...this.props} item={item} /> } 
            /> 
          ) )
        }
      </Switch>
    )
  }
}

export default ExhibitionsRoutes