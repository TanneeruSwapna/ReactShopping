import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react'

  const ThemeContext = createContext()
const Usecontext = () =>{


  const [theme,setTheme] = useState('light');


  const toggletheme= ()=> {
   setTheme(theme === "light" ? 'dark': 'light')
   console.log(theme)
  }
  return (
    <ThemeContext value = {{theme,toggletheme}}>
      <div>
     <button onClick = {toggletheme}>Theme</button>
     <Panel /> 
    </div>
    </ThemeContext>
  )
}




function Panel(){

  const {theme} = useContext(ThemeContext)
  const className = theme === "dark" ? "panel-dark": "panel-light"
  return (
    <div className={className}>
      <h1>{theme === "dark" ? "Dark Theme" : "Light Theme"}</h1>
     
    </div>
  )
}


export default  Usecontext