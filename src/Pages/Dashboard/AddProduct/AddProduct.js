import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../../images/logo.png';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/addProducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })
    };

    return (
        <div className="container col-lg-8 col-sm-12">
            <img src={logo} alt="" />
        <div>
            <h1 className="my-3 login-text ">Add New Product</h1>
            <form className="add-form " onSubmit={handleSubmit(onSubmit)}>

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