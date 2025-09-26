import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function CreateCustomer(){
  const [values,setValues] = useState({
    name:'',
    address:'',
    phone:'',
    email:'',
  })

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    axios.post('/createCustomer', values)
    .then((res)=>{
      console.log(res)
      navigate('/customers')
    })
    .catch((err)=>console.log(err))
  }

  return(
    <div>
    <Header />
      <h1>CreateCustomer</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" required onChange={(e)=>setValues({...values, name:e.target.value})}></input>
        <label>Address</label>
        <input type="text" name="address" required onChange={(e)=>setValues({...values, address:e.target.value})}></input>
        <label>Phone</label>
        <input type="tel" name="phone" required onChange={(e)=>setValues({...values, phone:e.target.value})}></input>
        <label>Email</label>
        <input type="email" name="email" required onChange={(e)=>setValues({...values, email:e.target.value})}></input>
        <input type="submit" name="submit" value="CREATE"></input>
       
      </form>
    </div>
  )
}

export default CreateCustomer