import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li
        onClick={this.props.handleTodoToggle}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
        }}
      >
        {this.props.text}
      </li>
    );
  }
}

export default Todo;
