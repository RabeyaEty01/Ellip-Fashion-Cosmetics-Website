import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/about1.jpg';
import img2 from '../../../images/about2.jpg';

const ExclosiveDeals = () => {
    return (
        <div className="container mt-5">

            <h5 className="small-text mt-5">Our colors matching your moods..</h5>
            <h2 className="animate__animated animate__bounceInLeft text-center"><small className="fw-bold login-text ">___Grab</small> <small>All</small>  <small className="fw-bold login-text ">Our</small>  <small>Exclusive</small> <small className="fw-bold login-text ">Deals___</small>
            </h2>


            <div class="mb-3 mt-5">
                <div class="row g-0">
                    <div class="col-md-5">
                        <div className="photo-frame">
                            <div className="photo">
                                <img className="img-fluid card-img-2" src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body text-start">
                            <h5 className="small-text mt-5">Smudge me not</h5>
                            <h1 className="animate__animated animate__bounceInLeft "><small>Limited Edition Lipsticks</small>
                            </h1>
                            <p>The Lipstick comes in a black packaging with a transparent lid, though plastic, is sturdy and travel friendly.he Lipstick comes in a black packaging with a transparent lid, though plastic, is sturdy and travel friendly.The Lipstick comes in a black packaging with a transparent lid, though plastic, is sturdy and travel friendly.he Lipstick comes in a black packaging with a transparent lid, though plastic, is sturdy and travel friendly.</p>
                            <Link to='/explore'>
                                <button className="btn btn2 fw-bold">SHOP NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" mb-3">
                <div class="row g-0">
                    <div class="col-md-7">
                        <div class="card-body text-start">
                            <h5 className="small-text mt-5">Exclusive Reds Collection</h5>
                            <h1 className="animate__animated animate__bounceInLeft "><small>Mini Matte Twilight Colors</small>
                            </h1>
                            <p>The Lipstick comes in a black packaging with a transparent lid, though plastic, is sturdy and travel friendly.he Lipstick comes in a black packaging with a transparent lid, though plastic, is sturdy and travel friendly.The Lipstick comes in a black packaging with a transparent lid, though plastic, is sturdy and travel friendly.he Lipstick comes in a black packaging with a transparent lid, though plastic, is sturdy and travel friendly.</p>
                            <Link to='/explore'>
                                <button className="btn btn2 fw-bold">SHOP NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div className="photo-frame">
                            <div className="photo">
                                <img className="img-fluid card-img-2" src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclosiveDeals;