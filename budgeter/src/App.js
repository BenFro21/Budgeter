import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import userService from './utils/userService';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SIgnUpPage/SignUpPage';



function App() {

  const [user, setUser] = useState(userService.getUser())

 let handleLogout = () => {
  userService.logout()
  setUser({user: null})
}

 let handleSignupOrLogin = () =>{
    setUser({user: userService.getUser()})
  }

  return (
    <div className="App">
        <SignUpPage handleSignupOrLogin={handleSignupOrLogin}/>
        <LoginPage handleSignupOrLogin={handleSignupOrLogin}/>
    </div>
  );
}

export default App;
