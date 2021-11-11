import React from 'react';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setEmail('');
                    //console.log(data);
                }


            })
        e.preventDefault();
    }
    return (
        <div className="container">

            <h5 className="small-text text-start mt-5">Create New Admin</h5>
            <h2 className="animate__animated animate__bounceInLeft text-start"><small className="fw-bold login-text ">Make</small> <small> New</small> <small className="fw-bold login-text ">Admin</small>
            </h2>

            {
                success && <Alert severity="success">Admin made successfully </Alert>
            }

            <form onSubmit={handleAdminSubmit}>
                <div className="d-flex mt-5">
                    <div class="col-sm-7 review-input">
                        <input placeholder="Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur} />
                    </div>
                    <div className="">
                        <button type="submit" class="btn btn1">Make Admin</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;