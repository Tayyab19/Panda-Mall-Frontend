import 'bootstrap/dist/css/bootstrap.min.css';
import './style_dark.css';
import abc from './login.jpg';
import React, { useState } from "react";
import Signup from './signup';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ForgotPassword from './forgot_password';

function Login() {
    
    const [forgotPassword, setForgetPassword] = useState(false);

    const navigate = useNavigate();

const handleSubmit = (e) => {
    console.log(e.target.username.value);
    axios({
        method: "post",
        url: `http://localhost:8000/api/token/`,
        data: {
          username: e.target.username.value,
          password: e.target.password.value,
        },
        Headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            localStorage.setItem("token", response.data.access);
            if(response.data.role === "Customer") {
              navigate("/home");
            }
          }
        })
        .catch((err) => {
          console.log(err);
          if (err) {
              toast.error("Invalid Credentials", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
}



return (
  <>
<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
<div className="page-content d-flex align-items-center">
    <div className="container d-flex justify-content-center">
    <ForgotPassword forgotPassword={forgotPassword} setForgetPassword={setForgetPassword}/>
        <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">

            <div className="auth-card">

                <div className="logo-area">

                       <img  src={abc}/>

                </div>            

                <hr className="separator" />

                <form onSubmit={e => {e.preventDefault(); handleSubmit(e);}}>

                    <div className="mb-2 mt-5">
                        <input id='username' type="username" className="form-control auth-input" placeholder="Username"/>
                    </div>

                    <div className="mb-3">
                        <input id='password' type="password" className="form-control auth-input" placeholder="Password"/>
                    </div>

                    {/* <Link to={"/home"}></Link> */}
                        <button type='submit' className="btn auth-btn mt-2 mb-4">Login</button>

                </form>

                <p className="text mb-1">Forgot <a href="" onClick={e => {e.preventDefault(); console.log("yes"); setForgetPassword(true)}} className="text-link">Password</a> ?</p>
                <p className="text mb-4">Create New Account? <a href="/Signup" style={{cursor: 'pointer'}} className="text-link">Sign Up</a></p>

            </div>
        </div>
    </div>
    
</div>
<ToastContainer />
</>
);
}

export default Login;