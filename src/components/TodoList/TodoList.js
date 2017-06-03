import React, { Component } from 'react';

import Todo from '../Todo/Todo';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.handleTodoToggle(todo.id, todo.completed)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
