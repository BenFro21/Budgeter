import React, {useState} from 'react'
import userService from '../../utils/userService'

const SignupForm = () => {
const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: ''
})

let handleChange = (e) => {
    setUser({
        [e.target.name] : e.target.value
    })
}

let handleSubmit = async (e) => {
    e.preventdefault()
    try{
        await userService.signup(user)
    }catch(err){
        console.log('From signupform handlesubmit',err)
    }
}

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type='text' placeholder='Name' value={user.name} name='name' onChange={handleChange} />
            <input type='email' placeholder='Email' value={user.email} name='email' onChange={handleChange} />
            <input type='password' placeholder='Password' value={user.password} name='password' onChange={handleChange} />
            <input type='password' placeholder='Confirm Password' value={user.passwordConf} name='passwordConf' onChange={handleChange} />  
            <button type='submit'>Sign Up</button>        
        </form>
    </div>
  )
}

export default SignupForm