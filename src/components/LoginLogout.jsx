import React, { useState } from 'react'

const LoginLogout = () => {
    const [islogin,setislogin]= useState(true)
    const login=()=>{
        setislogin(true)
    }
    const logout=()=>{
        setislogin(false)
    }
    
  return (
    <div>
        <h2> login logout auth</h2>

        {islogin ? (
            <>
            <h2>Welcome back user</h2>
            <button onClick={logout}> Logout</button>
            </>
        ):(
            <>
            <h2>Hi please login</h2>
            <button onClick={login}> Login</button>
            </>
        )}

    </div>
  )
}

export default LoginLogout