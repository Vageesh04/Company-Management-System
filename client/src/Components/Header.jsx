import React from "react";
import "./Header.css"

function Header(){
  return(
    <div className="header-container">

      <h1>Company Management System</h1>
      <div className="headernav">
        <button><a href="/">Home</a></button>
        <button><a href="/employees">Employees</a></button>
        <button><a href="/customers">Customers</a></button>
        <button><a href="/products">Products</a></button>
        <button><a href="/orders">Orders</a></button>
        <button><a href="/vendors">Vendors</a></button>
      </div>
    </div>
  )
}

export default Header