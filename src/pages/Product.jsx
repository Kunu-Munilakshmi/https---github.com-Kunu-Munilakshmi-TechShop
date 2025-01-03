import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import RelatedProducts from '../components/RelatedProducts';
const Product = () => {
    const {productsData}=useContext(Shopcontext);
    const {id}=useParams();
    const product=productsData.find(e=>e.id===Number(id));
  return (
    <>    
    <ProductDisplay product={product}/>
    {console.log("product",product)}
    <ProductDescription product={product}/>
    <RelatedProducts product={product}/>
    </>
  )
}

export default Product