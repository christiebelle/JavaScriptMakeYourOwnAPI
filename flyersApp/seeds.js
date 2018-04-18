use philadelphia_flyers;
db.dropDatabase();

db.players.insert([{
  name: "Claude Giroux",
  position: "Centre",
  jerseyNo: 28
},
{
  name: "Michael Raffl",
  position: "Left Wing",
  jerseyNo: 12
},
{
  name: "Brian Elliott",
  position: "Goalie",
  jerseyNo: 37
}])
