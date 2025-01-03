import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
import { addToCart } from "../Redux/ActionCreator"
import { useDispatch } from 'react-redux'
const Item = ({ product }) => {
    const dispatch = useDispatch();
    return (

        <div className='item  p-4'>
            <Link to={`${product.path}${product.id}`}>
                <img src={product.images[0]} alt="" onClick={() => window.scroll(0, 0)} />
            </Link>
            <div><StarRating product={product} /></div>
            <h6 className='text-white'>{product.title}</h6>
            <p>{product.info}</p>
            <hr></hr>
            <div className="item-prices">
                <div className="item-price-new">
                    &#8377;{product.finalPrice}
                </div>
                <div className="item-price-old">
                    &#8377; {product.originalPrice}
                </div>
            </div>
            <button className='bg-danger px-3 py-1 text-white w-100 mt-3 border-0' onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>

    )
}

export default Item