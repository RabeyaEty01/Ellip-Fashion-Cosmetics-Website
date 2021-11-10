import React from 'react';
import { Spinner } from 'react-bootstrap';

const Pay = () => {
    return (
        <div>
            <h5 className="small-text mt-5">Payments Method</h5>
            <h2 className="animate__animated animate__bounceInLeft text-center"><small className="fw-bold login-text ">Payment </small> <small>System</small> <small className="fw-bold login-text ">Coming</small><small> Soon</small>
            </h2>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default Pay;