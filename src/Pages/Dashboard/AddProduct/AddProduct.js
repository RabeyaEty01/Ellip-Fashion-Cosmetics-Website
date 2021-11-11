import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addProducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Product Added Successfully!",
                        icon: "success",
                        button: "Aww yiss!",
                    });

                    reset();
                }

            })
    };

    return (
        <div className="container col-lg-8 col-sm-12">
            <div>
                <h5 className="small-text mt-5">New Products Page</h5>
                <h2 className="animate__animated animate__bounceInLeft text-center"><small className="fw-bold login-text ">Add</small> <small>A</small> <small className="fw-bold login-text ">New</small><small>Product</small>
                </h2>

                {/* {
                    success &&
                   

                   
                } */}


                <form className="add-form mt-5" onSubmit={handleSubmit(onSubmit)}>

                    <input required className="rounded p-2 m-2 " placeholder="Name" {...register("name")} />

                    <input required className="rounded p-2 m-2" placeholder="Price" type="number"{...register("price", { required: true })} />

                    <input required className="rounded p-2 m-2 " placeholder="Brand" {...register("brand")} />

                    <input required className="rounded p-2 m-2 " placeholder="Available Stock" {...register("stock")} />

                    <textarea required className="rounded p-2 m-2" placeholder="Description" {...register("description")} />

                    <input required className="rounded p-2 m-2" placeholder="Image Url" {...register("img")} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="btn btn1 mt-3 mb-5" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;