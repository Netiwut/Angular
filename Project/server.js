const express = require('express')
const app = express()


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// app.get('/', function(req , res){

// })

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("name", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });


  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("name").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
  });

  app.listen(3000)

  // app.get('/src/app/index',function(req,res){
    
  // })

  app.get('/', function(req,res){
    res.sendfile(__dirname + '/src/app/index/index.component.html');
   }); 