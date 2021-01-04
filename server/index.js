let express = require("express");
let server = express();
let countries = require("./countries");
let apicache = require("apicache-plus");
let cors = require("cors");

server.use(cors());

// Send the countries JSON and cache the response for the next 5 minutes.
server.get("/countries", apicache("5 minutes"), (req, res) => {
  res.json(countries);
});

server.listen(1234, () => {
  console.log("listening on 1234");
});
