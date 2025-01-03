import React from 'react'
import Emptycart from '../components/Emptycart'
// useSelector hook for accessing Store data
import { useSelector } from 'react-redux'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import './Cart.css'
// imports for removeFromCart functionality
import { useDispatch } from 'react-redux';
import { removeFromCart, addToCart, removeFromCartQty } from '../Redux/ActionCreator';
const Cart = () => {
  // const cartData=useSelector(state=>state);
  //op:cartData:{productionData:{cartData:[{}{}]}}
  // const cartData=useSelector(state=>state.productData);
  //op:cartData:{cartData:[{}{}]}
  const cartData = useSelector(state => state.productData.cartData)
  // op:Now we can access data [{}{}]
  console.log("cartData", cartData);
  // calculating originalPrice of added items to a cart ,using reduce method
  const originalPrice = cartData.reduce((preValue, currentValue) => {
    return preValue + currentValue.originalPrice * currentValue.count
  }, 0)
  // calculating discountPrice
  const discPrice = cartData.reduce((preValue, currentValue) => {
    return preValue + (currentValue.originalPrice - currentValue.finalPrice)*currentValue.count
  }, 0)
  // calculating totalprice
  const totalPrice=originalPrice-discPrice;
  // for removecart functionality
  const dispatch = useDispatch();
  // cart items calculations
  return (
    <div className='container'>
      {!cartData.length ? <Emptycart /> :
        <div className='d-flex my-5 py-5 '>
          <div className='w-75'>
          {
            cartData.map((item, i) => <div className='row align-items-center mt-5' key={i}>
              <div className="col-md-2">
                <img src={Array.isArray(item.images) ? item.images[0] : item.images} alt='' className='img-fluid' />
              </div>
              <div className="col-md-6">
                <h4>{item.info}</h4>
                <div className="d-flex gap-3 fs-5 fw-bold my-4">
                  <p>&#8377;{item.finalPrice}</p>
                  <p className='text-secondary text-decoration-line-through'>&#8377;{item.originalPrice}</p>
                </div>
                <div className='counter'>
                  <div className='bg-secondary' onClick={() => dispatch(removeFromCartQty(item.id))}><FaMinus /></div>
                  <div>{item.count}</div>
                  <div className='bg-secondary' onClick={() => dispatch(addToCart(item))}>  <FaPlus /></div>
                </div>
              </div>
              <div style={{cursor:"pointer"}}className="col-md-1 fs-2" onClick={() => dispatch(removeFromCart(item.id))}><RiDeleteBin6Line /></div>
            </div>)
          }
          </div>
          <div className='d-flex flex-column gap-3 mt-5'>
            <h4>Order Summary ( Items)</h4>
            <div className="d-flex justify-content-between">
              <p>Original Price</p>
              <h6>&#8377;{originalPrice}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <p>Discount</p>
              <h6 className='text-success fw-bold'>-&#8377;{discPrice}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <p>Delivery</p>
              <h6 className='text-success'>Free</h6>
            </div>
            <hr/>
            <div className="d-flex justify-content-between">
              <p>Total Price</p>
              <h6>&#8377;{totalPrice}</h6>
            </div>
            <button className='bg-danger text-white border-0 py-2 px-4'>CheckOut</button>
          </div>
        </div>}
    </div>
  )
}

export default Cart