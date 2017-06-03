import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import Todo from '../../components/Todo/Todo';

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
  handleToggleRequest: id => {
    dispatch(actions.todosToggleRequest(id));
  },
});

const EditTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default EditTodo;
