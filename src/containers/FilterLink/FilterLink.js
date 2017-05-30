import { connect } from 'react-redux';

import * as visibilityFilterModule from '../../redux/modules/visibilityFilter'
import Link from '../../components/Link/Link';

const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(visibilityFilterModule.setVisibilityFilter(props.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink;
