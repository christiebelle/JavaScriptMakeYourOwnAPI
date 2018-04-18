const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //all the things we just installed via NPM
const path = require("path"); //this is a node package that is already pre installed but we need to require in anyway

app.use(bodyParser.json()); //telling our server that we will accept in json objects
app.use(bodyParser.urlencoded({extended: true}));

const MongoClient = require("mongodb").MongoClient; //allows the connection to the database

//ALL OF THE ABOVE IS THE SETUP STUFF
MongoClient.connect("mongodb://localhost:27017", function(err, db){
  if(err){           //port 27017 is a mongo default!!
    console.log(err);
    return;   //essentially, log the error and then get the hell out
  }

  app.get("/", function(req, res){  //looks like it does in Java!
    res.json("ok");
  });

  app.listen(3000, function(){ //port 3000 is a node default!!
    console.log("Listening for requests on port 3000");
  });
});
