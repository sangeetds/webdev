import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/pages/AboutMe.js';

class App extends Component {

    state = {
        todos: [
            {
                title: "Take out the trash",
                id: 34,
                completed: false,
                priority: 1
            },
            {
                title: "Dinner",
                id: 23,
                completed: false,
                priority: 4
            },
            {
                title: "Dog walk",
                id: 30,
                completed: false,
                priority: 2
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

    addTodo = (title, priority) => {
        const newTodo = {
            id: { random },
            title,
            completed: false,
            priority
        }
        this.setState( { todos: [...this.state.todos, newTodo] })
        random = random + 1;
    }

    render() {
        console.log(this.state.todos)
        return (
            <BrowserRouter>
                <div className = "div">
                    <div className = "container">
                        <Header style = { centering }/>
                        <Route exact path = "/" render = { props => (
                            <React.Fragment>
                                <AddToDo addTodo = { this.addTodo }></AddToDo>
                                <Todos todos = { this.state.todos } delTodo = { this.delTodo } markComplete = { this.markComplete }></Todos>
                            </React.Fragment>
                            )
                            }></Route>
                        <Route path = "/about" component = { About } />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
// <Route path = "/" render = { props => (
//     <React.Fragment>
//         <AddToDo addTodo = { this.addTodo }></AddToDo>
//         <Todos todos = { this.state.todos } delTodo = { this.delTodo } markComplete = { this.markComplete }></Todos>
//     </React.Fragment>
// ) }></Route>

var random = 4;

const centering = {
    justifyContent: "center",
    alignItem: "center"
}

export default App;
