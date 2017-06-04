import { connect } from 'react-redux';

import * as selectors from '../../redux/selectors';
import TodoList from '../../components/TodoList/TodoList';

function mapStateToProps(state, props) {
  return {
    todoIds: selectors.todosGetResult(state),
  };
}

function mapDispatchToProps(dispatch, props) {
  return {};
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoList
);

export default TodoListContainer;
