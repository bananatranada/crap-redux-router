import React from 'react';

import FilterLink from '../../containers/FilterLink/FilterLink';
import * as visibilityFilterStates from '../../redux/reducers/visibilityFilter';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={visibilityFilterStates.SHOW_ALL}>All</FilterLink>
    {' '}
    <FilterLink filter={visibilityFilterStates.SHOW_ACTIVE}>Active</FilterLink>
    {' '}
    <FilterLink filter={visibilityFilterStates.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
