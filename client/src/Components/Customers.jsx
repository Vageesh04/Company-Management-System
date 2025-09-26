import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function Customers(){
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('/customers')
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>console.log(err))
  }, [])
  return(
    <div className="main-container">
    <Header />
    <h1>Customers</h1>
    
    <table>

      <thead>
        <tr>
          <th>c_id</th>
          <th>c_name</th>
          <th>c_address</th>
          <th>c_phone</th>
          <th>c_email</th>
        </tr>
      </thead>

      <tbody>
        {
          data.map((customer)=>{
            return (<tr>
              <td>{customer.c_id}</td>
              <td>{customer.c_name}</td>
              <td>{customer.c_address}</td>
              <td>{customer.c_phone}</td>
              <td>{customer.c_email}</td>
            </tr>)
          })
        }
      </tbody>

    </table>
    
    <button><a href="/createCustomer">Add new customers</a></button>

    </div>

  )
}

export default Customers