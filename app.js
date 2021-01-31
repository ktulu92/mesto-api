
const express = require("express");
const router = require('./routers')

const app = express();
const PORT = 3000;

app.use('/', express.static('public'))
app.use('/',router)

app.listen(PORT, ()=>{
  console.log(`application run on port ${PORT}`)
})


