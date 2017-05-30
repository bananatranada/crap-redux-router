import { connect } from 'react-redux';

import * as todosModule from '../../redux/modules/todos';
import TodoInput from '../../components/TodoInput/TodoInput';

const mapStateToProps = (dispatch, props) => ({

})

const mapDispatchToProps = (dispatch, props) => ({
  addTodo: text => {
    dispatch(todosModule.addTodo(text))
  }
})

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput)

export default AddTodo;
