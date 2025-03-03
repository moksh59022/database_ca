require("dotenv").config()
const express = require("express");
const app = express()

const port = process.env.PORT

app.use(express.json())



app.get('/',(req,res)=>{
  res.send('hello')
})


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})

