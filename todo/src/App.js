import React from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from "./todos.json";
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeTask(index){
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
  }

  render(){
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4" >
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
                <p>{todo.description}</p>
                <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTask.bind(this, i)}>Delete</button>
            </div>
          </div>
        </div>
      );
    });


    return ( 
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="#;" className="text-white">
            Total tasks:
            <span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-4">
              <TodoForm onAddTask={this.handleAddTask} />
          </div>
            <div className="col">
              <div className="row mt-4">
                {todos}
              </div>
            </div>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
