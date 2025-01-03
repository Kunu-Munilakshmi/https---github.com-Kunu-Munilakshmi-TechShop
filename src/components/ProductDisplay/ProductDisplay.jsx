import React, { useState } from 'react'
import './ProductDisplay.css'
import StarRating from '../StarRating'
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../Redux/ActionCreator"
const ProductDisplay = ({ product }) => {
    const [mainImage, setMainImage] = useState(0);
    console.log("product info ", product);
    const dispatch = useDispatch();
    // console.log("dispatch",dispatch);
    return (
        <div className='productdisplay  py-5 m-3 text-white'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list ">
                    {product.images.map((item, i) => <img class='img-clickable' onClick={() => setMainImage(i)} key={i} src={item} alt="" />)}
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img img-fluid' src={product.images[mainImage]} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">

                <h1 className='text-secondary'>{product.title}</h1>
                <p className='text-white'>{product.info}</p>
                <div className="productdisplay-right-stars">
                    <div>  <StarRating product={product} /></div>
                    <div>| {product.ratings} Ratings</div>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between ">
                    <div>
                        <div className="productdisplay-right-prices">
                            <div className="productdisplay-right-price-new">
                                &#8377;{product.finalPrice}
                            </div>
                            <div className="productdisplay-right-price-old">
                                &#8377;{product.originalPrice}
                            </div>
                        </div>
                        <p className='text-success fw-bold'>You save:  &#8377;{product.originalPrice - product.finalPrice} ({Math.floor((product.originalPrice - product.finalPrice) / product.originalPrice * 100)}%)</p>
                        <p>(Inclusive of all taxes)</p>
                    </div>
                    <div >
                        {product.quantity ? <button className='bg-success text-white fw-bold border-0 py-2 px-3'><TiTick />In Stock</button> : <button className='bg-danger text-white fw-bold'><IoClose />Out of Stock</button>}

                    </div>
                </div>
                <hr />

                <p>Offers and Discounts</p>
                <div className="offers-discs">
                    <button >No Cost EMI on Credit Card</button>
                    <button>Pay Later & Avail Cashback</button>
                </div>
                <hr />
                <div className="addtocart-btn">
                    <button onClick={() => dispatch(addToCart(product))}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay