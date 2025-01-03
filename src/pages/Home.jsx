import React, { useContext } from 'react'

import Carosal from '../components/Carosal'
import Pyramid from '../components/Pyramid'
// import Shopcategory from './Shopcategory'
import { Shopcontext } from '../context/ShopContext'
import Navbar from '../components/Navbar'
import Path from '../components/routing/Path'
import LoginSignup from '../components/LoginSignup/LoginSignup'
import Dummypyramid from '../components/Dummypyramid'

const Home = () => {
const {productsData}=useContext(Shopcontext)
  return (
    <>
   {/* <LoginSignup/> */}
    <Carosal/>
    <Pyramid  productsData={productsData}/>
    {/* <Dummypyramid productsData={productsData}/> */}
    <Navbar productsData={productsData}/>
    {/* <Path/> */}
    {/* <Shopcategory  productsData={productsData}/> */}
   
    
    </>
  )
}

export default Home