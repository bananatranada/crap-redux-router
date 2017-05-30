import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import routes from '../../routes'

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            {this.props.children}
            {routes(this.props.store)}
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
