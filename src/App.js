import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import * as actions from './redux/actions';

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch, props) {
  return {};
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <div className="App" />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
