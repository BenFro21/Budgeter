import React from 'react'
import {Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import userService from '../../utils/userService'
import tokenService from '../../utils/tokenService'


const NavBarContainer = styled.nav`
  padding: 5px;
  ul{
    display: flex;
    justify-content: space-evenly;
  }
  li{
    list-style: none;
  }

`


const NavBar = ({user}) => {

console.log(user)
  const Navigate = useNavigate()
  return (
    <NavBarContainer>
        <ul>
            <li><Link to='/budgets' >My Budgets</Link></li>
            <li><Link to='/budgets/new'>New Budget</Link></li>
            {user? <li>Welcome {user?.username}</li> : <li><Link to='/login' >Login</Link></li> }
            {user? null : <li><Link to='/register' >Sign Up</Link></li> }
            { user?  <li onClick={() => {
                userService.logout()
                Navigate('/budgets', {replace:true})

            }}>Log Out</li> : null}
            {/* <li><button onClick={userService.logout()}>Logout</button></li> */}
        </ul>
    </NavBarContainer>
  )
}

export default NavBar