import React, { useState } from 'react';
import './Login.scss';
import axios from 'axios';
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const [error , setError] =useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("https://fiverrclone.onrender.com/api/auth/login", { username, password });
      console.log(username ,password)
      console.log(res.data)
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  };
  
  return (
    <div className="login">
    <form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <label htmlFor="">Username</label>
      <input
        name="username"
        type="text"
        placeholder=""
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        
      />

      <label htmlFor="">Password</label>
      <input
        name="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
       
      />
      <button type="submit">Login</button>
     {error && {error}}
    </form>
  </div>
  )
}

export default Login