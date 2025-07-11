import React, { useState } from 'react'

const FormValidation = () => {
    const [email,setemail] = useState('')
     const [name,setname] = useState('')
     const[fdata,setfdata]= useState(' ')
    const autor = (e) => {
        e.preventDefault();
        
        if (!name || !email){
            alert ("please fill the form details........☠️💀")

        }
        alert ("thank you for the submission.........🙌")
        setfdata({name,email})
        console.log(fdata)
        setname('')
        setemail('')

    }
 return (
    <div>
        <form onSubmit={autor} className='container '>
            Name: <input type='text' className='name-container' value={name} onChange={(e)=> setname(e.target.value)} placeholder='enter your name'/>
            Email: <input type='text' className='email-container' value={email} onChange={(e) => setemail(e.target.value)} placeholder='enter your email'/>
         <input type='submit'/>
        </form>

        {fdata && <>
        <h2>Name: {fdata.name}</h2>
        <p>Email: {fdata.email}</p>
        </>
}

    </div>
  )
}

export default FormValidation