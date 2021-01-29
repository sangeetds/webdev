import React from 'react';
import TodoItem from "./TodoItem";
import '../App.css';

export default function Todos(props) {
        if (!props.todo) {
            return(
                <p> Loading </p>
            )
        }

        if (props.loading) {
            return(
                <p> Loading </p>
            )
        }

        if (props.error) {
            return (
                <p>`Error: ${props.error.message}`</p>
            )
        }

        const todos = props.todo.todos
        const sortedTodos = todos.slice().sort((a,b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0));
        return (
                sortedTodos
                .map((todo) => (<TodoItem key = { todo._id } todo = { todo }
                    deleteTodo = { props.deleteTodo }  markComplete = { props.markComplete }
                    className = "back"/>))
        )
}
