import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import swal from 'sweetalert';

const MyOrders = () => {
    const { user } = useAuth();
    const email = `${user.email}`;
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://warm-river-62334.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);



    //DELETE Booked Order
    const handleDeleteBookedOrder = id => {
        swal({
            title: "Are you sure?",
            text: "You Want To Cancel Your Order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://warm-river-62334.herokuapp.com/orders/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                swal("Upps! Your Order Has Been Canceled Successfully!", {
                                    icon: "success",
                                });
                            }
                            const remainingOrders = myOrders.filter(order => order._id !== id);
                            setMyOrders(remainingOrders);
                        })

                }
                else {
                    swal("Your Order Not Canceled!");
                }
            });


    }
    return (
        <div className="main-section mt-0">
            <div className="container">
                <h5 className="small-text mt-5">Check your ordered list here..</h5>
                <h2 className="animate__animated animate__bounceInLeft text-center"><small className="fw-bold login-text ">Your</small> <small> Total</small> <small className="fw-bold login-text ">Orders : </small>
                    <small>{myOrders.length}</small> </h2>

                {myOrders.length === 0 ?
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

                                                        {
                                                            order.status === 'Shipped' ?
                                                                <div class="alert alert-success mt-5" role="alert">
                                                                    Product Has Been Shipped Successfully!
                                                                </div>

                                                                :
                                                                <button onClick={() => handleDeleteBookedOrder(order._id)} className="btn btn-danger mt-5">Cancel Order</button>
                                                        }
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