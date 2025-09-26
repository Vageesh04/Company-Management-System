import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function Employees(){
  const [data, setData] = useState([])
  const [deleted, setDeleted] = useState(true)
  useEffect(()=>{
    if(deleted){
      setDeleted(false)
    
    axios.get('/employees')
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>console.log(err))
  }}, [deleted])


  function handleDelete(id){
    axios.delete(`/deleteEmployee/${id}`)
    .then((res)=>{
      setDeleted(true)
    }).catch((err)=>console.log(err))
  }

  return(
    <div className="main-container">
    <Header />
    <h1>Employees</h1>
    
    <table>

      <thead>
        <tr>
          <th>e_id</th>
          <th>e_name</th>
          <th>e_phone</th>
          <th>e_email</th>
          <th>d_id</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {
          data.map((employee)=>{
            return (<tr>
              <td>{employee.e_id}</td>
              <td>{employee.name}</td>
              <td>{employee.e_phone}</td>
              <td>{employee.e_email}</td>
              <td>{employee.d_id}</td>
              <td><button onClick={()=>handleDelete(employee.e_id)}>Delete</button></td>
            </tr>)
          })
        }
      </tbody>

    </table>
    <button><a href="/createEmployee">Add new Employee</a></button>

    </div>

  )
}

export default Employees