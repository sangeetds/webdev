import React, { useState } from 'react'
import '../App.css';

export default function AddToDo(props) {
    const [ title, setTitle ] = useState("");
    const [ priority, setPriority ] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        setPriority("");
        props.addTodo(title, priority);
    }

    const onChange = (e) => setTitle(e.target.value);

    const priorityChange = (e) => setPriority(e.target.value)

    return (
        <form onSubmit = { onSubmit } style = { { display: 'flex' } }>
            <input style = { { flex: '10', padding: '5px' } } type = "text" name = "title" placeholder = "Add Todo..." value = { title } onChange = { onChange } />
            <input style = { { flex: '4', padding: '5px' } } type = "number" name = "priority" placeholder = "Set Item's Priority" value = { priority } onChange = { priorityChange } />
            <input style = { { flex: '1' } } className = "btn" type = "submit" value = "Add"/>
        </form>
    )
}
