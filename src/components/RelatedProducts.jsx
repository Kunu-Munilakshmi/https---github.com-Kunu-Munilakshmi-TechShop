import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Shopcategory from '../pages/Shopcategory';

const RelatedProducts = ({product}) => {
    let {productsData}=useContext(Shopcontext);
    productsData=productsData.filter(item=>item.category==product.category)
    // console.log("related products",productsData);
  return (
    <div className='m-5'>
      <center className='fs-1 fw-bold my-5'>Related Products</center>
      <Shopcategory productsData={productsData}/>
    </div>
  )
}

export default RelatedProducts