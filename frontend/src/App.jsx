import React, { useEffect, useState } from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';
import Login from './components/Login';    // ✅ Login exists
import Signup from './components/Signup';  // ✅ Signup exists
import { auth } from './firebase';
import PaymentGateway from './components/paymentGateway';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <><Navbar user={user} />
      <Routes>
        {/* ✅ Login is the default landing page */}
        <Route exact path='/Login' element={<Login />} />

        {/* ✅ Signup page */}
        <Route exact path='/' element={<Signup />} />

        {/* 🔒 Protected routes */}
        <Route exact path='/home' element={user ? <Home /> : <Navigate to="/" />} />
        <Route exact path='/products' element={user ? <Products /> : <Navigate to="/" />} />
        <Route exact path='/payment' element={<PaymentGateway />} />
        {/* Other public pages */}
        <Route exact  path='/about' element={<About />} />
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
};

export default App;
