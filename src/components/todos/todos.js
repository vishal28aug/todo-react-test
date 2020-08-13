import React, { Component } from 'react';
import './todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

export default class Todos extends Component {


  render() {
    return (
      this.props.todosList.length > 0 ?
        <table className="todos">
          <tbody>
            <tr>
              <th className="sort action" onClick={() => this.props.sortTodos()}>Id<FontAwesomeIcon icon={faSort} /></th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {
              this.props.todosList.map(todo =>
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? <label>Completed</label> : <label>Incomplete</label>}</td>
                  <td className="action" onClick={() => this.props.showDetails(todo)}>View</td>
                </tr>
              )
            }
          </tbody>
        </table> :
        <div>
          No todos to display.
                </div>
    )
  }
}
