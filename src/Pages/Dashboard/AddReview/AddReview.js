import React from 'react';
import { useForm } from 'react-hook-form';
import './AddReview.css';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import swal from 'sweetalert';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
        data.clientDetails = user?.photoURL;

        axios.post('https://warm-river-62334.herokuapp.com/addReview', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "WOW!",
                        text: "Your Feedback Added Successfully!",
                        icon: "success",
                        button: "Ok!",
                    });
                    reset();
                }
            })
    };


    return (
        <>

            <h5 className="small-text mt-3">Client's Feedback Form</h5>
            <h2 className="animate__animated animate__bounceInLeft text-center"><small className="fw-bold login-text ">Please </small> <small>Add</small> <small className="fw-bold login-text ">A</small><small> Review</small>
            </h2>

            <div className="container col-lg-8 col-sm-12 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="row my-3">
                        <div class="col-25">
                            <label for="name">Name </label>
                        </div>
                        <div class="col-75 review-input">
                            <input readOnly type="text" className="rounded  p-2 m-2 " defaultValue={user?.displayName} {...register("name")} />

                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-25 ">
                            <label for="email">Email </label>
                        </div>
                        <div class="col-75 review-input">
                            <input readOnly type="email" className="rounded p-2 m-2 " defaultValue={user?.email} {...register("email")} />

                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-25">
                            <label for="country">Ratting(Out of 5) </label>
                        </div>
                        <div class="col-75 review-input">
                            <select required type="select" id="ratting" name="ratting" placeholder="Select Ratting" {...register("ratting")}>
                                <option value="none">Select Ratting</option>
                                <option value="5">5</option>
                                <option value="4.5">4.5</option>
                                <option value="4">4</option>
                                <option value="3.5">3.5</option>
                                <option value="3">3</option>
                                <option value="2.5">2.5</option>
                                <option value="2">2</option>
                                <option value="1.5">1.5</option>
                                <option value="1">1</option>

                            </select>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-25">
                            <label for="feed_back">Feed Back </label>
                        </div>
                        <div class="col-75 review-input">
                            <textarea required className="rounded p-2 m-2" id="feedback" type="text" name="feedback" placeholder="Write something.." {...register("feedback")} />

                        </div>
                    </div>

                    {errors.exampleRequired && <span>This field is required</span>}

                    <div class="row my-3">
                        <input className="btn btn1 " type="submit" value="SUBMIT FEEDBACK" />
                    </div>
                </form>
            </div>

        </>
    );
};

export default AddReview;