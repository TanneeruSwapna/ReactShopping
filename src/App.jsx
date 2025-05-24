import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';
import Login from './components/Login';    // ✅ Login exists
import Signup from './components/Signup';  // ✅ Signup exists
import { auth } from './firebase';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        {/* ✅ Login is the default landing page */}
        <Route path='/Login' element={<Login />} />

        {/* ✅ Signup page */}
        <Route path='/' element={<Signup />} />

        {/* 🔒 Protected routes */}
        <Route path='/home' element={user ? <Home /> : <Navigate to="/" />} />
        <Route path='/products' element={user ? <Products /> : <Navigate to="/" />} />

        {/* Other public pages */}
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
  );
};

export default App;
