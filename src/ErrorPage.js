import React from 'react'
import {NavLink} from 'react-router-dom'

function ErrorPage(){
    return (
      <div className="error">
        <h1>404</h1>
        <p>Looks like you miss your way</p>
        <button className="go_home">
          <NavLink style={{textDecoration: "none"}} to = "/">Go Home</NavLink>
        </button>
      </div>
    );
} 

export default ErrorPage;