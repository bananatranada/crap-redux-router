import React, { Component } from 'react';

class Todo extends Component {
  render() {
    if (!this.props.todo) {
      return null;
    }

    return (
      <li
        onClick={() =>
          this.props.handleTodoToggle(
            this.props.todo.id,
            !this.props.todo.completed
          )}
        style={{
          textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }}
      >
        {this.props.todo.text}
      </li>
    );
  }
}

export default Todo;
