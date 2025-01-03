import React, { useContext } from 'react'
import './shopcategory.css'
import { Shopcontext } from '../context/ShopContext'
import Item from '../components/Item'
import { Link } from 'react-router-dom'
import Noresults from '../components/Noresults'
import { FaArrowRight } from "react-icons/fa";
import '../components/item.css'
const Shopcategory = ({productsData}) => {
  return (
    <>
    <div className="row m">
      {/* <div className='d-flex flex-wrap justify-content-between gap-3 px-5 pt-5'> */}
      
        {productsData.length!=0?productsData.map((product, i) =>
           <div className='col col-sm-6 col-md-3 gap-2 mt-4' key={i}>
            {/* <Item key={i} images={product.images[0]} title={product.title} info={product.info} finalPrice={product.finalPrice} originalPrice={product.originalPrice} id={product.id} product={product} path={product.path}/> */}
            <Item key={i}  product={product}/>
           </div>):<Noresults/>}
           {/* {console.log("productsData.length",productsData.length)} */}
           {productsData.length==11&&
          
           <div className='col col-sm-6 col-md-3 gap-2 mt-4  item d-flex justify-content-center align-items-center'> <Link to="/allproducts" className='text-white fs-4'>Browse All Products <FaArrowRight/> </Link></div>
         
           }
        
      </div>
    </>

  )
}

export default Shopcategory