import React, { Component } from 'react'
import { Button, Col, Row, FormControl, InputGroup } from 'react-bootstrap'

export default class TaskInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            complete: false,
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState({
            name: '',
            complete: false,
        })
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    onCompleteChange = (e) => {
        this.setState({
            complete: e.target.checked
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder='Add a task'
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" type="submit">Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </form >
        )
    }
}


