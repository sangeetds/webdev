import React from 'react'

class AddToDo extends React.Component {
    render () {
        return (
            <form style = { { display: 'flex' } }>
                <input style = { { flex: '10', padding: '5px' } } type = "text" name = "title" placeHolder = "Add Todo..." />
                <input style = { { flex: '1' } } className = "btn" type = "submit" value = "Submit"/>
            </form>
        )
    }
}

export default AddToDo;
