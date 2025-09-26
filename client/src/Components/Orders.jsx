import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function Orders(){
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('/orders')
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>console.log(err))
  }, [])
  return(
    <div className="main-container">
    <Header />
    <h1>Orders</h1>
    
    <table>

      <thead>
        <tr>
          <th>o_id</th>
          <th>c_id</th>
          <th>p_id</th>
          <th>p_quantity</th>
          <th>total_value</th>
        </tr>
      </thead>

      <tbody>
        {
          data.map((order)=>{
            return (<tr>
              <td>{order.o_id}</td>
              <td>{order.c_id}</td>
              <td>{order.p_id}</td>
              <td>{order.p_quantity}</td>
              <td>{order.total_value}</td>
            </tr>)
          })
        }
      </tbody>

    </table>

    </div>

  )
}

export default Orders