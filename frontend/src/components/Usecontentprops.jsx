import React from 'react'
import { useState } from 'react'

const Usecontentprops=()=>{
  const [theme,setTheme] = useState('light');

  const toggletheme= ()=> {
   setTheme(theme === "light" ? 'dark': 'light')
   console.log(theme)
  }
  return (
    <div>
     <button onClick = {toggletheme}>Theme</button>
     <Panel theme={theme}/> 
    </div>
  )
}




function Panel({theme}){
  const className = theme === "dark" ? "panel-dark": "panel-light"
  return (
    <div className={className}>
      <h1>{theme === "dark" ? "Dark Theme" : "Light Theme"}</h1>
     
    </div>
  )
}


export default Usecontentprops