import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function Vendors(){
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('/vendors')
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>console.log(err))
  }, [])
  return(
    <div className="main-container">
    <Header />
    <h1>Vendors</h1>
    
    <table>

      <thead>
        <tr>
          <th>v_id</th>
          <th>v_name</th>
          <th>v_location</th>
          <th>v_phone</th>
          <th>v_email</th>
        </tr>
      </thead>

      <tbody>
        {
          data.map((vendor)=>{
            return (<tr>
              <td>{vendor.v_id}</td>
              <td>{vendor.v_name}</td>
              <td>{vendor.v_location}</td>
              <td>{vendor.v_phone}</td>
              <td>{vendor.v_email}</td>
            </tr>)
          })
        }
      </tbody>

    </table>
    <button><a href="/createVendor">Add new Vendor</a></button>

    </div>

  )
}

export default Vendors