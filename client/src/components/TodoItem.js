import React from 'react'
import '../App.css';

export default function TodoItem(props) {
    const { _id, title } = props.todo
    const onDelete = () => {
        props.delTodo({ variables: { id: _id } })
    }

    return (
        <div style = { getStyle(props.todo) }>
            <p>
                <input type = "checkbox" onChange = { props.markComplete(props.todo) } /> { '   ' }
                { title }
                <button onClick = { onDelete } style = { btnStyle }>x</button>
            </p>
        </div>
    )
}

const getStyle = (todo) => {
    var decorate = todo.completed ? "line-through" : "none"
    return ( {
        background: "#f4f4f4",
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: { decorate }
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
