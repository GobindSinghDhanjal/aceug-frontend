import { Alert } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../shared/baseUrl";


const Login = () => {

  const navigate = useNavigate();
  const [ errorBox , setErrorBox] = useState("none");

  function onFormLogin(e) {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    axios.post(baseURL+"student/login",data).then((response)=>{

      const success = response.data.success;

      if(!success){
        // alert(response.data.msg);
        setErrorBox("flex")
      }else{
        axios.defaults.headers.common["Authorization"] = response.data.token;
        localStorage.setItem('token', response.data.token);
        navigate("/student-dashboard");
      }
    }).catch((error)=>{
      console.log(error);
    })

  }

  return (
    <>
      <div className="page-title-section section">
        <div className="page-title">
          <div className="container">
            <h1 className="title">Start your learning journey</h1>
          </div>
        </div>
      </div>

      <div className="login-register-section section section-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-xl-3 col-lg-3"></div>
                <div className="col-xl-6 col-lg-6">
                  <div className="login-form-wrapper">
                    <h3 className="title">Login</h3>
                    <form className="login-form" onSubmit={onFormLogin}>
                    <div className="single-input">
                    <Alert severity="error" className="mb-3" style={{display: errorBox}}>You have entered wrong email or password</Alert>
                    </div>
                      <div className="single-input mb-30">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="single-input mb-30">
                        <label htmlFor="password">Password</label>
                        <input
                          type="text"
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="single-input mb-30">
                        <div className="row">
                          <div className="col-sm-6 remember-me-wrap">
                            <div className="checkbox-input">
                              <input
                                type="checkbox"
                                name="login-form-remember"
                                id="login-form-remember"
                              />
                              <label htmlFor="login-form-remember">
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 lost-your-password-wrap">
                            <p>
                              <a href="#" className="lost-your-password">
                                Lost your password?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-input">
                        <button className="btn btn-primary btn-hover-secondary btn-width-100">
                          Log In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
