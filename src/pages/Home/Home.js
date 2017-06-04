import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import AddTodo from '../../containers/AddTodo/AddTodo';
import TodoListContainer
  from '../../containers/TodoListContainer/TodoListContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/asdf">go</Link>
        <AddTodo />
        <TodoListContainer />
        <Footer />
      </div>
    );
  }
}

export default Home;
