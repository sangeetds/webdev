import React from 'react';
import TodoItem from "./TodoItem";
import '../App.css';

class Todos extends React.Component {
    render() {
        if (!this.props.todo) {
            return(
                <> Loading </>
            )
        }

        return (
            this.props.todo
                .slice()
                .sort((a,b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0))
                .map((todo) => (<TodoItem key = { todo._id } delTodo = { this.props.delTodo } todo = { todo } markComplete = { this.props.markComplete } className = "back"/>))
        )
    }
}

export default Todos;
