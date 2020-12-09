import { gql } from '@apollo/client';

export const GET_TODOS = gql`
    {
        todos {
            _id
            title
            completed
            priority
        }
    }
`;

export const ADD_TODOS = gql`
    mutation AddTodo($title: String!, $priority: String!){
        addTodo(title: $title, priority: $priority){
            title
        }
    }
`;

export const REMOVE_TODOS = gql`
    mutation RemoveTodo($id: String!){
        removeTodo(id: $id){
            title
        }
    }
`;
