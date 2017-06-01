import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import Home from '../../pages/Home/Home';

class InitPageHome extends Component {
  componentDidMount() {
    // make sure all the fetches are returned in order to change isLoading to false (also make sure images and other media are loaded
    // actions.initPageHome();
    this.props.loadPage();
  }

  render() {
    return <Home isPageLoaded={this.props.isPageLoaded} />;
  }
}

const mapStateToProps = (state, props) => ({
  isPageLoaded: state.page.isLoaded,
});

const mapDispatchToProps = (dispatch, props) => ({
  loadPage: () => dispatch(actions.initPageHome()),
});

InitPageHome = connect(mapStateToProps, mapDispatchToProps)(InitPageHome);

export default InitPageHome;
