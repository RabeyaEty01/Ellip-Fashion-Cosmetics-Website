import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import brand from '../../images/brand.png';
import doller from '../../images/doller.png';
import info from '../../images/info.png';
import stock from '../../images/stock.png';
import Header from '../Shared/Header/Header';


const PlaceOrder = () => {
    const { id } = useParams();
    const [products, setproducts] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    //Place Order
    const onSubmit = (data) => {
        data.status = "Pending";
        data.productsDetails = products;

        axios.post('http://localhost:5000/placeOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Placed Successfully');
                    reset();
                }
            })
    };

    return (
        <>
        <Header></Header>
        <div className="container">
            <div className="row no-gutters">
                <div className="m-3 my-4 p-2 col-lg-5">
                    <div className=" mb-3">
                        {products.length === 0 ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            :
                            <div className="row g-0">
                                <div class="col">
                                    <div className="rounded h-100 p-4 border-0">
                                        <div className="photo-frame">
                                            <div className="photo">
                                                <img className="img-fluid card-img" src={products?.img} alt="" />
                                            </div>
                                        </div>

                                        <div className="my-3">
                                            <h4 className="card-title  ">{products?.name}</h4>
                                            <h5 class="card-text text-start "><img src={doller} width="20px" alt="" /> {products?.price}</h5>
                                            <p class="card-text text-start text-secondary"><img src={info} width="25px" alt="" /> {products?.description}</p>

                                            <div className="d-flex justify-content-between">
                                                <p class="card-text text-start text-secondary"><img src={brand} width="20px" alt="" />  Brand :  {products?.brand}</p>

                                                <p class="card-text text-start text-secondary"><img src={stock} width="20px" alt="" /> Availble : {products?.stock} pcs</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div>
                <div className="col-lg-6">
                    <h5 className="small-text mt-5">Get Your Desired Products Quickly..</h5>
                    <h2 className="animate__animated animate__bounceInLeft text-center"><small className="fw-bold login-text ">___Order</small> <small>Your </small>  <small className="fw-bold login-text ">Desired</small><small> Products___</small>
                    </h2>
                    <form className="add-form mt-5" onSubmit={handleSubmit(onSubmit)}>

                        <input readOnly className="rounded p-2 m-2 " defaultValue={user.displayName} {...register("name")} />

                        <input readOnly className="rounded p-2 m-2 " defaultValue={user.email} {...register("email")} />

                        <input required className="rounded p-2 m-2 " placeholder="Address" {...register("address")} />

                        <input required className="rounded p-2 m-2" placeholder="Phone" type="phone"{...register("phone", { required: true })} />

                        <textarea required className="rounded p-2 m-2" placeholder="Additional Note" {...register("note")} />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="btn btn1 mt-3 mb-5" type="submit" value="Place Order" />
                    </form>
                </div>
            </div>

        </div>
        </>
    );
};

export default PlaceOrder;