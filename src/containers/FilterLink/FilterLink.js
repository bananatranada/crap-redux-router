import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import Link from '../../components/Link/Link';

const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(actions.visibilityFilterSet(props.filter));
  },
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
