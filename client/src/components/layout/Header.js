import React from 'react'
import '../../App.css';

function Header() {
    return (
        <header style = { headerStyle }>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;
