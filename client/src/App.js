import './App.css';
import Todos from './components/Todos';
import About from './components/pages/AboutMe.js';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
});

const addTodo = 1;
const delTodo = 2;
const markComplete = 3;

const GetQuery = () => {
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

    const { loading, error, data } = useQuery(getTodosQuery);

    if (loading) {
        console.log("Loading");
        return [];
    }

    console.log(data);
    return data
}


export function App() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(GetQuery())
    }, [])


    return (
        <ApolloProvider client = { client }>
            <BrowserRouter>
                <div className = "div">
                    <div className = "container">
                        <Header style = { centering }/>
                        <Route exact path = "/" render = { props => (
                            <>
                                <AddToDo addTodo = { addTodo } />
                                <Todos todos = { todos } delTodo = { delTodo } markComplete = { markComplete } />
                            </>
                            )
                            }></Route>
                        <Route path = "/about" component = { About } />
                    </div>
                </div>
            </BrowserRouter>
        </ApolloProvider>
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
