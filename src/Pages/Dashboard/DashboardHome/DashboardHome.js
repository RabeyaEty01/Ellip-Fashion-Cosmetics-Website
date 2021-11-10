import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const DashboardHome = () => {
    const {user}=useAuth();
    return (
        <div className="my-5">
            <img src={logo} alt="" />
            <h1 className="fw-bold my-5">Welcome! <span className="login-text"> {user?.displayName}</span> </h1>
        </div>
    );
};

export default DashboardHome;