import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import TodoForm from './components/ToDoForm';
import { Button, Col, Row } from 'react-bootstrap'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'todo item 1',
          complete: false,
        },
        {
          name: 'todo item 2',
          complete: true,
        },
      ]
    }
  }

  onFormSubmit = (data) => {
    this.setState({
      todos: this.state.todos.concat(data)
    })
  }

  crossOff = () => {

  }

  handleClick = (e) => {
    let index = Number(e.target.id);
    let newTodos = { ...this.state.todos };
    newTodos[index].complete = !newTodos[index].complete;
    this.setState({ newTodos })
  }

  deleteItem = (e) => {
    let index = Number(e.target.id);
    // let newTodos = { ...this.state.todos };
    // console.log(newTodos[index])
    let newTodos = this.state.todos.filter((todo => todo.name !== this.state.todos[index].name));
    console.log(newTodos);
    this.setState({ todos: newTodos, newTodos: newTodos })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container bg-light p-5 min-vh-100">
            <Row className="mt-5">
              <Col className="col-6 mx-auto">
                <TodoForm onFormSubmit={this.onFormSubmit} />
              </Col>
            </Row>
            <Row className="">
              <Col className="col-md-6">
                <h2 className="text-center">To Do</h2>
                <hr />
                {this.state.todos.map((todo, index) => {
                  return (
                    <div className="ml-3">{(todo.complete) ? (undefined) :
                      (<div><button className="btn btn-outline-success btn-sm mr-2" id={index} onClick={this.handleClick}>✔️</button>{todo.name}</div>)
                    }</div>
                  )
                })
                }
              </Col>
              <Col className="col-md-6">
                <h2 className="text-center">Done</h2>
                <hr />
                {this.state.todos.map((todo, index) => {
                  return (
                    <div className="ml-3">{(todo.complete) ? (<><button className="btn btn-outline-secondary btn-sm mr-2" id={index} onClick={this.handleClick}>⬅️</button><button className="btn btn-outline-danger btn-sm mr-2" id={index} onClick={this.deleteItem}>❌</button><strike>{todo.name}</strike></>) :
                      (undefined)
                    }</div>
                  )
                })
                }
              </Col>
            </Row>
          </div>
        </header>
      </div >
    );
  }

}

export default App;
