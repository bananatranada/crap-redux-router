import React, { Component } from 'react';

import FilterLink from '../../containers/FilterLink/FilterLink';
import * as visibilityFilterModule from '../../redux/modules/visibilityFilter';

class Footer extends Component {
  render() {
    return (
      <p>
        Show:
        {" "}
        <FilterLink filter={visibilityFilterModule.SHOW_ALL}>All</FilterLink>
        {" "}
        <FilterLink filter={visibilityFilterModule.SHOW_ACTIVE}>Active</FilterLink>
        {" "}
        <FilterLink filter={visibilityFilterModule.SHOW_COMPLETED}>Completed</FilterLink>
      </p>
    )
  }
}

export default Footer;
