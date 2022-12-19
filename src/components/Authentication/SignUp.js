import React, { useEffect } from "react";
import { useState } from "react";
import OtplessSdk from "otpless-js-sdk";
import { firebase, auth } from "../../firebase";
import axios from "axios";
import { baseURL } from "../../shared/baseUrl";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState([]);
  const [sendOtpButton, setSendOtpButton] = useState("Send OTP");
  const [submitOtpButton, setSubmitOtpButton] = useState("none");
  const [numberVerified, setNumberVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function(response) {
          console.log("Captcha Resolved");
        },
        defaultCountry: "IN",
      }
    );
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const sendOtp = (e) => {
    e.preventDefault();

    setSendOtpButton("Resend OTP");
    setSubmitOtpButton("block");

    let phone_number = "+91" + phone;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        alert("OTP sent");
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const otpSubmit = (e) => {
    e.preventDefault();

    let opt_number = otp;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        // window.open("/", "_self");
        console.log(user);
        setNumberVerified(true);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };

  function onRegister(e) {
    e.preventDefault();

    if (e.target.password.value === e.target.confirmPassword.value) {
      if (numberVerified && user) {
        if(true){
        alert("Done");
        const data = {
          email: e.target.email.value,
          password: e.target.password.value,
          name: e.target.firstName.value,
          // last_name: e.target.lastName.value,
          // class: e.target.class.value,
          phone: e.target.phone.value
        }
        axios
          .post(baseURL + "student/register",data)
          .then((response) => {
            console.log(response);
            const success = response.data.success;
            const message = response.data.data.message;

            if (success) {
              alert(message);
              navigate("/login")
            } else {
              alert(message);
            }
          })
          .catch((error) => {
            const errorMsg = error.message;
            alert(errorMsg);
          });
      }
     } else {
        alert("Please enter the correct otp");
      }
    } else {
      alert("Password Doesn't match");
    }
  }

  return (
    <>
      <div className="page-title-section section">
        <div id="recaptcha-container"></div>
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
                    <h3 className="title">Register</h3>
                    <form
                      className="login-form"
                      action=""
                      onSubmit={onRegister}
                    >
                      <div className="single-input mb-30">
                        <label htmlFor="firstName">Full Name</label>
                        <input
                          type="text"
                          required
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                        />
                      </div>

                      {/* <div className="single-input mb-30">
                        <label htmlFor="class">Class</label>
                        <input
                          type="text"
                          required
                          id="class"
                          name="class"
                          placeholder="Class"
                        />
                      </div> */}
                      <div className="single-input mb-30">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          required
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="single-input mb-30">
                        <div className="row">
                          <div className="col">
                            <label htmlFor="phone">Contact Number</label>
                            <input
                              type="tel"
                              required
                              minLength={10}
                              maxLength={10}
                              id="phone"
                              name="phone"
                              placeholder="Contact Number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <div className="col-5 col-md-4">
                            <label htmlFor="otp">OTP</label>
                            <input
                              type="text"
                              required
                              minLength={6}
                              maxLength={6}
                              id="otp"
                              name="otp"
                              placeholder="OTP"
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="single-input mb-30">
                        <div className="row">
                          <div className="col-5 col-md-4">
                            <button
                              type="submit"
                              onClick={sendOtp}
                              className="btn btn-primary btn-hover-secondary p-4"
                            >
                              {sendOtpButton}
                            </button>
                          </div>
                          <div
                            style={{ display: submitOtpButton }}
                            className="col-5 col-md-4"
                          >
                            <button
                              type="submit"
                              onClick={otpSubmit}
                              className="btn btn-primary btn-hover-secondary p-4"
                            >
                              Submit OTP
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="single-input mb-30">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          required
                          minLength={8}
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="single-input mb-30">
                        <label htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          required
                          minLength={8}
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div className="single-input">
                        <button
                          type="submit"
                          className="btn btn-primary btn-hover-secondary btn-width-100"
                        >
                          Register
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
