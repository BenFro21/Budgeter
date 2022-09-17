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
    <>
        <form onSubmit={handleSubmit} >
            <label for='username'>Username</label>
            <input id='username' type='text' placeholder='Name' value={user.name} name='username' onChange={handleChange} />
            
            <label for='email'>Email</label>
            <input id='email' type='text' placeholder='Email' value={user.email} name='email' onChange={handleChange} />
            
            <label for='password'>Password</label>
            <input id='password' type='text' placeholder='Password' value={user.password} name='password' onChange={handleChange} />
            
            <label for='password_confirmation'>Password Confirmation</label>
            <input id='password_confirmation' type='text' placeholder='Confirm Password' value={user.passwordConf} name='password_confirmation' onChange={handleChange} />  
            <br/>
            <input type="submit" value="Submit" />       
        </form>
    </>
  )
}

export default SignupForm