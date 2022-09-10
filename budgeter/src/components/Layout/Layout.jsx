import NavBar from "../Navbar/NavBar";
import React from 'react'

const Layout = ({children, user, setUser}) => {
  return (
    <div>
        <NavBar user={user} setUser={setUser} />
        {children}
    </div>
  )
}

export default Layout