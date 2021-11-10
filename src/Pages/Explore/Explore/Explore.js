import React, { useState, useEffect } from 'react';
import Header from '../../Shared/Header/Header';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brand from '../../../images/brand.png';
import doller from '../../../images/doller.png';
import info from '../../../images/info.png';
import stock from '../../../images/stock.png';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <>
            <Header></Header>
            <div className="container">
                <h2 className="animate__animated animate__bounceInLeft text-center my-5"><small className="fw-bold ">___Our</small> <small className="text-secondary">All </small><small className="fw-bold">Products___</small>
                </h2>


                {products.length === 0 ?

                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                        {
                            products.map((product, index) =>
                                <div class="col">
                                    <div className="choose-card  rounded h-100 p-4 border-0">
                                        <div className="photo-frame">
                                            <div className="photo">
                                                <img className="img-fluid card-img" src={product?.img} alt="" />
                                            </div>
                                        </div>

                                        <div className="my-3">
                                            <h5 className="card-title fw-bold ">{product?.name}</h5>
                                            <h4 class="card-text fw-bold "><img src={doller} width="20px" alt="" /> {product?.price}</h4>
                                            <div className="d-flex justify-content-around">
                                            </div>
                                            <p class="card-text  text-secondary"><img src={info} width="25px" alt="" /> {product?.description.slice(0, 110)}</p>

                                            <div className="d-flex justify-content-around">
                                                <p class="card-text text-start text-secondary"><img src={brand} width="20px" alt="" />  Brand :  {product?.brand}</p>

                                                <p class="card-text text-start text-secondary"><img src={stock} width="20px" alt="" /> Availble : {product?.stock} pcs</p>
                                            </div>

                                            <Link to={`/products/booking/${product._id}`}>
                                                <button className="btn btn-danger"> <i className="fas fa-shopping-cart"></i> Purchase Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>}
            </div>
        </>
    );
};

export default Explore;