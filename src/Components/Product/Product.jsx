import React from 'react'
import './Product.css'
import {deleteProduct} from '../../API/ProductApi'
function Product(props) {

  const products= props.listProduct;

  const deleteProd=()=>{
      for(let i=0; i<products.length;i++){
        if(products[i].id === props.product.id ){
           const indexToRemove= i;
           products.splice(indexToRemove,1)
        }
      }
      props.setListProduct([...products])
      deleteProduct(props.product.id)
  }



  return (
    <div className='card'>
        <div className='product_imgage'>
          <center>
            <img src="https://img.icons8.com/doodle/96/000000/used-product.png" alt='Product image'/>
          </center>
      
        </div>
        <div className='container'>
          <div className='title'>
            <center>
              <h3>{props.product.name}</h3>
            </center>
            
          </div>
          <div className='product_info'>
            <div>
              Product Id :{props.product.id}  
            </div>
            <div>
              Quantity :{props.product.quantity} 
            </div>
            <div>
              Price :{props.product.price} 
            </div>
          </div>
        </div>
        <center>
        <input type="submit" id='btn_delete' value="Delete Product" onClick={deleteProd}/>
        </center>
    </div>
  )
}

export default Product