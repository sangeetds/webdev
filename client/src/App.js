import './App.css';
import Todos from './components/Todos';
import About from './components/pages/AboutMe.js';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TODOS, ADD_TODOS, REMOVE_TODOS } from './components/queries/Queries.js'

export function App() {
    const { loading, data } = useQuery(GET_TODOS);
    const [ addTodo ] = useMutation(ADD_TODOS)
    const [ removeTodo ] = useMutation(REMOVE_TODOS);

    const plusTodo =
        (title, priority) => {
            addTodo({ variables: { title: title, priority: priority, completed: false } })
            // window.location.reload();
        };

    const markComplete = (todo) => {
        const newTodo = { title: todo.title, priority: todo.priority, completed: true }
        removeTodo({ variables: { id: todo.id } });
        addTodo({ variables: { newTodo } });
        // window.location.reload();
    }

    return (
        <BrowserRouter>
            <div className = "div">
                <div className = "container">
                    <Header style = { centering }/>
                    <Route exact path = "/" render = { props => (
                        <>
                            <AddToDo addTodo = { plusTodo }/>
                            <Todos todo = { data } loading = { loading }
                            delTodo = { removeTodo }
                            markComplete = { markComplete } />
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
