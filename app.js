const express = require('express')
const app = express()
const path = require("node:path")
 
app.get('/', function (req, res) {
  //res.send('Hello Node/Express/Heroku')
  res.sendFile(path.join(__dirname, 'index.html'));
})
 
app.listen(process.env.PORT || 3000,
    () => console.log("server running..."));