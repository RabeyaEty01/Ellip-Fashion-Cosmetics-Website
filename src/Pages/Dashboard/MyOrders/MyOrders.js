import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const email = `${user.email}`;
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);



    //DELETE Booked Order
    const handleDeleteBookedOrder = id => {
        const proceed = window.confirm('Are you sure , you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');

                        const remainingOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrders);
                    }
                })
        }
    }
    return (
        <div className="main-section mt-0">
            <div className="container">
                <h5 className="small-text mt-5">Check your ordered list here..</h5>
                <h2 className="animate__animated animate__bounceInLeft text-center"><small className="fw-bold login-text ">Your</small> <small> Total</small> <small className="fw-bold login-text ">Orders : </small>
                    <small>{myOrders.length}</small> </h2>

                {  myOrders.length === 0 ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                    :

                    <div className="d-flex justify-content-between">
                        <div className="col-lg-11">
                            <div class="row row-cols-1 row-cols-md-1 row-cols-lg-1 ps-2 ms-2 my-3">
                                {
                                    myOrders.map((order, index) =>
                                        <div>
                                            <div class="row g-0">
                                                <div class="col-md-5">
                                                    <div className="photo-frame">
                                                        <div className="photo">
                                                            <img src={order.productsDetails.img} className="img-fluid w-100 card-img p-3" alt="..." />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col-md-7">
                                                    <div className="text-start card-body">
                                                        <h5 className="card-title">{order?.productsDetails?.name}</h5>

                                                        <p className="card-text  text-secondary">{order?.productsDetails
                                                            ?.description}</p>

                                                        <div className="d-flex justify-content-between">
                                                            <h5 className="card-text fw-bold"> ${order?.productsDetails.price}</h5>
                                                            <h4 className="card-text text-success">Status: {order.status}</h4>
                                                        </div>

                                                        <button onClick={() => handleDeleteBookedOrder(order._id)} className="btn btn-danger mt-5">Cancel Order</button>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    )
                                }

                            </div>
                        </div>

                    </div>
                    }
            </div>

        </div>

    );
};

export default MyOrders;