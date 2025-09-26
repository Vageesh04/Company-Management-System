import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function CreateEmployee(){
  const [values,setValues] = useState({
    name:'',
    phone:'',
    email:'',
    department:'',
  })

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    axios.post('/createEmployee', values)
    .then((res)=>{
      console.log(res)
      navigate('/employees')
    })
    .catch((err)=>console.log(err))
  }

  return(
    <div>
    <Header />
      <h1>CreateEmployees</h1>
      <form onSubmit={handleSubmit}>
        <label>Employee Name</label>
        <input type="text" name="name" required onChange={(e)=>setValues({...values, name:e.target.value})}></input>
        <label>Contact Number</label>
        <input type="text" name="phone" required onChange={(e)=>setValues({...values, phone:e.target.value})}></input>
        <label>Contact Email</label>
        <input type="email" name="email" required onChange={(e)=>setValues({...values, email:e.target.value})}></input>
        <label>Department Number</label>
        <input type="text" name="department" required onChange={(e)=>setValues({...values, department:e.target.value})}></input>
        <input type="submit" name="submit" value="ADD"></input>
       
      </form>
    </div>
  )
}

export default CreateEmployee