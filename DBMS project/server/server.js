const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')
const { listenerCount } = require('process')

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json())

const port = 5000

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ojus@132",
  database: "miniproject" 
})

//GET REQUESTS
app.get('/employees', (req, res)=>{
  const sql = "SELECT * FROM employees";
  db.query(sql, (err,result)=>{
    if(err) res.json({"message": "Server Error"})
    return res.json(result);
  })
})

app.get('/products', (req, res)=>{
  const sql = "SELECT * FROM products";
  db.query(sql, (err,result)=>{
    if(err) res.json({"message": "Server Error"})
    return res.json(result);
  })
})

app.get('/vendors', (req, res)=>{
  const sql = "SELECT * FROM vendor";
  db.query(sql, (err,result)=>{
    if(err) res.json({"message": "Server Error"})
    return res.json(result);
  })
})

app.get('/Orders', (req, res)=>{
  const sql = "SELECT * FROM current_orders";
  db.query(sql, (err,result)=>{
    if(err) res.json({"message": "Server Error"})
    return res.json(result);
  })
})

app.get('/customers', (req, res)=>{
  const sql = "SELECT * FROM customer";
  db.query(sql, (err,result)=>{
    if(err) res.json({"message": "Server Error"})
    return res.json(result);
  })
})

//POST REQUESTS
app.post('/createCustomer', (req, res)=>{
  const sql = "INSERT INTO customer (c_name, c_address, c_phone, c_email) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.name,
    req.body.address,
    req.body.phone,
    req.body.email
  ]
  db.query(sql, values, (err, result)=>{
    if(err) return res.json({message: "Something unexpected occured. Failed to create Customer."})
    return res.json({message:"Customer created successfully."})
  })
})

app.post('/createProduct', (req, res)=>{
  const sql = "INSERT INTO products (p_name, p_price, p_stock) VALUES (?, ?, ?)";
  const values = [
    req.body.name,
    req.body.price,
    req.body.stock
  ]
  db.query(sql, values, (err, result)=>{
    if(err) return res.json({message: "Something unexpected occured. Failed to create Product."})
    return res.json({message:"Product created successfully."})
  })
})

app.post('/createEmployee', (req, res)=>{
  const sql = "INSERT INTO employees (name, e_phone, e_email, d_id) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.name,
    req.body.phone,
    req.body.email,
    req.body.department,
  ]
  db.query(sql, values, (err, result)=>{
    if(err) return res.json({message: "Something unexpected occured. Failed to create Employee."})
    return res.json({message:"Product created successfully."})
  })
})

//DELETE REQUESTS
app.delete("/deleteProduct/:id", (req, res)=>{
  const id=req.params.id;
  const sql = "DELETE FROM products WHERE p_id=?";
  const values = [id];
  db.query(sql, values, (err, result)=>{
    if(err)
      return res.json({message:"Something unexpected occurred." + err});
    return res.json({success: "Product deleted successfully."})
  })
})

app.delete("/deleteEmployee/:id", (req, res)=>{
  const id=req.params.id;
  const sql = "DELETE FROM employees WHERE e_id=?";
  const values = [id];
  db.query(sql, values, (err, result)=>{
    if(err)
      return res.json({message:"Something unexpected occurred." + err});
    return res.json({success: "Product deleted successfully."})
  })
})



app.listen(port, ()=>{
  console.log("listening")
})