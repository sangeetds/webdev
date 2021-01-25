import React from 'react';
import TodoItem from "./TodoItem";
import '../App.css';

export default function Todos(props) {
        if (!props.todo) {
            return(
                <> Loading </>
            )
        }
        console.log(props.todo);
        if (props.loading) {
            return(
                <> Loading </>
            )
        }
        console.log(props.loading)

        const todos = props.todo.todos
        const sortedTodos = todos.slice().sort((a,b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0));
        return (
                sortedTodos
                .map((todo) => (<TodoItem key = { todo._id } delTodo = { props.delTodo } todo = { todo } markComplete = { props.markComplete } className = "back"/>))
        )
}
