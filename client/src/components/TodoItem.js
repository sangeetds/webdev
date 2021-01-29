import React from 'react'
import '../App.css';

export default function TodoItem(props) {

    const handleChange = (event) => {
        const value = event.target.checked
        event.preventDefault();
        if (value) {
            props.markComplete(props.todo)
        }
    }

    const handleButtonChange = (event) => {
        props.deleteTodo(props.todo._id)
        event.preventDefault();
    }

    return (
        <div style = { getStyle(props.todo) }>
            <p>
                <input onChange = { handleChange } type = "checkbox" /> { '   ' }
                { props.todo.title }
                <button onClick = { handleButtonChange } style = { btnStyle }>x</button>
            </p>
        </div>
    )
}

const getStyle = (todo) => {
    var decorate = todo.completed ? 'line-through' : 'none';
    return ( {
        background: "#f4f4f4",
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: decorate
        }
    )
}

const btnStyle = {
    background: '#ff0000',
    color: 'fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}
