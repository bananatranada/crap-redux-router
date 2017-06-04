import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import Home from '../../pages/Home/Home';

class InitPageHome extends Component {
  componentDidMount() {
    // make sure all the fetches are returned in order to change isLoading to false (also make sure images and other media are loaded
    // when changing page, call unloadPage
    this.props.loadPage();
  }

  render() {
    return <Home />;
  }
}

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
  loadPage: () => dispatch(actions.pageInitHome()),
});

InitPageHome = connect(mapStateToProps, mapDispatchToProps)(InitPageHome);

export default InitPageHome;
