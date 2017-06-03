import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import Todo from '../../components/Todo/Todo';

const mapStateToProps = (state, props) => {
  // use prop's id from TodoList and get the specific todo
  return {
    todo:
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  handleTodoToggle: (id, completed) => {
    dispatch(actions.todosToggleRequest(id, completed));
  },
});

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoContainer;
