import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function CreateVendor(){
  const [values,setValues] = useState({
    name:'',
    location:'',
    phone:'',
    email:'',
  })

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    axios.post('/createVendor', values)
    .then((res)=>{
      console.log(res)
      navigate('/vendors')
    })
    .catch((err)=>console.log(err))
  }

  return(
    <div>
    <Header />
      <h1>CreateVendpr</h1>
      <div className="form-div">
      <form onSubmit={handleSubmit}>
        <label>Vendor Name</label>
        <input type="text" name="name" required onChange={(e)=>setValues({...values, name:e.target.value})}></input>
        <label>Vendor Location</label>
        <input type="text" name="location" required onChange={(e)=>setValues({...values, location:e.target.value})}></input>
        <label>Contact no.</label>
        <input type="text" name="phone" required onChange={(e)=>setValues({...values, phone:e.target.value})}></input>
        <label>Contact Email</label>
        <input type="text" name="email" required onChange={(e)=>setValues({...values, email:e.target.value})}></input>
        <input type="submit" name="submit" value="ADD"></input>
       
      </form>
      </div>
    </div>
  )
}

export default CreateVendor