import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import TodoList from '../../components/TodoList/TodoList';

function mapStateToProps(state, props) {
  // console.log('TodoListContainer', selectors.getTodosResult(state));
  return {
    todoIds: selectors.getTodosResult(state),
  };
}

function mapDispatchToProps(dispatch, props) {
  return {};
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoList
);

export default TodoListContainer;

// TODO: REMOVE THIS!!
// Use a TodoListContainer and render TodoContainer's passing in an id as props
// Use a selector generator function for each TodoContainer so it can watch its own item
// TIP: Use a unique selector for each component
