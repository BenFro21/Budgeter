import React, { useState } from 'react'
import userService from '../../utils/userService'



const LoginPage = ({handleSignupOrLogin}) => {
    let [user, setUser] = useState({email: '', password: ''})
    
    let handleChange = (e) => {
        setUser({
           ...user, [e.target.name]: e.target.value
        })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await userService.login(user)
            handleSignupOrLogin()
        }catch(err){
            alert('invalid creds')
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="email" placeholder='Email' value={user.email} name='email' onChange={handleChange} />
            <input type='password' placeholder='Password' value={user.password} name='password' onChange={handleChange}/>
            <button type='submit'>Log in</button> 
        </form>
    </div>
  )
}

export default LoginPage