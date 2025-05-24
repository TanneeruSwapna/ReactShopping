// src/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase"; // ✅ Ensure this is the correct path to your firebase.js
import "./Login.css"; // ✅ Your styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      console.error("Email login error:", err.code, err.message);
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Login Success:", user);
      alert("Google login successful!");
      navigate("/home");
    } catch (err) {
      console.error("Google login error:", err.code, err.message);
      alert("Google Login Failed: " + err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="background-image" />
      <div className="login-container">
        <h2 className="login-title">Welcome to TrendTech</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="or">or</div>

        <button onClick={handleGoogleLogin} className="google-btn">
          Login with Google
        </button>

        <p className="signup-link">
          Don't have an account? <Link to="/">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
