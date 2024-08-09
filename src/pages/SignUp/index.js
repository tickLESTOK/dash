import React, { useState } from "react";
import axios from "axios";
import Logoo from "../../assets/images/logo.png";
import google from "../../assets/images/google.png";
import texture from "../../assets/images/pexels-scottwebb-1029604.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import {  useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formFields.password !== formFields.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/signup', {
        name: formFields.name,
        email: formFields.email,
        password: formFields.password,
      });
      console.log(res.data);
      alert("User registered successfully");
      navigate('/dash');
    } catch (error) {
      console.error(error);
      alert("Error registering user");
    }
  };

  return (
    <>
      <img src={texture} className="loginPattern" alt="" />
      <section className="signup">
        <div className="Container">
          <div className="LoginBox">
            <div className="Logo">
              <img src={Logoo} alt="Hotash Logo" />
            </div>
            <h2 className="Title">Register a new account</h2>
            <form onSubmit={handleSubmit}>
              <div className="InputWrapper">
                <div className="InputIcon">
                  <FaRegUserCircle size={20} />
                </div>
                <input
                  className="Input"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formFields.name}
                  onChange={onChangeField}
                  required
                />
              </div>
              <div className="InputWrapper">
                <div className="InputIcon">
                  <MdEmail size={20} />
                </div>
                <input
                  className="Input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formFields.email}
                  onChange={onChangeField}
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
                  name="password"
                  placeholder="Enter your password"
                  value={formFields.password}
                  onChange={onChangeField}
                  required
                />
              </div>
              <div className="InputWrapper">
                <div className="InputIcon">
                  <IoShieldCheckmarkSharp size={20} />
                </div>
                <input
                  className="Input"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formFields.confirmPassword}
                  onChange={onChangeField}
                  required
                />
              </div>
              <Button variant="contained" className="Buutton" type="submit" id="sign">
                SIGN UP
              </Button>
            </form>
            <div className="d-flex align-items-center justify-content-center or">
              <span className="line" id="lin"></span>
              <span className="txt" id="text">or</span>
              <span className="line" id="lin2"></span>
            </div>
            <Button variant="outlined" id="aa">
              <img src={google} alt="" width="30px" />&nbsp;
              Sign in with Google
            </Button>
          </div>
          <div className="LoginBox2">
            <span className="text-center">Login Existing Account?</span>
            <Link to={'/'}>Login</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
