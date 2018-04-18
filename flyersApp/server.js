const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //all the things we just installed via NPM
const path = require("path"); //this is a node package that is already pre installed but we need to require in anyway

app.use(bodyParser.json()); //telling our server that we will accept in json objects
app.use(bodyParser.urlencoded({extended: true}));

const MongoClient = require("mongodb").MongoClient; //allows the connection to the database

//ALL OF THE ABOVE IS THE SETUP STUFF
