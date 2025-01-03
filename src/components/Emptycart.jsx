import React from 'react'
import { BsFillCartXFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Emptycart = () => {
    return (
        <div class="d-flex flex-column justify-content-center align-items-center gap-4 my-5">
            <p className='text-danger'><BsFillCartXFill size={120} /></p>

            <h5 className="text-white">Your Cart is empty</h5>
            <Link to="/allproducts" class="btn btn-danger">Start Shopping</Link>

        </div>
    )
}

export default Emptycart