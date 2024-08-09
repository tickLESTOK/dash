import React, { useContext, useEffect, useState } from "react";
import Logoo from "../../assets/images/logo.png";
import google from "../../assets/images/google.png";
import texture from "../../assets/images/pexels-scottwebb-1029604.jpg";
import { MyContext } from "../../App";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "@mui/material/Button";
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const context = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    context.setisHideSidebarAndHeader(true);
  }, [context]);

  const focusInput = (index) => {
    setInputIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all the details");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });

      if (res.status === 200) {
        alert('Signing successful');
        localStorage.setItem('token', res.data.token);
        navigate('/dash'); // Redirect to the dashboard after a successful sign-in
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error.response && error.response.data && error.response.data.error
        ? error.response.data.error
        : "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {<img src={texture} className="loginPattern" alt="Texture" />}
      <div className="Container">
        <div className="LoginBox">
          <div className="Logo">
            <img src={Logoo} alt="Hotash Logo" />
          </div>
          <h1 className="Title">Login to Hotash</h1>
          <form onSubmit={handleSubmit}>
            <div className="InputWrapper">
              <div className="InputIcon">
                <MdEmail size={20} />
              </div>
              <input
                className="Input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="InputWrapper">
              <div className="InputIcon">
                <RiLockPasswordFill size={20} />
              </div>
              <input
                className="Input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button variant="contained" className="Buutton" type="submit" disabled={loading}>
              {loading ? 'Signing In...' : 'SIGN IN'}
            </Button>
          </form>
          <a className="ForgotPassword" href="#">FORGOT PASSWORD</a>
          <div className='d-flex align-items-center justify-content-center or'>
            <span className='line' id="lin"></span>
            <span className='txt' id="text">or</span>
            <span className='line' id="lin2"></span>
          </div>
          <Button variant="outlined" id="aa" onClick={() => { /* Logic for Google Sign-In */ }}>
            <img src={google} alt="Google" width="30px" />&nbsp;
            Sign in with Google
          </Button>
        </div>
        <div className="LoginBox2"> 
          <span className="text-center">Don't have an account?</span>
          <Link to={'/signUp'}>Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
