import React from 'react';
import './App.css';
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
    let location = Number(e.target.id);
    let newTodos = { ...this.state.todos };
    newTodos[location].complete = !newTodos[location].complete;
    this.setState({ newTodos })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Row>
            <Col md={6}>
              <TodoForm onFormSubmit={this.onFormSubmit} />
            </Col>
            <Col md={6}>
              <ul>
                {this.state.todos.map((todo, index) => {
                  return (
                    <li>{(todo.complete) ? (<strike>{todo.name}</strike>) : (<div>{todo.name}<Button id={index} onClick={this.handleClick}>X</Button></div>)
                    }</li>
                  )
                })
                }
              </ul>
            </Col>
          </Row>
        </header>
      </div >
    );
  }

}

export default App;
