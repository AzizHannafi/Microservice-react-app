import React,{ useState, useEffect } from 'react'
import Product from '../Product/Product'
import './ProductList.css'
import {getProduct} from '../../API/ProductApi'



function ProductList() {
 
  const [listProduct,setListProduct]= useState([])
  useEffect(()=>{
    getProduct().then((res)=>{
      setListProduct(res)
    })
  },[listProduct])


 

  return (
    <div className='cards'>
        {listProduct.map((product)=>(
          <Product key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default ProductList