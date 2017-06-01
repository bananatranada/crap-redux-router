import React, { Component } from 'react';

import Footer from '../../components/Footer/Footer';
import AddTodo from '../../containers/AddTodo/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList/VisibleTodoList';

class Home extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default Home;
