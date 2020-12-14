import React from 'react'


function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Welcome!</h1>
            <p className="lead">This is my system, use the navigation bar to access the pages</p>
            <hr className="my-4" />
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Register</a>
            </p>
        </div>
    )
}

export default Home;