import React, {useState} from 'react';
import {connect} from 'react-redux';
import { getAllTodos} from "./store/actions/todoAction"

const App = ({todos, getAllTodos}) => {
  React.useEffect(() => {
    getAllTodos()
  }, [getAllTodos])
  
  return (
    <div className="App">
        <h1>Hello World</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todosList
  }
}

export default connect (mapStateToProps, {getAllTodos}) (App);
