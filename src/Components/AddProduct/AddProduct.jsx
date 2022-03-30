import React ,{useState} from 'react'
import './AddProduct.css'
import {addProduct} from '../../API/ProductApi'
import {useNavigate} from 'react-router-dom'


function AddProduct() {
  const [productName,setProductName]=useState('')
  const [productPrice,setProductPrice]=useState('')
  const [productQuantity,setProductQuantity]=useState('')
  const navigate= useNavigate()

  const addProd=()=>{
    const product={
      name:productName,
      price:productPrice,
      quantity: productQuantity
    }
    addProduct(product)
    navigate('/')
  }
  return (
    <div className='container_form'>
      <center><h2>Add Product</h2></center>
      <label >Product Name</label>
      <input type="text" placeholder='Product name' onChange={(e)=>{setProductName(e.target.value)}}/>
      <label >Product Price</label>
      <input type="number" placeholder='Product price'  onChange={(e)=>{setProductPrice(e.target.value)}}/>
      <label >Product Quantity</label>
      <input type="number" placeholder='Product quantity' onChange={(e)=>{setProductQuantity(e.target.value)}}/>
      <input type="submit" value="Add Product" onClick={addProd}/>
    </div>
  )
}

export default AddProduct