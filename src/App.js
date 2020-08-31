import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';

class App extends Component {
    state = {
        todos: [
            {
                title: "Take out the trash",
                id: 1,
                completed: false
            },
            {
                title: "Dinner",
                id: 2,
                completed: false
            },
            {
                title: "Dog walk",
                id: 3,
                completed: false
            }
        ]
    }

    markComplete = (id) => {
        this.setState( { todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        } ) } );
    }

    delTodo = (id) => {
        this.setState( { todos: [...this.state.todos.filter((todo) => todo.id !== id )] })
    }

    render() {
        console.log(this.state.todos)
        return (
            <div className = "div">
                <Header />
                <AddToDo />
                <Todos todos = { this.state.todos } delTodo = { this.delTodo } markComplete = { this.markComplete }/>
            </div>
        )
    }
}

export default App;
