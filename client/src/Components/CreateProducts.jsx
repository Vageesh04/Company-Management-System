import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function CreateProducts(){
  const [values,setValues] = useState({
    name:'',
    price:'',
    stock:'',
  })

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    axios.post('/createProduct', values)
    .then((res)=>{
      console.log(res)
      navigate('/products')
    })
    .catch((err)=>console.log(err))
  }

  return(
    <div>
    <Header />
      <h1>CreateProducts</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input type="text" name="name" required onChange={(e)=>setValues({...values, name:e.target.value})}></input>
        <label>Price</label>
        <input type="text" name="price" required onChange={(e)=>setValues({...values, price:e.target.value})}></input>
        <label>Available stock</label>
        <input type="text" name="stock" required onChange={(e)=>setValues({...values, stock:e.target.value})}></input>
        <input type="submit" name="submit" value="ADD"></input>
       
      </form>
    </div>
  )
}

export default CreateProducts