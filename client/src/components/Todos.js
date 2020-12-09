import React from 'react';
import TodoItem from "./TodoItem"
import PropTypes from 'prop-types';
import '../App.css';
import { gql, useQuery } from '@apollo/client';

const getTodosQuery = gql`
    {
        todos {
            _id
            title
            completed
            priority
        }
    }
`;

export default function Todos() {
    const { loading, error, data } = useQuery(getTodosQuery);

    console.log(data);
    if (loading) {
        return(
            
        )
    }
    return (
        data.todos.sort((a,b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0)).map((todo) => (<TodoItem key = {todo.id} delTodo = { this.props.delTodo } todo = {todo} markComplete = { this.props.markComplete } className = "back"/>)
        )
    )
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
