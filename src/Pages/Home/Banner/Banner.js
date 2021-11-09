import React from 'react';
import slideOne from '../../../images/slideshow_1.jpg';
import slideTwo from '../../../images/slideshow_3.jpg';
import slideThree from '../../../images/slideshow_4.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="mx-4">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slideOne} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <div class="slide-des leftbottom">
                                <h2 class="slide-heading my-5">
                                    Bright Moving Lips
                                </h2>
                                <p class="slide-text" >
                                    Beauty Products<br /><span>Cosmetics</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slideTwo} class="d-block w-100" alt="..." />
                        <div class="carousel-caption caption-two d-none d-md-block">
                            <div class="rightbottom">

                                <h2 class="slide-heading my-3">
                                    Perfect Rogue
                                </h2>
                                <p class="slide-text">
                                    Ultra Smooth <br /> Lip Cream
                                </p>
                                <button href="" title="" class="button btn-btn btn-3 bg-dark border-0 rounded py-2">
                                    <span className="text-white px-3">Shop Now</span>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slideThree} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                        <div class="slide-des  des-left">
                                <h2 class="slide-heading my-5">
                                Summer Lipstick Guide
                                </h2>
                                <button href="" title="" class="button btn-btn btn-3 bg-dark border-0 rounded py-2">
                                    <span className="text-white px-3">Shop Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    );
};

export default Banner;



