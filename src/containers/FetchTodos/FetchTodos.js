import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import VisibleTodoList from '../containers/VisibleTodoList/VisibleTodoList';

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
  fetchTodos: () => {
    dispatch(actions.toggleTodo(id));
  },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(
  VisibleTodoList
);

export default VisibleTodoList;
