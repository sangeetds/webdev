import React from 'react'

function About() {
    return (
        <React.Fragment>
            <div className = "container" style = { { marginTop : "3%"} }>
                <h1 style = { { textAlign: "center" }}>About</h1>
                <p style = { { textAlign: "center" } }>This is a simple todo app</p>
            </div>
        </React.Fragment>
    )
}

export default About;
