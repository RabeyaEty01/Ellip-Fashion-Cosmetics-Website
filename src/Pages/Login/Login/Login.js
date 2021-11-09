import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import loginImg from '../../../images/loginimg.png';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';
import './Login.css';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, isLoading, loginUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);

    }


    return (
        <section className="Form my-4 mx-5">
            <div className="container">
                <div className="py-3 ">
                    <img src={logo} alt="" />
                </div>

                {
                    isLoading && <Spinner animation="border" />
                }
                {
                    user?.email && <div class="alert alert-success" role="alert">
                        Login Successfully!
                    </div>
                }
                {
                    authError && <div class="alert alert-danger" role="alert">
                        {authError}
                    </div>
                }

                <div className="row no-gutters">
                    <div className="col-lg-6 my-5 py-3">
                        <img className="img-fluid login-img my-5" src={loginImg} alt="" />
                    </div>

                    <div className="col-lg-6 px-5 pt-5">
                        <h4 className="login-text ">Sign into your account</h4>

                        <form onSubmit={handleLoginSubmit}>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <input
                                        type="email"
                                        name="email"
                                        onBlur={handleOnChange}
                                        placeholder="Email-Address" className="form-control my-3 p-4" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <input
                                        type="password"
                                        name="password"
                                        onBlur={handleOnChange}
                                        placeholder="****************" className="form-control my-3 p-4" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <button type="submit" className="btn1 mt-3 my-3">Login</button>
                                </div>
                            </div>

                            <p>Don't have an account? <Link className="login-text fw-bold" to="/register">Register here</Link></p>

                            <h5 className="fw-bold ">
                                -----------------OR-------------</h5>

                            <div className="form-row">
                                <div className="col-lg-12">
                                    <button onClick={handleGoogleSignIn} type="button" className="btn1 mt-3 mb-5"><i class="fab fa-google "></i> Sign In With Google</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;