import React, { Component, useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import feedbackimg from '../../../images/feedback.png';
import Slider from "react-slick";
import Rating from 'react-rating';
import './Reviews.css';
import useAuth from "../../../Hooks/useAuth";
import starImg from '../../../images/star.png';


const Reviews = () => {
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);


    const settings = {

        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        fetch('https://warm-river-62334.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="container">
            <h5 className="small-text mt-5">Watch Our Client Thoughts</h5>
            <h2 className="animate__animated animate__bounceInLeft text-center"><small className="fw-bold login-text ">___Our</small> <small>Client's </small> <small className="fw-bold login-text ">Feedback___</small>
            </h2>
            <img src={starImg} alt="" />

            {
                reviews.length === 0 ?

                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :

                    <Slider {...settings}>
                        {
                            reviews.map(review =>
                                <div class="row  g-4 my-5">
                                    <div className="col">
                                        <div class="card shadow border-0 h-100">
                                            {
                                                review.clientDetails ?
                                                    <img src={review?.clientDetails} class="card-img-top review-card-img p-3 rounded-circle img-fluid" alt="..." />
                                                    :

                                                    <img src={feedbackimg} class="card-img-top review-card-img p-3 rounded-circle img-fluid" alt="..." />

                                            }
                                            <div class="card-body">
                                                <h5 class="card-title ">{review?.name}</h5>
                                                <p class="card-text text-secondary ">{review?.email}</p>
                                                <p class="card-text text-secondary p-3">{review?.feedback}</p>
                                                <p className="card-text p-3"><Rating
                                                    initialRating={review.ratting}
                                                    emptySymbol="far fa-star icon-color"
                                                    fullSymbol="fas fa-star icon-color"
                                                    readonly></Rating></p>





                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
            }
        </div >

    );
};

export default Reviews;



/*
Incredible service and great product .If you want to save money highly recommended.
*/

/*
I got these beautiful high quality lipstics from them. Girl's it's worth of money. Recomended!
*/

/*
Didn't like the product too much! their servcie was worst.
*/

/*
Very fast response and helpful.Lipsticks are worth trying. Quality and matte finishing are too good.Loved the products.

*/
