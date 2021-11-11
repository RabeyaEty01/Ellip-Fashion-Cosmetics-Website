import React from 'react';
import footerlogo from '../../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg-footer my-5 pt-4 pb-4">
            <img src={footerlogo} alt="" />
            <div className= " text-start ps-5 row row-cols-2 row-cols-lg-5 pt-4 pb-4">
                <div className="half-div">
                    <h4>SIGN UP AND SAVE</h4>
                    <p>Receive 20% off on registration</p>
                    <p>Hurry Up Now!</p>
                    <input type="text" placeholder="Email Address" />
                    <button className="btn-dark">SIGN UP</button>

                </div>
                <div className="text-start">
                    <h4>CONTACT INFO</h4>
                    <p>11244 Rabeya Ety,Dhaka</p>
                    <p>+088-127889746</p>
                    <p>etyrabeya@gmail.com</p>
                    <div className="d-flex">
                        <i className=" fa-2x fab fa-facebook"></i>
                        <i class="fa-2x fab fa-linkedin ms-2"></i>
                        <i className="fa-2x fab fa-twitter-square ms-2"></i>
                        <i className="fa-2x fab fa-instagram-square ms-2"></i>
                    </div>
                </div>

                <div>
                    <h4>Our Services</h4>
                    <p>Authentic Lipstics</p>
                    <p>Branded Products</p>
                    <p>High Quality</p>
                    <p>Best Deals</p>

                </div>
                <div>
                    <h4>Support</h4>
                    <p>Our Teams</p>
                    <p>Terms of Services</p>
                    <p>Our Pricing</p>
                    <p>Testimonials</p>

                </div>
                <div>
                    <h4>TERMS</h4>
                    <p>Privacy Policy</p>
                    <p>Disclaimer</p>
                    <p>Cancellation Policy</p>
                    <p>Cancellation Policy</p>

                </div>
            </div>
            <hr />
            <div>
                <p >2021 Ellip Fashion Cosmetics © Copyright Rabeya Aktar Ety</p>


            </div>
        </div>
    );
};

export default Footer;