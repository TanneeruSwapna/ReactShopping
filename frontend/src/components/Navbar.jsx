import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { auth } from '../firebase';

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="nav-brand">
        <img src='https://i.pinimg.com/736x/29/ae/ec/29aeec2a3dd518c1901607f4d06665d0.jpg' className='logo'/>
        TRend CArt
        </NavLink>
      </div>
      <nav className="navbar-links">
        <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/Cart" className={({isActive}) => isActive ?'activate' : ''}>Cart</NavLink>

        {!user && (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Signup</NavLink>
          </>
        )}

        {user && (
          <>
            <span style={{ marginLeft: '10px', color: '#fff' }}>Hello, {user.displayName || user.email}</span>
            <button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
