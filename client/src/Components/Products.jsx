import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function Products(){
  const [data, setData] = useState([])
  const [deleted, setDeleted] = useState(true)
  useEffect(()=>{
    if(deleted){
      setDeleted(false)
    
    axios.get('/products')
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>console.log(err))
  }}, [deleted])

  function handleDelete(id){
    axios.delete(`/deleteProduct/${id}`)
    .then((res)=>{
      setDeleted(true)
    }).catch((err)=>console.log(err))
  }

  return(
    <div className="main-container">
    <Header />
    <h1>Products</h1>
    
    <table>

      <thead>
        <tr>
          <th>p_id</th>
          <th>name</th>
          <th>p_price</th>
          <th>p_stock</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {
          data.map((product)=>{
            return (<tr>
              <td>{product.p_id}</td>
              <td>{product.p_name}</td>
              <td>{product.p_price}</td>
              <td>{product.p_stock}</td>
              <td><button onClick={()=>handleDelete(product.p_id)}>Delete</button></td>
            </tr>)
          })
        }
      </tbody>

    </table>
    <button><a href="/createProduct">Add new Products</a></button>

    </div>

  )
}

export default Products