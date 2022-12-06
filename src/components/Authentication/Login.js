import React from "react";

const Login = () => {
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
                    <form className="login-form" action="#">
                      <div className="single-input mb-30">
                        <label for="username">Username or email</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username or email"
                        />
                      </div>
                      <div className="single-input mb-30">
                        <label for="password">Password</label>
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
                              <label for="login-form-remember">
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
