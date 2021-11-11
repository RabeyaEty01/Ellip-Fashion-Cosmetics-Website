import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
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

                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    //UPDATE STATUS
    const handleUpdateStatus = (id) => {
        const url = `http://localhost:5000/orders/${id}`;
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
                    alert('Shipped Successfully.')

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