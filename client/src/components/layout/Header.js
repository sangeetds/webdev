import React from 'react'
// import PropTypes from 'prop-types'
import '../../App.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style = { headerStyle }>
            <h1>TodoList</h1>
            <Link style = { linkStyle } to = "/"> Home </Link>
            <span> | </span>
            <Link style = { linkStyle } to = "/about">About</Link>
        </header>
    )
}

const linkStyle = {
    textDecoration: 'none',
    color: "#fff",
    margin: "20px"
}

const headerStyle = {
    background: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;
