import './App.css';
import {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import userService from './utils/userService';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SIgnUpPage/SignUpPage';
import Layout from './components/Layout/Layout';
import NewBudgetPage from './pages/NewBudgetPage/NewBudgetPage';
import BudgetsPage from './pages/BudgetsPage/BudgetsPage';


// /userService.getUser()/ 
function App() {

  const [user, setUser] = useState(userService.getUser())

 let handleLogout = () => {
  userService.logout()
  setUser({user: null})
}

 let handleSignupOrLogin = () =>{
    setUser({user: userService.getUser()})
    console.log(user)
  }

  return (
    <div className="App">
      <Layout user={user} setUser={setUser} handleLogout={handleLogout} >
        <Routes>
          <Route path='/register' element={<SignUpPage handleSignupOrLogin={handleSignupOrLogin}/>} />
          <Route path='/login' element={<LoginPage handleSignupOrLogin={handleSignupOrLogin}/>} />
          <Route path='/budgets/new' element={<NewBudgetPage />} />
          <Route path='/budgets' element={<BudgetsPage user={user} />} /> 
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
