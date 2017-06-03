import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import TodoInput from '../../components/TodoInput/TodoInput';

const mapStateToProps = (dispatch, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
  addTodo: text => {
    dispatch(actions.todosAddRequest(text));
  },
});

const AddTodo = connect(mapStateToProps, mapDispatchToProps)(TodoInput);

export default AddTodo;
