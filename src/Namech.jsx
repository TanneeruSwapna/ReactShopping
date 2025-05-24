import React from 'react'

const Namech = () => {
    const [name,setname]= useState('user')

    const change=() =>{
        setname("Admin")
    }
  return (
    <div>
        <h2>hello{name}</h2>
        <button onClick={change}>change</button>
    </div>
  )
}

export default Namech