import React from 'react'
import {Link, useNavigate } from 'react-router-dom'

const NavBar = ({user, setUser}) => {
  return (
    <div>
        <ul>
            <li><Link to='/budgets' >My Budgets</Link></li>
            <li><Link to='/budgets/new'>New Budget</Link></li>
            <li><Link to='/login' >Login</Link></li>
            <li><Link to='/register' >Sign Up</Link></li>

        </ul>
    </div>
  )
}

export default NavBar