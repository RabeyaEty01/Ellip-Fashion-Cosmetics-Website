import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    //DELETE Booked product
    const handleDeleteProducts = id => {
        const proceed = window.confirm('Are you sure , you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');

                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className="my-5">

            <h5 className="small-text mt-5">Products Details Here..</h5>
            <h2 className="animate__animated animate__bounceInLeft text-center"><small className="fw-bold login-text ">____Manage</small> <small> All</small> <small className="fw-bold login-text ">Products____</small>
            </h2>

            {products.length === 0 ?
                <Spinner animation="bproduct" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                <div>
                    <table class="table table-responsive table-responsive-sm table-responsive-md shadow   table-hover mt-5">
                        <thead className="btn1">
                            <tr>
                                <th scope="col">Product ID</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Action</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                products.map(product => <tr>
                                    <td>{product._id}</td>
                                    <td>
                                        <img width="60px" height="55px" src={product.img} alt="" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <button className="btn btn-success">Update</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteProducts(product._id)} className="btn btn-danger">Delete</button>
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

export default ManageProducts;