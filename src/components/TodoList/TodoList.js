import React, { Component } from 'react';

import TodoContainer from '../../containers/TodoContainer/TodoContainer';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todoIds.map(todoId => (
          <TodoContainer key={todoId} todoId={todoId} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
