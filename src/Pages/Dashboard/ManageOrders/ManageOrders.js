import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://warm-river-62334.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    //DELETE Booked Order
    const handleDeleteBookedOrder = id => {

        swal({
            title: "Are you sure?",
            text: "You Want To Delete This Order!",
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

                                swal("Upps! Order Has Been Deleted Successfully!", {
                                    icon: "success",
                                });
                            }
                            const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                        })

                }
                else {
                    swal("Order Not Deleted!");
                }
            });
    }

    //UPDATE STATUS
    const handleUpdateStatus = (id) => {
        const url = `https://warm-river-62334.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal({
                        title: "WOW!",
                        text: "Status Updated To Shipped Successfully!",
                        icon: "success",
                        button: "Ok!",
                    });
                   
                }
            })
    }
    return (
        <div className="my-5">

            <h5 className="small-text mt-5">Customer Orders Details..</h5>
            <h2 className="animate__animated animate__bounceInLeft text-center"><small className="fw-bold login-text ">____Manage</small> <small> All</small> <small className="fw-bold login-text ">Orders____</small>
            </h2>

            {orders.length === 0 ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                <div>
                    <table class="table table-responsive table-responsive-sm table-responsive-md shadow   table-hover mt-5">
                        <thead className="btn1">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">UserName</th>
                                <th scope="col">UserEmail</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                orders.map(order => <tr>
                                    <td>{order._id}</td>
                                    <td>{order.productsDetails.name}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>{order?.productsDetails.price}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <button onClick={() => handleUpdateStatus(order._id)} className="btn btn-success">Update</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteBookedOrder(order._id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>

                                )
                            }
                        </tbody>

                    </table>

                </div>}
        </div>

    );
};

export default ManageOrders;