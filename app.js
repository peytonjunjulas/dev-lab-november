const express = require('express')
// const req = require('express/lib/request')
// const res = require('express/lib/response')
const path = require("node:path")
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");

 
let userName = "Peyton Page for express";
let thatData = "";

app.get('/', function (req, res) {
  res.render('index', { userName: userName});
})

app.post("/saveToNode", (req, res) => {
  console.log(req.body);
  console.group(req.body.userName);
  res.render('index', { userName: req.body.userName });
})
 
app.listen(process.env.PORT || 3000,
    () => console.log("server running..."));