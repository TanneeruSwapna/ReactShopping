import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase'; // adjust path if needed
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    try {
      const usercred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(usercred.user, { displayName: name });
      alert('Signup successful!');
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-left-info">
      <center>

        <h1> Fa<span className='sp1'>shion</span> Trend<span className='sp2'>Cart</span></h1>
        <p> Discover and Find Your Own Fashion!</p>
        <div className='img-container'>
         <p className='Typing'>New Trends..........</p>
        <img src='https://tse4.mm.bing.net/th?id=OIP.Znv4cNAoi_U11DqthqJK_QHaJQ&pid=Api&P=0&h=180' className="img1"/>
         <img src='https://tse1.mm.bing.net/th?id=OIP.sPleK0rdZzwWZeXFjT96zwHaJQ&pid=Api&P=0&h=180' className='img1'/>
          <img src='https://tse4.mm.bing.net/th?id=OIP.BjhSYROL2FOH2IeTeK6j6wHaJe&pid=Api&P=0&h=180' className='img1'/>
         </div>
         <button className='shopbtn'>Shop Now</button>
       </center>
      </div>

      <div className="signup-page"> {/* Already present in your code */}
        <form className="signup-form" onSubmit={signup}>
          <h2>Signup</h2>
          <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} required />
          <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} required />
          <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Signup</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
