import React, { Component } from 'react';

import Footer from '../../components/Footer/Footer';
import AddTodo from '../../containers/AddTodo/AddTodo';
// import VisibleTodoList from '../../containers/VisibleTodoList/VisibleTodoList';
import TodoListContainer
  from '../../containers/TodoListContainer/TodoListContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        {/*<VisibleTodoList />*/}
        <TodoListContainer />
        <Footer />
      </div>
    );
  }
}

export default Home;
