import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ProductList from '../ProductList/ProductList'
import AddProduct from '../AddProduct/AddProduct'
import Purchase from '../Purchase/Purchase'
import Header from '../Header/Header'

function RouterComponent() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/AddProduct' element={<AddProduct/>}/>
            <Route path='/PurchaseProduct' element={<Purchase/>} />
        </Routes>
    </Router>
  )
}
export default RouterComponent