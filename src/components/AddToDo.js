import React from 'react'
import '../App.css';

class AddToDo extends React.Component {

    state = {
        title: '',
        priority: 0
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.priority);
        this.setState( { title: '', priority: 0 });
    }

    onChange = (e) => this.setState( { title: e.target.value });

    priorityChange = (e) => this.setState( { priority: e.target.value })

    render () {
        return (
            <form onSubmit = { this.onSubmit } style = { { display: 'flex' } }>
                <input style = { { flex: '10', padding: '5px' } } type = "text" name = "title" placeholder = "Add Todo..." value = { this.state.title } onChange = { this.onChange } />
                <input style = { { flex: '4', padding: '5px' } } type = "number" name = "priority" placeholder = "Set Item's Priority" value = { this.state.priority } onChange = { this.priorityChange } />
                <input style = { { flex: '1' } } className = "btn" type = "submit" value = "Add"/>
            </form>
        )
    }
}

export default AddToDo;
