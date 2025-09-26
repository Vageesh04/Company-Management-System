import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Components/Home'
import Employees from './Components/Employees'
import Products from './Components/Products'
import CreateCustomer from './Components/CreateCustomer'
import Vendors from './Components/Vendors'
import Orders from './Components/Orders'
import Customers from './Components/Customers'
import CreateProducts from './Components/CreateProducts'
import CreateEmployee from './Components/CreateEmployee'
import CreateVendor from './Components/CreateVendor'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/products' element={<Products />} />
        <Route path='/vendors' element={<Vendors />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/createCustomer' element={<CreateCustomer />} />
        <Route path='/createProduct' element={<CreateProducts />} />
        <Route path='/createEmployee' element={<CreateEmployee />} />
        <Route path='/createVendor' element={<CreateVendor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App