import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Shopcategory from '../../pages/Shopcategory'
import { Shopcontext } from '../../context/ShopContext'
import Cart from '../../pages/Cart'
import Product from '../../pages/Product'
import Allproducts from '../../pages/Allproducts'

const Path = () => {
  const { productsData } = useContext(Shopcontext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Shopcategory productsData={productsData}/>}/> */}
      <Route path='/cart' element={<Cart />} />
      {/* <Route path='/product' element={<Product />}>
        <Route path='/product/:id' element={<Product />} />
      </Route> */}
       <Route path='/product-details/' element={<Product />}>
        <Route path=':id' element={<Product />} />
      </Route>
      <Route path="/allproducts" element={<Allproducts productsData={productsData} />} />
    </Routes>


  )
}

export default Path