import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import Todo from '../../components/Todo/Todo';

function makeMapStateToProps() {
  const getVisibleTodo = selectors.makeGetVisibleTodo();
  const mapStateToProps = (state, props) => {
    return {
      todo: getVisibleTodo(state, props),
    };
  };
  return mapStateToProps;
}

const mapDispatchToProps = (dispatch, props) => ({
  handleTodoToggle: (id, completed) => {
    dispatch(actions.todosToggleRequest(id, completed));
  },
});

const TodoContainer = connect(makeMapStateToProps, mapDispatchToProps)(Todo);

export default TodoContainer;
