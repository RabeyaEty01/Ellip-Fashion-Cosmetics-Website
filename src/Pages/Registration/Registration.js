import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import loginImg from '../../images/loginimg.png';
import logo from '../../images/logo.png';
import swal from 'sweetalert';

const Registration = () => {

    const [loginData, setLoginData] = useState({});

    const history = useHistory();


    const { user, authError, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }



    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            swal({
                title: "OOPS!",
                text: "Password Did Not Match!",
                icon: "warning",
                button: "Ok!",
            });
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
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
                        User Created Successfully
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
                        <h4 className="login-text ">Create A New Account</h4>

                        <form onSubmit={handleLoginSubmit}>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <input
                                        name="name"
                                        type="text"
                                        onBlur={handleOnBlur}
                                        placeholder="Your Name" className="form-control my-3 p-4" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <input
                                        name="email"
                                        type="email"
                                        onBlur={handleOnBlur}
                                        placeholder="Email" className="form-control my-3 p-4" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <input
                                        type="password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        placeholder="Password" className="form-control my-3 p-4" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <input
                                        type="password"
                                        name="password2"
                                        onBlur={handleOnBlur}
                                        placeholder="Confirm Password" className="form-control my-3 p-4" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <button type="submit" className="btn1 mt-3 my-3">Create Account</button>
                                </div>
                            </div>
                            <p>Already Have An Account? <Link className="login-text fw-bold" to="/login">Go to Login</Link></p>



                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;