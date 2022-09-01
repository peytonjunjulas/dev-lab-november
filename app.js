const express = require('express')
const path = require("node:path")

const app = express()
app.set("view engine", "ejs");

 
let userNameExpress = "Joe";

app.get('/', function (req, res) {
  res.render('index', { userNameEjs: userNameExpress});
})
 
app.listen(process.env.PORT || 3000,
    () => console.log("server running..."));