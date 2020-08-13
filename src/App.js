import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos/todos';
import Details from './components/details/details'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [], //To store the todos
      isLoadingTodos: true, // To show loading message
      selectedUserTodos: [], //To store selected user todo
      selectedUserName: '', //To store the selected user name
      isUserLoading: false,
      selectedTodo: ''
    }
  }

  showDetails = (selectedTodo) => {
    //check if we have a userId
    if (selectedTodo.userId) {
      //Filtering the todos list on the basis of userId
      let filteredTodos = this.state.todos.filter(todo => todo.userId == selectedTodo.userId);
      this.setState({ selectedUserTodos: filteredTodos, selectedTodo: selectedTodo }); //save the filter data to state
      let url = `https://jsonplaceholder.typicode.com/users/${selectedTodo.userId}`
      fetch(url)
        .then(res => res.json()) //parse the response
        .then(result => {
          this.setState({ selectedUserName: result.name, isUserLoading: true }); //set data to our state
        });
    }
  }

  //Sorting the todos list
  sortTodos = () => {
    this.setState({ todo: this.state.todos.reverse() })
  }

  componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then(res => res.json()) //parse the response
      .then(results => {
        this.setState({ todos: results, isLoadingTodos: false }); //set data to our state
      });
  }

  render() {
    return (
      <div className="container">
        <Todos todosList={this.state.todos} showDetails={this.showDetails} sortTodos={this.sortTodos} />
        {
          this.state.isUserLoading ?
            <Details selectedTodo={this.state.selectedTodo} todosList={this.state.selectedUserTodos} selectedUser={this.state.selectedUserName} />
            : null
        }
      </div>
    )
  }
}
