import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    let input;

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.addTodo(input.value)
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default TodoInput;
