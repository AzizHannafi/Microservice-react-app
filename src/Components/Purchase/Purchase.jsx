import React,{useState}  from 'react'
import {addOrder} from '../../API/PurchaseApi'
import './Purchase.css'
import { useNavigate} from 'react-router-dom'

function Purchase() {
  const [productId,setProductId]=useState('')
  
  const [productQuantity,setProductQuantity]=useState('')
  const navigate = useNavigate();

  const addOrderProd=()=>{
    const order={
      id:productId,
      quantity: productQuantity
    }
    addOrder(order)
    navigate('/')
  }
  return (
    <div className='container_form'>
    <center><h2>Purchase Product</h2></center>
    <label >Product id</label>
    <input type="text" placeholder='Product ID' onChange={(e)=>{setProductId(e.target.value)}}/>
    <label >Product Quantity</label>
    <input type="number" placeholder='Product quantity' onChange={(e)=>{setProductQuantity(e.target.value)}}/>
    <input type="submit" value="Purchase Product" onClick={addOrderProd}/>
  </div>
  )
}

export default Purchase