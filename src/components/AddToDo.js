import React from 'react'
import '../App.css';

class AddToDo extends React.Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState( { title: '' });
    }

    onChange = (e) => this.setState( { title: e.target.value });

    render () {
        return (
            <form onSubmit = { this.onSubmit } style = { { display: 'flex' } }>
                <input style = { { flex: '10', padding: '5px' } } type = "text" name = "title" placeholder = "Add Todo..." value = { this.state.title } onChange = { this.onChange } />
                <input style = { { flex: '1' } } className = "btn" type = "submit" value = "Submit"/>
            </form>
        )
    }
}

export default AddToDo;
