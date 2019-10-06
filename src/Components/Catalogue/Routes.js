import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Item from './Item'
import ImageCatalogue from './ImageCatalogue'
import { collection } from './collection'
import Copyright from '../Copyright/Copyright'

class Routes extends Component {
  render() {
    
    return (
      <Switch>
        <Route exact path="/viewing-room/catalogue" component={ ImageCatalogue }  />}
        {
          collection.map( item => (
            <Route
              exact path={`/viewing-room/catalogue/${item.route}`}
              render={ props => <Item {...this.props} item={item} /> } 
            /> 
          ) )
        }
      </Switch>
    )
  }
}

export default Routes