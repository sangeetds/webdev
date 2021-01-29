import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TODOS, ADD_TODOS, REMOVE_TODOS } from './components/queries/Queries.js'

export function App() {
    const { loading, error, data } = useQuery(GET_TODOS);
    const [ addTodo ] = useMutation(ADD_TODOS)
    const [ removeTodo ] = useMutation(REMOVE_TODOS);

    const plusTodo =
        (title, priority) => {
            addTodo({
                variables: { title: title, priority: priority, completed: false },
                refetchQueries: [ { query: GET_TODOS } ]
            })
        };

    const markComplete = (todo) => {
        removeTodo({
            variables: { id: todo._id },
        });
        addTodo({
            variables: { title: todo.title, priority: todo.priority, completed: true },
            refetchQueries: [ { query: GET_TODOS } ]
        })
    }

    const deleteTodo = (_id) => {
        removeTodo({
            variables: { id: _id },
            refetchQueries: [ { query: GET_TODOS } ]
        });
    }

    return (
            <div className = "div">
                <div className = "container">
                    <Header style = { centering }/>
                            <AddToDo
                            addTodo = { plusTodo }
                            />
                            <Todos
                            todo = { data }
                            loading = { loading }
                            error = { error }
                            deleteTodo = { deleteTodo }  markComplete = { markComplete }
                        />
                </div>
            </div>
    )
}

const centering = {
    justifyContent: "center",
    alignItem: "center"
}

export default App;
