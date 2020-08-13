import React, { Component } from 'react';
import './details.css';

export default class Details extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTodo: this.props.selectedTodo, //To show selected todo
      //isShowTodoDetails: false //To show todo
    }
  }

  showTodo(todo) {
    this.setState({ selectedTodo: todo }); // set selected todo in state
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedTodo !== prevProps.selectedTodo) // Check if it's a new todo
    {
      this.setState({ selectedTodo: this.props.selectedTodo }); // Update the state
    }
  }

  render() {
    return (
      this.props.todosList.length > 0 ?
        <table className="details">
          <tbody>
            <tr>
              <th>Details - {this.props.selectedUser}</th>
            </tr>
            {

              <>
                <tr>
                  <td><label className="title">Id -</label> {this.state.selectedTodo.id || this.props.selectedTodo.id}</td>
                </tr>
                <tr>
                  <td><label className="title">Title -</label> {this.state.selectedTodo.title || this.props.selectedTodo.title}</td>
                </tr>
                <tr>
                  <td><label className="title">Status -</label> {this.state.selectedTodo.completed || this.props.selectedTodo.completed ? <label> Completed</label> : <label> Incomplete</label>}</td>
                </tr>
                <tr>
                  <td><label className="title">Suggestion:-</label></td>
                </tr>
              </>

            }
            {
              this.props.todosList.map((todo, index) =>
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td className="action" onClick={() => this.showTodo(todo)}>View</td>
                </tr>
              )
            }
          </tbody>
        </table> :
        <div>
          Selected User does not have any todo list.
                </div>
    )
  }
}
