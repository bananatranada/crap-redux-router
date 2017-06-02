import React from 'react';

import FilterLink from '../../containers/FilterLink/FilterLink';
import * as actions from '../../redux/actions';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={actions.VISIBILITY_FILTER_STATE_SHOW_ALL}>
      All
    </FilterLink>
    {' '}
    <FilterLink filter={actions.VISIBILITY_FILTER_STATE_SHOW_ACTIVE}>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter={actions.VISIBILITY_FILTER_STATE_SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
