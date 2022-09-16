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
            <label for='email'>Email</label>
            <input id='email' type="text" placeholder='Email' value={user.email} name='email' onChange={handleChange} />
            
            <label for='password'>Password</label>
            <input id='password' type='text' placeholder='Password' value={user.password} name='password' onChange={handleChange}/>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default LoginPage