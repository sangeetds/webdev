import React, { Component } from 'react';
import TodoItem from "./TodoItem"
import PropTypes from 'prop-types';
import '../App.css';

class Todos extends Component {

    render() {
        return this.props.todos.sort((a,b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0)).map((todo) => (
            <TodoItem key = {todo.id} delTodo = { this.props.delTodo } todo = {todo} markComplete = { this.props.markComplete } className = "back"/>
        ))
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
