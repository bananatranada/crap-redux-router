import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import DevTools from '../DevTools/DevTools'
import routes from '../../routes'

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            {this.props.children}
            {routes(this.props.store)}
            <DevTools />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
