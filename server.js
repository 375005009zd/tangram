const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()


app.get('/main', function(req,res){

  fs.readFile(path.join(__dirname,'main.html'),function(err,data){
    if(!err){
      res.end(data);
    }
  })
})

app.get('/index.js', function(req,res){

  fs.readFile(path.join(__dirname,'index.js'),function(err,data){
    if(!err){
      res.end(data);
    }
  })
})

app.get('/tangram.png', function(req,res){

  fs.readFile(path.join(__dirname,'tangram.png'),function(err,data){
    if(!err){
      res.end(data);
    }
  })
})


app.listen(3000)