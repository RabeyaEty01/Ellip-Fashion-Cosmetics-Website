import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
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
                    swal({
                        title: "WOW!",
                        text: "Admin Added Successfully!",
                        icon: "success",
                        button: "Ok!",
                    });
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