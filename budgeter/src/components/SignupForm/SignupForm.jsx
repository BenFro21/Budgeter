import React, {useState} from 'react'
import userService from '../../utils/userService'

const SignupForm = () => {
const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
})

let handleChange = (e) => {
    setUser({
        ...user, [e.target.name] : e.target.value
    })
}

let handleSubmit = async (e) => {
    e.preventDefault()
    try{
        await userService.signup(user)
    }catch(err){
        console.log('From signupform handlesubmit',err)
    }
}

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type='text' placeholder='Name' value={user.name} name='username' onChange={handleChange} />
            <input type='email' placeholder='Email' value={user.email} name='email' onChange={handleChange} />
            <input type='password' placeholder='Password' value={user.password} name='password' onChange={handleChange} />
            <input type='password' placeholder='Confirm Password' value={user.passwordConf} name='password_confirmation' onChange={handleChange} />  
            <button type='submit'>Sign Up</button>        
        </form>
    </div>
  )
}

export default SignupForm