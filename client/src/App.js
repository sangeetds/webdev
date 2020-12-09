import './App.css';
import Todos from './components/Todos';
import About from './components/pages/AboutMe.js';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useLazyQuery, useMutation, useCallback } from '@apollo/client';
import { GET_TODOS, ADD_TODOS, REMOVE_TODOS } from './components/queries/Queries.js'

const markComplete = 3;

export function App() {
    const [ todos, setTodos ] = useState([])
    const [ getTodo, { loading, data } ] = useLazyQuery(GET_TODOS);
    const [ addTodo, { title } ] = useMutation(ADD_TODOS);
    const [ removeTodo, { data2 } ] = useMutation(REMOVE_TODOS);

    const call = useCallback(() => plusTodo, [])

    const plusTodo =
        (title, priority) => {
            console.log(title + " " + priority);
            addTodo({ variables: { title: title, priority: priority } })
            getTodo()

            if (data) {
                setTodos(data.todos)
            }
        };

    useEffect(() => {
        getTodo()

        console.log(data);
        if (data) {
            setTodos(data.todos)
        }
    }, [data, todos, getTodo, plusTodo])

    return (
        <BrowserRouter>
            <div className = "div">
                <div className = "container">
                    <Header style = { centering }/>
                    <Route exact path = "/" render = { props => (
                        <>
                            <AddToDo addTodo = { plusTodo }/>
                            <Todos todo = { todos }  delTodo = { removeTodo } markComplete = { markComplete } />
                        </>
                        )
                        }></Route>
                    <Route path = "/about" component = { About } />
                </div>
            </div>
        </BrowserRouter>
    )
}


// <Route path = "/" render = { props => (
//     <React.Fragment>
//         <AddToDo addTodo = { this.addTodo }></AddToDo>
//         <Todos todos = { this.state.todos } delTodo = { this.delTodo } markComplete = { this.markComplete }></Todos>
//     </React.Fragment>
// ) }></Route>

const centering = {
    justifyContent: "center",
    alignItem: "center"
}

export default App;
