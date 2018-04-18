const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect("mongodb://localhost:27017", function(err, client){
  if(err){
    console.log(err);
    return;
  }
  const db = client.db("flyers_players")
  console.log("connected to database");

  server.post("/api/players", function(req, res){
    const flyersPlayers = db.collection("players");
    const newFlyer = req.body;
    flyersPlayers.save(newFlyer, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log("saved to db");
      res.status(201);
      res.json(quoteToSave);
    })
  });

  server.get("/api/flyers", function(req, res){
    const flyersPlayers = db.collection("players");
    flyersPlayers.find().toArray(function(err, allPlayers){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.json(allPlayers);
    });
  });

  server.delete("/api/players", function(req, res){
    const flyersPlayers = db.collection("players");
    const filterObject = {};
    flyersPlayers.deleteMany(filterObject, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(204);
      res.send();
    });
  });

  server.put("/api/players/:id", function(req, res){
    const flyersPlayers = db.collection("players");
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    const updatedData = req.body;

    flyersPlayers.update(filterObject, updatedData, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(204);
      res.send();
    })
  })



  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});
