import { connect } from 'react-redux';

import * as todosModule from '../../redux/modules/todos';
import TodoList from '../../components/TodoList/TodoList';
import { getVisibleTodos } from '../../redux/selectors';

const mapStateToProps = (state, props) => {
  return {
    todos: getVisibleTodos(state)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  onTodoClick: id => {
    dispatch(todosModule.toggleTodo(id))
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
